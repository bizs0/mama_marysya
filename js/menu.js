// Страница меню: разделы, категории, поиск, карточки блюд
(function () {
  'use strict';
  var D = window.SITE_DATA;

  var state = {
    group: location.hash === '#pf' ? 'pf' : 'furshet',
    cat: 'all',
    q: ''
  };

  var tabsBox = document.getElementById('groupTabs');
  var chipsBox = document.getElementById('catChips');
  var root = document.getElementById('menuRoot');
  var searchInput = document.getElementById('menuSearch');
  var searchClear = document.getElementById('searchClear');

  function icon(name, cls) {
    return '<svg class="' + (cls || 'ic') + '" aria-hidden="true"><use href="assets/icons.svg#i-' + name + '"/></svg>';
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmtPrice(p) { return (p % 1 === 0) ? String(p) : p.toFixed(2); }

  // доступ к корзине из main.js (существует после загрузки data+main)
  var qtyOf = function (id) {
    try { return window.CartAPI ? window.CartAPI.qty(id) : 0; } catch (e) { return 0; }
  };

  // ---------- вкладки разделов ----------
  function renderTabs() {
    tabsBox.innerHTML = D.groups.map(function (g) {
      var ic = g.id === 'furshet' ? 'chef-hat' : 'cooking-pot';
      var count = D.dishes.filter(function (d) { return catById(d.categoryId).group === g.id; }).length;
      return '<button class="tab' + (state.group === g.id && !state.q ? ' on' : '') + '" data-group="' + g.id + '">' +
        icon(ic) + esc(g.name) + ' · ' + count + '</button>';
    }).join('');
  }

  function catById(id) {
    return D.categories.find(function (c) { return c.id === id; }) || { group: 'furshet', name: '' };
  }

  // ---------- чипсы категорий ----------
  function renderChips() {
    var cats = D.categories.filter(function (c) { return c.group === state.group; });
    var html = '<button class="chip' + (state.cat === 'all' ? ' on' : '') + '" data-cat="all">Все</button>';
    html += cats.map(function (c) {
      return '<button class="chip' + (state.cat === c.id ? ' on' : '') + '" data-cat="' + c.id + '">' + esc(c.name) + '</button>';
    }).join('');
    chipsBox.innerHTML = html;
  }

  // ---------- карточка блюда ----------
  function dishCard(d) {
    var qty = qtyOf(d.id);
    var actions;
    if (qty > 0) {
      actions = '<div class="stepper on">' +
        '<button data-dec="' + d.id + '" aria-label="Уменьшить">' + icon('minus') + '</button>' +
        '<span class="stepper-val">' + qty + '</span>' +
        '<button data-inc="' + d.id + '" aria-label="Увеличить">' + icon('plus') + '</button>' +
      '</div>';
    } else {
      actions = '<button class="add-btn" data-add="' + d.id + '">' + icon('plus') + 'В корзину</button>';
    }
    return '<article class="dish" data-dish="' + d.id + '">' +
      '<div class="dish-media">' +
        (d.image
          ? '<img src="' + esc(d.image) + '" alt="' + esc(d.name) + '" loading="lazy" decoding="async" onerror="this.remove()">'
          : '') +
        '<div class="dish-ph">' + icon('utensils-crossed') + '</div>' +
      '</div>' +
      '<div class="dish-body">' +
        '<h3 class="dish-name">' + esc(d.name) + '</h3>' +
        '<div class="dish-bottom">' +
          (d.ingredients
            ? '<button class="dish-more">Состав ' + icon('chevron-down') + '</button>' +
              '<div class="dish-ingr">' + esc(d.ingredients) + '</div>'
            : '') +
          '<div class="dish-meta">' +
            '<span class="dish-weight">' + esc(d.weight || '') + '</span>' +
            '<span class="dish-price">' + fmtPrice(d.price) + ' руб.</span>' +
          '</div>' +
          '<div class="dish-actions" data-actions="' + d.id + '">' + actions + '</div>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  // ---------- секции и рендер ----------
  function render() {
    renderTabs();
    renderChips();

    var dishes = D.dishes.slice();
    var note = '';
    var cats;

    if (state.q) {
      dishes = dishes.filter(function (d) {
        return (d.name + ' ' + (d.ingredients || '')).toLowerCase().indexOf(state.q) !== -1;
      });
      cats = D.categories.filter(function (c) {
        return dishes.some(function (d) { return d.categoryId === c.id; });
      });
      note = dishes.length
        ? 'Нашлось позиций: ' + dishes.length + ' — по всему меню (оба раздела)'
        : '';
    } else {
      cats = D.categories.filter(function (c) {
        return c.group === state.group && (state.cat === 'all' || state.cat === c.id);
      });
    }

    var html = note ? '<div class="menu-results-note">' + esc(note) + '</div>' : '';

    if (!dishes.length || !cats.length) {
      html = '<div class="menu-empty">' + icon('search') +
        '<p>По запросу ничего не нашлось.<br>Попробуйте короче — например, «сырники» или «канапе».</p></div>';
    } else {
      html += cats.map(function (c) {
        var items = dishes.filter(function (d) { return d.categoryId === c.id; });
        if (!items.length) return '';
        return '<section class="cat-section" id="' + c.id + '">' +
          '<div class="cat-head"><h2>' + esc(c.name) + '</h2><span class="cat-count">' + items.length + ' поз.</span></div>' +
          '<div class="dishes-grid">' + items.map(dishCard).join('') + '</div>' +
        '</section>';
      }).join('');
    }
    root.innerHTML = html;
  }

  // обновление кнопок на карточках при изменении корзины (без перерисовки всего)
  window.CartUIRefresh = function () {
    root.querySelectorAll('[data-actions]').forEach(function (box) {
      var id = +box.dataset.actions;
      var qty = qtyOf(id);
      if (qty > 0) {
        box.innerHTML = '<div class="stepper on">' +
          '<button data-dec="' + id + '" aria-label="Уменьшить">' + icon('minus') + '</button>' +
          '<span class="stepper-val">' + qty + '</span>' +
          '<button data-inc="' + id + '" aria-label="Увеличить">' + icon('plus') + '</button>' +
        '</div>';
      } else {
        box.innerHTML = '<button class="add-btn" data-add="' + id + '">' + icon('plus') + 'В корзину</button>';
      }
    });
  };

  // прокрутка строки категорий так, чтобы активный чипс оказался по центру
  function centerActiveChip() {
    var active = chipsBox.querySelector('.chip.on');
    if (!active) return;
    var br = active.getBoundingClientRect();
    var cbr = chipsBox.getBoundingClientRect();
    var target = chipsBox.scrollLeft + (br.left + br.width / 2) - (cbr.left + chipsBox.clientWidth / 2);
    chipsBox.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }

  // ---------- события ----------
  tabsBox.addEventListener('click', function (e) {
    var b = e.target.closest('[data-group]');
    if (!b) return;
    state.group = b.dataset.group;
    state.cat = 'all';
    state.q = '';
    searchInput.value = '';
    searchClear.classList.remove('on');
    history.replaceState(null, '', state.group === 'pf' ? '#pf' : '#furshet');
    render();
    chipsBox.scrollTo({ left: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'auto' });
  });

  chipsBox.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]');
    if (!b) return;
    state.cat = b.dataset.cat;
    render();
    centerActiveChip();
    var target = document.getElementById(state.cat);
    if (target) {
      var top = target.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });

  searchInput.addEventListener('input', function () {
    state.q = searchInput.value.trim().toLowerCase();
    searchClear.classList.toggle('on', !!searchInput.value);
    render();
  });
  searchClear.addEventListener('click', function () {
    searchInput.value = '';
    state.q = '';
    searchClear.classList.remove('on');
    render();
    searchInput.focus();
  });

  // разворачивание состава
  root.addEventListener('click', function (e) {
    var more = e.target.closest('.dish-more');
    if (!more) return;
    var ingr = more.parentElement.querySelector('.dish-ingr');
    var open = ingr.classList.toggle('open');
    more.classList.toggle('open', open);
    more.firstChild.textContent = open ? 'Скрыть ' : 'Состав ';
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  render();
})();
