const form = document.getElementById('rsvp-form');
const modal = document.getElementById('toast-modal');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', e => {
  e.preventDefault();
  modal.style.display = 'block';
  form.reset();
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};
const form = document.getElementById('rsvp-form');
  const modal = document.getElementById('toast-modal');
  const closeBtn = document.querySelector('.close');

  form.addEventListener('submit', e => {
    e.preventDefault();
    modal.style.display = 'flex';
    form.reset();
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
  
