const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;

  if (id) {
    // Toggle the "active" class for the clicked button
    e.target.classList.toggle("active");

    // Remove the "active" class from other buttons
    btns.forEach(function (btn) {
      if (btn !== e.target) {
        btn.classList.remove("active");
      }
    });

    // Hide or show the clicked article based on its current state
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('active');
    }
  }
});
