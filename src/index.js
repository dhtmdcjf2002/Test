const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcon.forEach((tabc_all) => {
      tabc_all.classList.remove("active");
    });

    target.classList.add("active");
  });
});

function item1() {
  var a = document.getElementById("op1").value;
  var b = document.getElementById("box1");
  if( 1 <= a && a <26){
    if(b.style.display !== 'none') {
      b.style.display = 'block';
    } else {
      b.style.display = 'none';
    }
    document.getElementById("result").value =
    (parseInt(a) - 1) * (3 * parseInt(a) + 16) / 2 + 10;

    document.getElementById("result2").value =
    Math.floor(((parseInt(a) - 1) * (3 * parseInt(a) + 16) / 2 + 10) /35) ;

    document.getElementById("result3").value =
    ((parseInt(a) - 1) * (3 * parseInt(a) + 16) / 2 + 10) %35 ;
  }else if(a == String){
    alert('숫자만 입력하세요.');
  }else{
    alert('1~25까지 올바른 레벨을 입력해주세요.');
  }
  return;
}

function item2() {
  var a = document.getElementById("op2").value;
  var b = document.getElementById("box2");
  if( 1 <= a && a < 25){
    if(b.style.display !== 'none') {
      b.style.display = 'block';
    } else {
      b.style.display = 'none';
    }
  document.getElementById("result4").value =
    parseInt(a) * 2 * (parseInt(a) + 19);

  document.getElementById("result5").value =
    Math.floor((parseInt(a) * 2 * (parseInt(a) + 19)) / 35) ;

  document.getElementById("result6").value =
  (parseInt(a) * 2 * (parseInt(a) + 19)) % 35 ;
}else if('String'){
  alert('1~25까지 올바른 레벨을 입력해주세요');

  }
  return;
}

function item3() {
  var a = document.getElementById("op3").value;
  var b = document.getElementById("box3");
  if( 1 <= a && a <= 20){
    if(b.style.display !== 'none') {
      b.style.display = 'block';
    } else {
      b.display.style = 'none';
    }
  document.getElementById("result7").value =
    parseInt(a) * 50;
  document.getElementById("result8").value =
   Math.floor ((parseInt(a) * 50) / 35);
  document.getElementById("result9").value =
    parseInt(a) * 50 % 35;
  }else if('String'){
    alert('최대 20개까지 올바른 개수를 입력해주세요');
  }
  return;
}

/* 
function createDiv() {
  const newDiv = document.createElement('div');
  const newText = document.createTextNode('안녕하세요');
  newDiv.appendChild(newText);
  document.body.appendChild(newDiv);
  create
} 
*/
