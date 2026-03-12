/* SUDOLAW.COM — main.js */

function toggleMenu() {
  document.getElementById('navLinks')?.classList.toggle('open');
}

function submitContact() {
  const name    = document.getElementById('name')?.value.trim();
  const org     = document.getElementById('org')?.value.trim();
  const email   = document.getElementById('email')?.value.trim();
  const matter  = document.getElementById('matter')?.value;
  const urgency = document.getElementById('urgency')?.value;
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    alert('Please provide your name, email, and a message.');
    return;
  }

  /*
    ═══════════════════════════════════════════════════
    Replace the email address below with your own.
    ═══════════════════════════════════════════════════
  */
  const to      = 'contact@sudolaw.com';
  const subject = encodeURIComponent(`[SUDOLAW] ${matter || 'Inquiry'} — ${urgency || 'Standard'}`);
  const body    = encodeURIComponent(
    `Name: ${name}\nOrg: ${org || 'N/A'}\nEmail: ${email}\nMatter: ${matter}\nUrgency: ${urgency}\n\n${message}`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  const el = document.getElementById('form-success');
  if (el) { el.style.display = 'block'; el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
}
