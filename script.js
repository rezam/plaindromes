inputText = document.querySelector(".input");
runBtn = document.querySelector(".run");
resultLbl = document.querySelector(".result");

function plainRun() {
  let reverseNum = inputText.value.length - 1;
  let goodText = inputText.value.toLowerCase().replace(/ /g, "");
  let resultArr = "";

  for (index = 0; reverseNum >= index; reverseNum--) {
    resultArr += goodText.substr(reverseNum, 1);
  }

  if(resultArr === goodText) {
    resultLbl.innerHTML = "True";
  } else {
    resultLbl.innerHTML = "False";
  }
}

runBtn.addEventListener("click", plainRun);
