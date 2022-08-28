/*jshint esversion: 8 */
// array
const reviews = [{
    id: 1,
    name: "Susan Boyle",
    job: "Marketer",
    text: "That product is great! Im in love with the new Midnight society app from carz.co. It's super fun to use, and have met a lot of new friends because of that app! 10/10 in my opinion.",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"},
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
    ];
// consts
const img = document.getElementById('userImage');
const user = document.getElementById('userName');
const userJob = document.getElementById('job');
const userReview = document.getElementById('actualReview');

// buttons
const randomButton = document.getElementById('btn');
const prevButton = document.getElementById('arrLeft');
const nextButton = document.getElementById('arrRight');


// starting item 

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    const item = reviews[currentItem];
    img.src = item.img;
    user.textContent = item.name;
    userJob.textContent = item.job;
    userReview.textContent = item.text;
});

// loaded object 

function showUser (person){
    const item = reviews[person];
    img.src = item.img;
    user.textContent = item.name;
    userJob.textContent = item.job;
    userReview.textContent = item.text;
}

nextButton.addEventListener('click', () => {
    currentItem++;
        if (currentItem > reviews.length - 1){
            currentItem = 0;
        }
showUser(currentItem);
});

prevButton.addEventListener('click', () => {
    currentItem--;
        if (currentItem < 0){
            currentItem = reviews.length - 1;
        }
        
showUser(currentItem);
});

randomButton.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showUser(currentItem);
});

























































// // starting item 


// let currentItem = 0;

// // load item

// window.addEventListener('DOMContentLoaded',  function () {
//     const item = reviews[currentItem];  
//     img.src = item.img;
//     user.textContent = item.name;
//     userJob.textContent = item.job;
//     userReview.textContent = item.text;
// });

// function showMePerson (person){
//     const item = reviews[person];  
//     img.src = item.img;
//     user.textContent = item.name;
//     userJob.textContent = item.job;
//     userReview.textContent = item.text;
// }


// nextButton.addEventListener('click',  function () {
//     currentItem++;
//     if (currentItem > reviews.length - 1){
//         currentItem = 0;
//     }
//     showMePerson(currentItem);
// });

// prevButton.addEventListener('click',  function () {
//     currentItem--;
//     if (currentItem < 0){
//         currentItem = reviews.length -1;
//     }
//     showMePerson(currentItem);
// });

// randomButton.addEventListener('click', () => {
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showMePerson(currentItem);
// });

