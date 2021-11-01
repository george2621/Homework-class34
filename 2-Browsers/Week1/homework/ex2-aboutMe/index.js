'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.body.style.fontFamily = 'Arial, sans-serif';

let nickName = document.getElementById('nickname');
nickName.textContent = 'Roumieh';
let favFood = document.getElementById('fav-food');
favFood.textContent = 'BBQ';
let homeTown = document.getElementById('hometown');
homeTown.textContent = 'Homs';

let unorderList = document.querySelector('ul');

for (let item of unorderList.children) {
  item.classList.add('list-item');
}
