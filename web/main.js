const btnPrimo = document.querySelector(".primo__btn");
const btnBuyTwists = document.querySelector(".twists__btn");
const twistColorOne = document.querySelector(".btn__color_one");
const twistColorTen = document.querySelector(".btn__color_ten");
const btnOne = document.querySelector(".btn__one");
const btnTen = document.querySelector(".btn__ten");
const onevideo = document.querySelector(".block__video_3-1");
const twovideo = document.querySelector(".block__video_4-1");
const threevideo = document.querySelector(".block__video_4-10");
const fourvideo = document.querySelector(".block__video_5-1");
const fivevideo = document.querySelector(".block__video_5-10");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal__body");
const modalContent = document.querySelector(".modal__content");
const item1 = document.querySelector(".item_1");
const item2 = document.querySelector(".item_2");
const item3 = document.querySelector(".item_3");
const item4 = document.querySelector(".item_4");
const item5 = document.querySelector(".item_5");
const item6 = document.querySelector(".item_6");
const item7 = document.querySelector(".item_7");
const item8 = document.querySelector(".item_8");
const item9 = document.querySelector(".item_9");
const item10 = document.querySelector(".item_10");
const content1 = document.querySelector(".content_1");
const content2 = document.querySelector(".content_2");
const content3 = document.querySelector(".content_3");
const content4 = document.querySelector(".content_4");
const content5 = document.querySelector(".content_5");
const content6 = document.querySelector(".content_6");
const content7 = document.querySelector(".content_7");
const content8 = document.querySelector(".content_8");
const content9 = document.querySelector(".content_9");
const content10 = document.querySelector(".content_10");

let contents = [
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  content8,
  content9,
  content10,
];
let items = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
];

let primoGems = 1000;
let twistsNum = 0;
document.getElementById("primo__id").innerHTML = primoGems;
document.querySelector(".twists__numb").innerHTML = twistsNum;
btnPrimo.addEventListener("click", () => {
  addPrimo();
});
btnBuyTwists.addEventListener("click", () => {
  buyTwists();
  if (twistsNum > 0) {
    twistColorOne.style = "color: #b2a08c;";
  }
  if (twistsNum >= 10) {
    twistColorTen.style = "color: #b2a08c;";
  }
});
function addPrimo() {
  if (primoGems < 10000) {
    primoGems += 300;
    document.getElementById("primo__id").innerHTML = primoGems;
  } else {
    alert("Вы привышаете лимит допустимого, потратьте PrimoGems!");
  }
  console.log(primoGems);
}
function buyTwists() {
  if (primoGems < 160) {
    alert("Недостаточно PrimoGems. Пополните PrimoGems, хорошей игры!");
  } else if (twistsNum != 50) {
    twistsNum += 1;
    primoGems -= 160;
    document.querySelector(".twists__numb").innerHTML = twistsNum;
    document.getElementById("primo__id").innerHTML = primoGems;
  } else if (twistsNum == 50) {
    alert("Лимит исчерпан, потратьте свои крутки!");
  }
  console.log(primoGems);
}
btnOne.addEventListener("click", () => {
  if (twistsNum > 0) {
    n = 1;
    sendJS(n);
    twistsNum -= n;
    document.querySelector(".twists__numb").innerHTML = twistsNum;
    if (twistsNum === 0) {
      twistColorOne.style = "color: #ff000098;";
    } else if (twistsNum < 10) {
      twistColorTen.style = "color: #ff000098;";
    }
  } else {
    alert("Купите крутки за PrimoGems!");
  }
});
btnTen.addEventListener("click", () => {
  if (twistsNum >= 10) {
    n = 10;
    sendJS(n);
    twistsNum -= n;
    document.querySelector(".twists__numb").innerHTML = twistsNum;
    if (twistsNum < 10) {
      twistColorTen.style = "color: #ff000098;";
    }
    if (twistsNum === 0) {
      twistColorOne.style = "color: #ff000098;";
    }
  } else {
    alert(
      "Недостаточно определнного колличества круток. Докупите крутки за PrimoGems!"
    );
  }
});

async function sendJS(n) {
  if (twistsNum > 0) {
    let numbTwists = n;
    console.log(numbTwists);
    await eel.getJS(numbTwists);
  }
}
winnerArr = [];
eel.expose(callWinnerItems);
function callWinnerItems(x) {
  console.log(x[0]);
  console.log(x[1]);
  let winnerItems = {};
  winnerItems.name = String(x[0]);
  winnerItems.number = x[1];
  winnerArr.push(winnerItems);
  console.log(winnerArr);
  let fff = x[1].length; // ПОЛУЧАЕМ ДЛИНУ МАССИВА
  console.log(fff);
  let winnerName = winnerItems.name;
  let winnerNumbers = winnerItems.number;
  winnerNumbers.sort(function (a, b) {
    return b - a;
  });
  if (fff === 1) {
    // ПРОВЕРЯЕМ ДЛИННЫ МАССИВА
    let oneClick = 0;
    winnerItems.number.forEach((aaa) => (oneClick = aaa));
    oneTwist(oneClick, winnerName);
  } else if (fff === 10) {
    let tenClick = winnerNumbers.reduce(
      (acc, number) => (number > acc ? number : acc),
      // Сначала принимаем за максимальное первый элемент массива
      x[1][0]
    );
    tenTwist(tenClick, winnerName);
  }
  console.log(winnerNumbers);
  console.log(winnerName);
}
function yourWinOneItem(winnerName) {
  modal.classList.toggle("modal__active");
  item1.innerHTML = winnerName;
  modalContent.classList.toggle("content__active_one");
  content1.style.right = "50%";
}
function yourWinTenItem(winnerName) {
  modal.classList.toggle("modal__active");
  let tenWinName = winnerName.split(",");
  items.forEach((elem, index) => {
    items[index].innerHTML = tenWinName[index];
  });
  let numArr = [82.8, 74.6, 66.4, 58.2, 50, 41.8, 33.6, 25.4, 17.2, 9];
  let copyNumArr = [...numArr];
  let constArr = [...contents];
  let timerId = setInterval(() => {
    let oneText = constArr.shift();
    oneText.classList.add("content__active");
    let numRight = copyNumArr.shift();
    oneText.style.right = numRight + "%";
    console.log(numRight);
  }, 300);
  setTimeout(() => {
    clearInterval(timerId);
    console.log(numArr);
  }, 3000);
}
modalBody.addEventListener("click", () => {
  contents.forEach((elem) => {
    elem.style.right = "6.5%";
    elem.classList.remove("content__active");
  });
  modal.classList.remove("modal__active");
  modalContent.classList.remove("content__active_one");
});
function closeVideoOneClick(winnerName, oneClick) {
  if (oneClick === 3) {
    onevideo.classList.toggle("active");
    setTimeout(yourWinOneItem, 150, winnerName);
  } else if (oneClick === 4) {
    twovideo.classList.toggle("active");
    setTimeout(yourWinOneItem, 150, winnerName);
  } else if (oneClick === 5) {
    fourvideo.classList.toggle("active");
    setTimeout(yourWinOneItem, 150, winnerName);
  }
}
function closeVideoTenClick(winnerName, tenClick) {
  if (tenClick === 4) {
    threevideo.classList.toggle("active");
    setTimeout(yourWinTenItem, 150, winnerName);
  } else if (tenClick === 5) {
    setTimeout(yourWinTenItem, 150, winnerName);
    fivevideo.classList.toggle("active");
  }
}
function oneTwist(oneClick, winnerName) {
  if (oneClick === 3) {
    onevideo.classList.toggle("active");
    playOneClick(oneClick);
    setTimeout(closeVideoOneClick, 6500, winnerName, oneClick);
  } else if (oneClick === 4) {
    twovideo.classList.toggle("active");
    playOneClick(oneClick);
    setTimeout(closeVideoOneClick, 6500, winnerName, oneClick);
  } else if (oneClick === 5) {
    fourvideo.classList.toggle("active");
    playOneClick(oneClick);
    setTimeout(closeVideoOneClick, 6500, winnerName, oneClick);
  }
  console.log(oneClick);
}
function tenTwist(tenClick, winnerName) {
  if (tenClick === 4) {
    threevideo.classList.toggle("active");
    playTenClick(tenClick);
    setTimeout(closeVideoTenClick, 6500, winnerName, tenClick);
  } else if (tenClick === 5) {
    fivevideo.classList.toggle("active");
    playTenClick(tenClick);
    setTimeout(closeVideoTenClick, 6500, winnerName, tenClick);
  }
  console.log(tenClick);
}
const video3_1 = document.querySelector(".video_3-1");
const video4_1 = document.querySelector(".video_4-1");
const video4_10 = document.querySelector(".video_4-10");
const video5_1 = document.querySelector(".video_5-1");
const video5_10 = document.querySelector(".video_5-10");
const audio = document.querySelector(".sys__audio");
function playOneClick(oneClick) {
  if (oneClick === 3) {
    video3_1.play();
  } else if (oneClick === 4) {
    video4_1.play();
  } else if (oneClick === 5) {
    video5_1.play();
  }
  audio.play();
}
function playTenClick(tenClick) {
  if (tenClick === 4) {
    video4_10.play();
  } else if (tenClick === 5) {
    video5_10.play();
  }
  audio.play();
}
