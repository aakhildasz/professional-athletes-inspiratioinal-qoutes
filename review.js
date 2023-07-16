const quotes = [
    {
        id: 1,
        name: "Cristiano Ronaldo",
        work: "Professional Footballer",
        img: "https://st.depositphotos.com/43708092/61434/i/450/depositphotos_614349966-stock-photo-cristiano-ronaldo-manchester-united-pre.jpg",
        info: "Talent without Hard Work is Nothing" 
    },
    {
        id: 2,
        name: "Lionel Messi",
        work: "Professional Footballer",
        img:"https://img.bleacherreport.net/img/images/photos/003/882/208/hi-res-67ba2cd4215bff0d322be08e173488e7_crop_exact.jpg?w=1200&h=1200&q=75",
        info: "You have to fight to reach your dream"
    },
    {
        id: 3,
        name: "Neymar Jr",
        work: "Professional Footballer",
        img:"https://i2-prod.mirror.co.uk/incoming/article29389219.ece/ALTERNATES/s1200c/1_Screenshot-2436.jpg",
        info: "I always dribble for a reason and I always head for the goal"
    },
    {
        id: 4,
        name: "Sunil Chettri",
        work: "Professional Footballer",
        img:"https://english.mathrubhumi.com/image/contentid/policy:1.7621475:1658488669/ADAS.jpg?$p=cd9d46f&f=1x1&w=1000&q=0.8",
        info: "Ego is only fine when it is working for your motivation"
    },
    {
        id: 5,
        name: "Virat Kohli",
        work: "Professional Cricketer",
        img:"https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds",
        info: `I love playing under pressure In fact if there's no pressure
         then I'm not in the perfect zone`
    }
    
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const work = document.getElementById('work');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const supriseBtn = document.querySelector('.random-btn');


// set starting item

let currentItem = 0;

// load intial item

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// show person based on item

function showPerson() {
    const item = quotes[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    work.textContent = item.work;
    info.textContent = item.info;
}

// show next person

nextBtn.addEventListener('click', function() {
    currentItem++;
    
    if(currentItem > quotes.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person

prevBtn.addEventListener('click', function() {
    currentItem--;

    if(currentItem < 0) {
        currentItem = quotes.length - 1;
    }
    showPerson();
});  

// show random person

// supriseBtn.addEventListener('click', function() {
//     // currentItem = Math.floor(Math.random() * quotes.length);
//     // showPerson();
// });

supriseBtn.addEventListener('click', () => {
    supriseBtn.disabled = true;
    setTimeout(() => {
        currentItem = Math.floor(Math.random() * quotes.length);
        showPerson();
        supriseBtn.disabled = false;
    }, 700);
});
