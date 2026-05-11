/* ── Form handling ── */

const FIELD_ERRORS = {
  url:     { empty: 'Bitte gib deine Website ein.' },
  email:   { empty: 'Bitte gib deine E-Mail-Adresse ein.', invalid: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
  privacy: { empty: 'Bitte stimme der Datenschutzerklärung zu.' }
};

function setFieldError(field, msg) {
  field.setAttribute('aria-invalid', 'true');
  const errEl = field.closest('.field')?.querySelector('.field-error')
             || document.getElementById(field.id.replace(/(hero|final)-/, '$1-') + '-err');
  if (errEl) errEl.textContent = msg;
  if (field.type === 'checkbox') {
    const label = field.closest('form').querySelector(`label[for="${field.id}"]`);
    if (label) label.classList.add('label-invalid');
  }
}

function clearFieldError(field) {
  field.removeAttribute('aria-invalid');
  const errEl = field.closest('.field')?.querySelector('.field-error')
             || document.getElementById(field.id.replace(/(hero|final)-/, '$1-') + '-err');
  if (errEl) errEl.textContent = '';
  if (field.type === 'checkbox') {
    const label = field.closest('form').querySelector(`label[for="${field.id}"]`);
    if (label) label.classList.remove('label-invalid');
  }
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const name = field.name;
    if (field.type === 'checkbox') {
      if (!field.checked) { setFieldError(field, FIELD_ERRORS.privacy.empty); valid = false; }
      else clearFieldError(field);
      return;
    }
    if (field.value.trim() === '') {
      setFieldError(field, FIELD_ERRORS[name]?.empty || 'Pflichtfeld.');
      valid = false;
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
      setFieldError(field, FIELD_ERRORS.email.invalid);
      valid = false;
    } else {
      clearFieldError(field);
    }
  });
  return valid;
}

function handleForm(formId, successId, errorId, submitId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const success = document.getElementById(successId);
  const error   = document.getElementById(errorId);
  const submit  = document.getElementById(submitId);

  /* clear errors on input */
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener(field.type === 'checkbox' ? 'change' : 'input', () => clearFieldError(field));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;
    error.classList.remove('visible');

    const btnText = submit.querySelector('.btn-text');
    submit.disabled = true;
    submit.classList.add('btn-loading');
    if (btnText) btnText.textContent = 'Wird gesendet…';

    try {
      await fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(new FormData(form)),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      form.hidden = true;
      success.classList.add('visible');
    } catch {
      error.classList.add('visible');
      submit.disabled = false;
      submit.classList.remove('btn-loading');
      if (btnText) btnText.textContent = 'Kostenlos anfragen';
    }
  });
}

handleForm('form-hero',  'hero-success',  'hero-error',  'hero-submit');
handleForm('form-final', 'final-success', 'final-error', 'final-submit');

/* ── Dynamic copyright year ── */
(function () {
  const el = document.getElementById('footer-copy');
  if (el) el.textContent = `© ${new Date().getFullYear()} BFSG-Check. Alle Rechte vorbehalten.`;
})();

/* ── Sticky mobile CTA — appears after hero leaves viewport ── */
(function () {
  const hero   = document.getElementById('anfrage');
  const sticky = document.getElementById('sticky-cta');
  if (!hero || !sticky) return;

  const obs = new IntersectionObserver(
    ([entry]) => sticky.classList.toggle('visible', !entry.isIntersecting),
    { threshold: 0 }
  );
  obs.observe(hero);
})();

/* ── Scroll-to-top button ── */
(function () {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── Umsetzung Modal ── */
(function () {
  const modal    = document.getElementById('umsetzung-modal');
  const openBtn  = document.getElementById('open-umsetzung-modal');
  const closeBtn = document.getElementById('modal-close');
  const nextBtn  = document.getElementById('modal-next');
  const step1    = document.getElementById('modal-step-1');
  const step2    = document.getElementById('modal-step-2');
  const dots     = document.querySelectorAll('.modal-step');
  const typeInput = document.getElementById('umsetzung-type');
  if (!modal) return;

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    resetModal();
  }
  function resetModal() {
    step1.hidden = false; step2.hidden = true;
    dots[0].classList.add('active'); dots[0].classList.remove('done');
    dots[1].classList.remove('active');
    document.querySelectorAll('input[name="website-type"]').forEach(r => r.checked = false);
    nextBtn.disabled = true;
    document.getElementById('form-umsetzung').hidden = false;
    document.getElementById('uz-success').classList.remove('visible');
    document.getElementById('uz-error').classList.remove('visible');
  }

  openBtn?.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  /* Enable next when option selected */
  document.querySelectorAll('input[name="website-type"]').forEach(radio => {
    radio.addEventListener('change', () => { nextBtn.disabled = false; });
  });

  /* Step 1 → 2 */
  nextBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="website-type"]:checked');
    if (!selected) return;
    typeInput.value = selected.value;
    step1.hidden = true; step2.hidden = false;
    dots[0].classList.remove('active'); dots[0].classList.add('done');
    dots[1].classList.add('active');
    document.getElementById('uz-url').focus();
  });

  /* Form submit */
  const form     = document.getElementById('form-umsetzung');
  const uzSubmit = document.getElementById('uz-submit');
  const uzSuccess = document.getElementById('uz-success');
  const uzError   = document.getElementById('uz-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (field.value.trim() === '') {
        valid = false; field.setAttribute('aria-invalid', 'true');
        const err = field.closest('.field')?.querySelector('.field-error');
        if (err) err.textContent = 'Pflichtfeld.';
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
        valid = false; field.setAttribute('aria-invalid', 'true');
        const err = field.closest('.field')?.querySelector('.field-error');
        if (err) err.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
      } else {
        field.removeAttribute('aria-invalid');
        const err = field.closest('.field')?.querySelector('.field-error');
        if (err) err.textContent = '';
      }
    });
    if (!valid) return;

    const btnText = uzSubmit.querySelector('.btn-text');
    uzSubmit.disabled = true;
    uzSubmit.classList.add('btn-loading');
    if (btnText) btnText.textContent = 'Wird gesendet…';

    try {
      await fetch(form.action, {
        method: 'POST', mode: 'no-cors',
        body: new URLSearchParams(new FormData(form)),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      form.hidden = true;
      uzSuccess.classList.add('visible');
    } catch {
      uzError.classList.add('visible');
      uzSubmit.disabled = false;
      uzSubmit.classList.remove('btn-loading');
      if (btnText) btnText.textContent = 'Unverbindliches Angebot anfordern';
    }
  });
})();
