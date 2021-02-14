"use strict";

//player hund
var gu = document.getElementById('gu');
var choki = document.getElementById('choki');
var pa = document.getElementById('pa');

//computer hund
var comgu = document.getElementById('comGu');
var comchoki = document.getElementById('comChoki');
var compa = document.getElementById('compa');

// retry
var retry = document.getElementById('retry');

//insert sentence
var display = document.getElementById('display');


//配列　ジャンケン player
var arr = ["gu","choki","pa"];
//配列　ジャンケン Computer
var arr2 = ["comGu","comChoki","comPa"];

// ランダム正数 player
var num1 = arr[Math.floor(Math.random() * arr.length)];
// ランダム正数 computer
// var num2 = arr[Math.floor(Math.random() * arr.length)];
// ランダム正数 computer リファクタリング用
var num2 = arr2[Math.floor(Math.random() * arr.length)];

// flag reject
var flag = false;
// flag judge draw
var isDraw = false;

//秒数計算と点滅機能
function countup(player,computer){
  //カウント初期値を０に設定
  var countup = 0;
  //透明度の初期値を1に設定(透明は０)
  var currentOpacity = 1;

  //
  var timer = setInterval(function(){

    //カウントに１を足す
    countup = countup + 1;
    console.log(countup);

    setAnimation(player, computer);
    //もしオパシティの値が０か１か判定する
    if(currentOpacity == 0){
      currentOpacity = 1;
    }else{
      currentOpacity = 0;
    }
    //ここで上のIF文で処理されたオパシティの値を入れる
    document.getElementById(player).style.opacity = currentOpacity;
    document.getElementById(computer).style.opacity = currentOpacity;

    //カウントが10を超えたtimerをクリアしてオパシティの値を１に設定する
    //点滅は0.5秒ごと(500)
    if( 10 <= countup){
       clearInterval(timer);
       document.getElementById(player).style.opacity = 1;
       document.getElementById(computer).style.opacity = 1;

     }
   },500);
};


function setAnimation(player, computer) {

// var currentOpacity = "".style.opacity = "1";

}







//player1 gu
var btn1 = gu;
btn1.addEventListener("click",function(){
  // console.log("gu");
  // console.log(btn1);


  var num1 = "gu";

//ストップ　切り替えフラグ　他のものはクリックさせない
  if (flag && !isDraw) {

    // setTimeout('countSecond()',1000);
    return false;

  }
  flag = true;

// Hands patterns
  if( num2 == "comGu" ){
    console.log("aiko"  + " = You draw ");
    console.log(num2 + " = computer hund");
    display.innerHTML ="You draw select again" ;
    isDraw = true;
    // setInterval("gu.style.opacity^=0",500);
    // setInterval("comGu.style.opacity^=1",500);
    // setInterval("gu.style.opacity^=1",500);
    // setAnimation(num1, num2);
    countup(num1,num2);
    num2 = arr2[Math.floor(Math.random() * arr.length)];

    console.log(num2 + "= computer next hund");


  } else if (num2 == "comChoki" ){
    console.log("kachi" + " = You win!");
    console.log(num2 + " = computer hund");
      display.innerHTML ="You win!" ;
      isDraw = false;
      // setInterval("choki.style.opacity^=0",500);
      // setInterval("gu.style.opacity^=1",500);
      // setInterval("comChoki.style.opacity^=1",500);
      // setAnimation("gu", "comChoki");
      countup(num1,num2);

  } else if (num2 == "comPa"){
    console.log("make" + " = Hey loser! ");
    console.log(num2 + " = computer hund");
      display.innerHTML ="Hey loser" ;
      isDraw = false;
      // setInterval("pa.style.opacity^=0",500);
      // setInterval("gu.style.opacity^=1",500);
      // setInterval("comPa.style.opacity^=1",500);
      // setAnimation("gu", "comPa");
      countup(num1,num2);

  } else {
    console.log("error");
    console.log(num2);
  }
});



//player1 choki
var btn2 = choki;
btn2.addEventListener("click",function(){
  // console.log("gu");
  // console.log(btn1);
  var num1 = "choki";

  if (flag && !isDraw) {

    return false;
  }
  flag = true;

  if( num2 == "comGu" ){
    console.log("make" + " = Hey loser! ");
    console.log(num2);
    display.innerHTML ="Hey loser!" ;
    isDraw = false;
    // setInterval("choki.style.opacity^=1",500);
    // setInterval("comGu.style.opacity^=1",500);
    // setAnimation("choki", "comGu");
    countup(num1,num2);

  } else if (num2 == "comChoki" ){
    console.log("aiko"  + " = You draw ");
    console.log(num2);
    display.innerHTML ="You draw select again" ;
    isDraw = true;
    // setInterval("choki.style.opacity^=1",500);
    // setInterval("comChoki.style.opacity^=1",500);
    // setAnimation("choki", "comChoki");
    countup(num1,num2);
    num2 = arr2[Math.floor(Math.random() * arr.length)];


  } else if (num2 == "comPa"){
    console.log("kachi" + " = You win!");
    console.log(num2);
    display.innerHTML ="You win!" ;
    isDraw = false;
    // setInterval("choki.style.opacity^=1",500);
    // setInterval("comPa.style.opacity^=1",500);
    // setAnimation("choki", "comPa");
    countup(num1,num2);

  } else {
    console.log("error");
    console.log(num2);
  }
});





//player1 pa
var btn3 = pa;
btn3.addEventListener("click",function(){
  // console.log("gu");
  // console.log(btn1);
  var num1 = "pa";

  if (flag && !isDraw) {

    return false;
  }
  flag = true;

  if( num2 == "comGu" ){
    console.log("kachi" + " = You win!");
    console.log(num2);
    display.innerHTML ="You win!" ;
    isDraw = false;
    // setInterval("pa.style.opacity^=1",500);
    // setInterval("comGu.style.opacity^=1",500);
    // setAnimation("pa", "comGu");
    countup(num1,num2);

  } else if (num2 == "comChoki" ){
    console.log("make" + " = Hey loser! ");
    console.log(num2);
    display.innerHTML ="Hey loser" ;
    isDraw = false;
    // setInterval("pa.style.opacity^=1",500);
    // setInterval("comChoki.style.opacity^=1",500);
    // setAnimation("pa", "comChoki");
    countup(num1,num2);

  } else if (num2 == "comPa"){
    console.log("aiko"  + " = You draw ");
    console.log(num2);
    display.innerHTML ="You draw select again" ;
    isDraw = true;
    // setInterval("pa.style.opacity^=1",500);
    // setInterval("comPa.style.opacity^=1",500);
    // setAnimation("pa", "comPa");
    countup(num1,num2);
    num2 = arr2[Math.floor(Math.random() * arr.length)];

  } else {
    console.log("error");
    console.log(num2);
  }
});


var btn_retry = document.getElementById('retry');
btn_retry.addEventListener("click",function(){


  /*リロード*/
  location.reload();



});
