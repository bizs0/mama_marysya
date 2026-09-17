// ============================================================
// Общая логика: корзина (localStorage), панель корзины,
// формирование заказа и переход в Telegram
// ============================================================
(function () {
  'use strict';

  var D = window.SITE_DATA;
  var cfg = D.config;
  var dishById = {};
  D.dishes.forEach(function (d) { dishById[d.id] = d; });

  var STORAGE_KEY = 'mm_cart_v1';

  // ---------- состояние ----------
  function readCart() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      var clean = {};
      Object.keys(raw).forEach(function (k) {
        var qty = parseInt(raw[k], 10);
        var id = parseInt(k, 10);
        if (qty > 0 && dishById[id]) clean[id] = qty;
      });
      return clean;
    } catch (e) { return {}; }
  }
  function saveCart(cart) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (e) {}
  }
  var cart = readCart();

  // ---------- утилиты ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function icon(name, cls) {
    return '<svg class="' + (cls || 'ic') + '" aria-hidden="true"><use href="assets/icons.svg#i-' + name + '"/></svg>';
  }
  function fmtPrice(p) {
    return (p % 1 === 0) ? String(p) : p.toFixed(2);
  }
  function cartCount() {
    return Object.keys(cart).reduce(function (s, k) { return s + cart[k]; }, 0);
  }
  function cartSum() {
    return Object.keys(cart).reduce(function (s, k) { return s + dishById[k].price * cart[k]; }, 0);
  }

  // ---------- текст заказа (формат как в согласованном примере) ----------
  function buildOrderText() {
    var lines = [];
    Object.keys(cart).map(function (k) { return dishById[k]; })
      .sort(function (a, b) { return a.id - b.id; })
      .forEach(function (d) {
        lines.push('- ' + d.name + ' x' + cart[d.id] + ' = ' + (d.price * cart[d.id]).toFixed(2) + ' BYN');
      });
    return 'Здравствуйте! Хочу оформить заказ:\n\n' + lines.join('\n') + '\n\nИтого: ' + cartSum().toFixed(2) + ' BYN';
  }

  // ---------- панель корзины (инжектится на все страницы) ----------
  var drawerHtml =
    '<div class="cart-backdrop" data-cart-close></div>' +
    '<aside class="cart cart_pos-right" id="cartPanel" aria-label="Корзина">' +
      '<div class="cart-head">' +
        '<div class="cart-title">' + icon('shopping-basket') + 'Корзина</div>' +
        '<span class="cart-count" id="cartCount"></span>' +
        '<button class="icon-btn" data-cart-close aria-label="Закрыть корзину">' + icon('x') + '</button>' +
      '</div>' +
      '<div class="cart-items" id="cartItems"></div>' +
      '<div class="cart-foot" id="cartFoot"></div>' +
    '</aside>';
  document.body.insertAdjacentHTML('beforeend', drawerHtml);

  var panel = document.getElementById('cartPanel');
  var backdrop = document.querySelector('.cart-backdrop');

  function openCart() { panel.classList.add('on'); backdrop.classList.add('on'); document.body.style.overflow = 'hidden'; }
  function closeCart() { panel.classList.remove('on'); backdrop.classList.remove('on'); document.body.style.overflow = ''; }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCart(); });

  // ---------- рендер ----------
  function renderBadge() {
    var badges = document.querySelectorAll('.cart-badge');
    var n = cartCount();
    badges.forEach(function (b) {
      var was = b.classList.contains('on');
      b.textContent = n;
      b.classList.toggle('on', n > 0);
      if (n > 0 && was) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
    });
  }

  function renderCart() {
    var itemsBox = document.getElementById('cartItems');
    var footBox = document.getElementById('cartFoot');
    var countBox = document.getElementById('cartCount');
    var ids = Object.keys(cart);

    countBox.textContent = ids.length ? cartCount() + ' поз. / ' + ids.length + ' наим.' : '';

    if (!ids.length) {
      itemsBox.innerHTML =
        '<div class="cart-empty">' + icon('shopping-basket') +
        '<p>Корзина пуста.<br>Загляните в меню — там вкусно.</p>' +
        (location.pathname.indexOf('menu') === -1
          ? '<a class="btn btn-primary" href="menu.html">Перейти в меню</a>'
          : '<button class="btn btn-primary" data-cart-close>Выбрать блюда</button>') +
        '</div>';
      footBox.innerHTML = '';
      return;
    }

    var sum = 0;
    var html = ids.map(function (k) {
      var d = dishById[k];
      var lineSum = d.price * cart[k];
      sum += lineSum;
      return '<div class="cart-item">' +
        (d.image
          ? '<img class="cart-thumb" loading="lazy" src="' + esc(d.image) + '" alt="">'
          : '<div class="cart-thumb"></div>') +
        '<div class="cart-item-info">' +
          '<div class="cart-item-name">' + esc(d.name) + '</div>' +
          '<div class="cart-item-price">' + fmtPrice(d.price) + ' руб.' + (d.weight ? ' / ' + esc(d.weight) : '') + '</div>' +
        '</div>' +
        '<div class="cart-item-side">' +
          '<div class="cart-item-total">' + fmtPrice(lineSum) + ' руб.</div>' +
          '<div class="mini-stepper">' +
            '<button data-dec="' + d.id + '" aria-label="Уменьшить количество">' + icon('minus', 'ic') + '</button>' +
            '<span>' + cart[k] + '</span>' +
            '<button data-inc="' + d.id + '" aria-label="Увеличить количество">' + icon('plus', 'ic') + '</button>' +
            '<button class="cart-item-remove" data-remove="' + d.id + '" aria-label="Удалить из корзины">' + icon('trash-2') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
    itemsBox.innerHTML = html;

    var note;
    if (sum < cfg.freeDeliveryFrom) {
      note = '<div class="delivery-note warn">' + icon('truck') +
        '<span>' + esc(cfg.freeDeliveryNote) + '</span></div>';
    } else {
      note = '<div class="delivery-note ok-note">' + icon('truck') +
        '<span>Бесплатная доставка по г. Мозырь — уже ваша</span></div>';
    }

    footBox.innerHTML =
      note +
      '<div class="cart-total-row"><span>Итого</span><strong>' + fmtPrice(sum) + ' руб.</strong></div>' +
      '<button class="btn btn-primary btn-lg btn-block" data-order>' + icon('send') + 'Заказать в Telegram</button>' +
      '<details class="order-fallback" id="orderFallback">' +
        '<summary>Текст не вставился в сообщение? Нажмите здесь</summary>' +
        '<div class="order-copy-row">' +
          '<textarea class="order-text" id="orderText" readonly></textarea>' +
          '<button class="copy-btn" data-copy-order>' + icon('copy') + 'Копировать</button>' +
        '</div>' +
      '</details>' +
      '<div class="cart-clear"><button data-clear-cart>Очистить корзину</button></div>';

    var ta = document.getElementById('orderText');
    if (ta) ta.value = buildOrderText();
  }

  function renderAll() { renderBadge(); renderCart(); if (window.CartUIRefresh) window.CartUIRefresh(); }

  // ---------- действия ----------
  function setQty(id, qty) {
    if (qty <= 0) delete cart[id]; else cart[id] = qty;
    saveCart(cart);
    renderAll();
  }

  document.addEventListener('click', function (e) {
    var el;
    if ((el = e.target.closest('[data-cart-open]'))) { openCart(); return; }
    if (e.target.closest('[data-cart-close]')) { closeCart(); return; }
    if ((el = e.target.closest('[data-add]'))) { setQty(+el.dataset.add, 1); return; }
    if ((el = e.target.closest('[data-inc]'))) { setQty(+el.dataset.inc, cart[+el.dataset.inc] + 1); return; }
    if ((el = e.target.closest('[data-dec]'))) { setQty(+el.dataset.dec, cart[+el.dataset.dec] - 1); return; }
    if ((el = e.target.closest('[data-remove]'))) { setQty(+el.dataset.remove, 0); return; }
    if (e.target.closest('[data-clear-cart]')) {
      cart = {}; saveCart(cart); renderAll(); return;
    }
    if (e.target.closest('[data-order]')) {
      var url = cfg.telegram + '?text=' + encodeURIComponent(buildOrderText());
      window.open(url, '_blank', 'noopener');
      var fb = document.getElementById('orderFallback');
      if (fb) fb.open = true; // сразу показать запасной вариант с текстом
      return;
    }
    if (e.target.closest('[data-copy-order]')) {
      var ta = document.getElementById('orderText');
      var done = function () {
        var b = e.target.closest('[data-copy-order]');
        b.innerHTML = icon('check') + 'Готово';
        setTimeout(function () { b.innerHTML = icon('copy') + 'Копировать'; }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(done, function () { ta.select(); document.execCommand('copy'); done(); });
      } else { ta.select(); document.execCommand('copy'); done(); }
      return;
    }
  });

  // доступ для страницы меню
  window.CartAPI = {
    qty: function (id) { return cart[id] || 0; },
    setQty: setQty
  };

  renderAll();
})();
