// Главная страница: отзывы-карусель, FAQ, год в подвале
(function () {
  'use strict';
  var D = window.SITE_DATA;

  // ---------- фото на главной: элемент с заполненным data-photo получает картинку сверху ----------
  document.querySelectorAll('[data-photo]').forEach(function (el) {
    var src = el.getAttribute('data-photo');
    if (!src) return;
    var img = document.createElement('img');
    img.className = 'service-photo';
    img.src = src;
    img.alt = el.getAttribute('data-photo-alt') || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    el.prepend(img);
  });

  function icon(name, cls) {
    return '<svg class="' + (cls || 'ic') + '" aria-hidden="true"><use href="assets/icons.svg#i-' + name + '"/></svg>';
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ---------- FAQ ----------
  var faqBox = document.getElementById('faqList');
  if (faqBox) {
    faqBox.innerHTML = D.faq.map(function (f) {
      return '<details class="faq-item">' +
        '<summary>' + esc(f.q) + icon('chevron-down') + '</summary>' +
        '<div class="faq-a">' + esc(f.a) + '</div>' +
      '</details>';
    }).join('');
  }

  // ---------- отзывы ----------
  var box = document.getElementById('reviewsBox');
  if (box && D.reviews.length) {
    var idx = 0, timer = null;
    var stars = new Array(5).fill(icon('star', 'ic')).join('');

    function renderNav() {
      return '<div class="reviews-nav">' +
        '<button class="review-arrow" data-rev-prev aria-label="Предыдущий отзыв">' + icon('chevron-left') + '</button>' +
        '<div class="review-dots">' + D.reviews.map(function (_, i) {
          return '<span class="review-dot' + (i === idx ? ' on' : '') + '"></span>';
        }).join('') + '</div>' +
        '<button class="review-arrow" data-rev-next aria-label="Следующий отзыв">' + icon('chevron-right') + '</button>' +
      '</div>';
    }
    function reviewCard(r) {
      return '<div class="review-card">' +
        '<div class="review-stars">' + stars + '</div>' +
        '<div class="review-text">«' + esc(r.text) + '»</div>' +
        '<div class="review-who">' + esc(r.name) + '</div>' +
        '<div class="review-event">' + esc(r.event) + '</div>' +
      '</div>';
    }
    function paint(withFade) {
      var card = box.querySelector('.review-card');
      if (withFade && card) {
        card.style.opacity = '0';
        setTimeout(function () { box.innerHTML = reviewCard(D.reviews[idx]) + renderNav(); applyFit(); }, 320);
      } else {
        box.innerHTML = reviewCard(D.reviews[idx]) + renderNav();
        applyFit();
      }
    }

    // фиксируем высоту карточки по самому длинному отзыву,
    // чтобы при смене отзывов страница ниже не прыгала
    var fitHeight = 0;
    var lastW = 0;
    function applyFit() {
      var card = box.querySelector('.review-card');
      if (card && fitHeight) card.style.minHeight = fitHeight + 'px';
    }
    function measure() {
      var card = box.querySelector('.review-card');
      if (!card || !box.offsetWidth) return; // не меряем, пока блок не отрисовался
      var textEl = card.querySelector('.review-text');
      card.style.minHeight = '';
      var maxH = 0;
      D.reviews.forEach(function (r) {
        textEl.textContent = '«' + r.text + '»'; // кавычки как при реальном рендере — влияют на перенос строк
        maxH = Math.max(maxH, card.scrollHeight);
      });
      fitHeight = Math.min(maxH, 1500); // страховочный потолок от ложных замеров
      lastW = window.innerWidth;
      textEl.textContent = '«' + D.reviews[idx].text + '»';
      applyFit();
    }

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 200);
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    window.addEventListener('load', measure); // контрольный пересчёт, когда всё точно загружено
    function go(step) {
      if (window.innerWidth !== lastW) measure(); // ширина окна изменилась — пересчитываем запас высоты
      idx = (idx + step + D.reviews.length) % D.reviews.length;
      paint(true);
      restart();
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { go(1); }, 6000);
    }

    box.addEventListener('click', function (e) {
      if (e.target.closest('[data-rev-prev]')) go(-1);
      if (e.target.closest('[data-rev-next]')) go(1);
    });
    // пауза при наведении/касании
    box.addEventListener('mouseenter', function () { clearInterval(timer); });
    box.addEventListener('mouseleave', restart);
    box.addEventListener('touchstart', function () { clearInterval(timer); }, { passive: true });

    paint(false);
    measure();
    restart();
  }

  // ---------- год ----------
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
