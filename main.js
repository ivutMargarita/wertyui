$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});

let info = document.getElementById('infostr');
let block = document.getElementById('heh');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    if(value < 200){
        info.style.opacity = 1 + (-0.005025131*(value-1));
        block.style.opacity = 0 + (0.005025131*(value-1));
    };
    if(value > 200){
        info.style.opacity = 0 + (0.005025131*(value-1));
        block.style.opacity = 1 + (-0.005025131*(value-1));
    };
    if(value > 200){
        info.style.opacity = 0;
        block.style.opacity = 1;
    };
    console.log(scrollY);
});

var Quest = new Array(10); //this sets up an array for all of the answers that are given

function populate() {
  // alert("function populate started");
  // this function gives each of the answers 0 points so if someone doesn't answer a question
  // the whole thing will continue to work
  for (var i = 0; i <9 ; i++) {
    Quest[i] = 0;
  }
}

function total() {
  // alert("Pusk");
  // // alert("function total started");
  // // this function adds the number of points each answer is worth together
  myScore = 0;
  for (var i = 0; i < 9; i++) {
    myScore = myScore + Quest[i];
  }
  analyzer(myScore);
}

myContents = new Array();
myContents[0] = "По результатам теста мы определили, что сейчас вам лучше побыть одному и погрузиться в себя, поэтому мы предлагаем вам посетить места из категории «парки»";
myContents[1] = "По результатам теста мы определили, что вы человек, знающий толк в еде, и мы бы посоветовали вам посидеть где-нибудь с друзьями и поделиться с ними новостями, поэтому предлагаем вам посетить места из категории «кафе»";
myContents[2] = "По результатам теста мы определили, что вы человек, который не может долго сидеть на месте и предпочитает повеселиться с друзьями, поэтому мы предлагаем вам посетить места из категории «активный отдых";
myContents[3] = "По результатам теста мы определили, что вам важен внутренний мир человека, и вы предпочитаете обогощать свой, поэтому мы предлагаем вам посетить места из категории «выставки/музеи";

function analyzer(myScore) {
  // this function uses the total calculated score to figure out which personality type they are
  if (myScore > 34) {
    myContentsPtr = 5;
  } //6
  else {
    if (myScore > 27) {
      myContentsPtr = 4;
    } //5
    else {
      if (myScore > 20) {
        myContentsPtr = 3;
      } //4
      else {
        if (myScore > 13) {
          myContentsPtr = 2;
        } //3
        else {
          if (myScore > 6) {
            myContentsPtr = 1;
          } //2
          else {
            myContentsPtr = 0;
          } //1
        }
      }
    }
  }
  // alert(myContents[myContentsPtr]);
  myDisplay(myContents[myContentsPtr]);
}

function myDisplay(myContents) {
  //This function will open a new window and show the results calculated
  // alert(myContents); **use alert for testing only**.
  document.getElementById("result").innerHTML = myContents;
}

function saver(q, points) {
  // this function puts the points that each answer is worth into the array
  q = q - 1;
  Quest[q] = points;
}
