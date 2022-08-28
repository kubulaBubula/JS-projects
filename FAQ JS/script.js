// ////////////////////////////////////// Variables
/*jshint esversion: 8 */
const firstArr = document.getElementById('first')
const secondArr = document.getElementById('second')
const thirdArr = document.getElementById('third')

const ans1 = document.getElementById('answer1')
const ans2 = document.getElementById('#answer2')
const ans3 = document.getElementById('#answer3')

// /////////////////////////// first container

firstArr.addEventListener('click', function (){
    if (ans1.style.display === "none"){
        ans1.style.display = "block";
    } else {
        ans1.style.display = "none";
    }
});
// //////////////////////////// second container
secondArr.addEventListener('click', function (){
  if (ans2.style.display === "none"){
    ans2.style.display = "block"; 
  } else {
    ans2.style.display = "none";
  }
});


// ////////////////////////////// third container
thirdArr.addEventListener('click', function (){
    if (ans3.style.display === "none"){
        ans3.style.display = "block"; 
      } else {
        ans3.style.display = "none";
      }
});

