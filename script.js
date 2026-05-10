/* ── Form handling (Formspree AJAX) ── */

function handleForm(formId, successId, errorId, submitId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const success = document.getElementById(successId);
  const error   = document.getElementById(errorId);
  const submit  = document.getElementById(submitId);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btnText = submit.querySelector('.btn-text');
    const spinner = submit.querySelector('.spinner');

    /* basic client validation */
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (field.type === 'checkbox' && !field.checked) { valid = false; return; }
      if (field.value.trim() === '') { valid = false; field.setAttribute('aria-invalid', 'true'); }
      else field.removeAttribute('aria-invalid');
    });

    if (!valid) {
      error.classList.add('visible');
      return;
    }
    error.classList.remove('visible');

    /* loading state */
    submit.disabled = true;
    if (btnText) btnText.textContent = 'Wird gesendet…';
    if (spinner) spinner.hidden = false;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.hidden = true;
        success.classList.add('visible');
      } else {
        throw new Error('server');
      }
    } catch {
      error.classList.add('visible');
      submit.disabled = false;
      if (btnText) btnText.textContent = 'Kostenlos anfragen';
      if (spinner) spinner.hidden = true;
    }
  });
}

handleForm('hero-form', 'hero-success', 'hero-error', 'hero-submit');
handleForm('cta-form',  'cta-success',  'cta-error',  'cta-submit');

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
