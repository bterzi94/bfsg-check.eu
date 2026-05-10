/* =========================================
   BFSG-Check.eu – JavaScript
   ========================================= */

'use strict';

/* ── Form Handling ── */
function initForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const successEl  = form.querySelector('.form-success');
  const errorMsgEl = form.querySelector('.form-error-msg');
  const submitBtn  = form.querySelector('button[type="submit"]');
  const btnText    = submitBtn ? submitBtn.dataset.label || submitBtn.textContent : '';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearErrors(form);

    const domainInput = form.querySelector('[name="domain"]');
    const emailInput  = form.querySelector('[name="email"]');
    const dsgvoInput  = form.querySelector('[name="dsgvo"]');

    let valid = true;

    if (!domainInput.value.trim()) {
      showError(domainInput, 'Bitte gib deine Website-Adresse ein.');
      valid = false;
    } else if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+/.test(domainInput.value.trim())) {
      showError(domainInput, 'Bitte gib eine gültige Domain ein (z. B. beispiel.de).');
      valid = false;
    }

    if (!emailInput.value.trim()) {
      showError(emailInput, 'Bitte gib deine E-Mail-Adresse ein.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      showError(emailInput, 'Bitte gib eine gültige E-Mail-Adresse ein.');
      valid = false;
    }

    if (!dsgvoInput.checked) {
      showError(dsgvoInput, 'Bitte stimme der Datenschutzerklärung zu.');
      valid = false;
    }

    if (!valid) return;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Wird gesendet…';

    try {
      // PLACEHOLDER: Replace YOUR_FORM_ID with your Formspree form ID
      // Sign up at https://formspree.io — free for up to 50 submissions/month
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: domainInput.value.trim(),
          email:  emailInput.value.trim(),
        }),
      });

      if (!res.ok) throw new Error('Server error');

      form.querySelectorAll('.form-group, .checkbox-row, button[type="submit"]')
          .forEach(el => { el.style.display = 'none'; });
      if (successEl) successEl.classList.add('visible');

    } catch {
      if (errorMsgEl) errorMsgEl.classList.add('visible');
      submitBtn.disabled = false;
      submitBtn.textContent = btnText;
    }
  });
}

function showError(input, msg) {
  input.setAttribute('aria-invalid', 'true');
  const id = input.id + '-error';
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('span');
    el.id = id;
    el.className = 'field-error';
    el.setAttribute('role', 'alert');
    input.parentNode.appendChild(el);
  }
  el.textContent = msg;
  input.setAttribute('aria-describedby', id);
}

function clearErrors(form) {
  form.querySelectorAll('[aria-invalid]').forEach(el => {
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
  });
  form.querySelectorAll('.field-error').forEach(el => el.remove());
  const errMsg = form.querySelector('.form-error-msg');
  if (errMsg) errMsg.classList.remove('visible');
}

/* ── Sticky Mobile CTA ── */
function initStickyCTA() {
  const anchor = document.getElementById('hero-form-anchor');
  const cta    = document.getElementById('sticky-cta');
  if (!anchor || !cta) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        cta.classList.remove('visible');
      } else {
        cta.classList.add('visible');
      }
    },
    { threshold: 0 }
  );
  observer.observe(anchor);
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function () {
  initForm('hero-form');
  initForm('final-form');
  initStickyCTA();
});
