const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;

  if (id) {
    // Remove "active" class from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // Add "active" class to the clicked button
    e.target.classList.add("active");

    // Hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });

    // Show the clicked article
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('active');
    }
  }
});
