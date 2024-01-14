const reviews = [
    {

    id:1,
    name: "Karina",
    job: "Rocket Puncer",
    img: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/09/18/1e586277-48ba-4e8a-9b98-d8cdbe075d86.jpg",
    text: "SM엔터테인먼트 소속 4인조 걸그룹 aespa의 멤버.",
},

{

    id:2,
    name: "Winer",
    job: "Armamter",
    img: "https://thumb.mtstarnews.com/06/2023/06/2023062215005684112_1.jpg/dims/optimize",
    text: "SM엔터테인먼트 소속 4인조 걸그룹 aespa의 멤버.",
},
{

    id:3,
    name: "Giselle",
    job: "Xenoglossy",
    img: "https://cdn.mhnse.com/news/photo/202211/156012_150456_17.jpg",
    text: "SM엔터테인먼트 소속 4인조 걸그룹 aespa의 멤버",
},

{   id:4,
    name: "Nigning",
    job: "Haker",
    img: "https://i.ytimg.com/vi/CAZO-zqUzWU/maxresdefault.jpg",
    text: "SM엔터테인먼트 소속 4인조 걸그룹 aespa의 멤버",

}

];

//select items

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show previous person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});


