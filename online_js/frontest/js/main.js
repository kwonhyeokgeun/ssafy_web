window.onload = function () {
  
};

let question = localStorage.getItem("question");
let contentLeftPollDiv = document.querySelector();
let contentLeftPollBtnDiv =  document.querySelector();
if(question){
    let answers=localStorage.getItem("answers");
    let answerArr = JSON.parse(answers);
    let poll=`
    <div class="poll-title">[당신의 선택]</div>
    <div class="poll-question">SSAFY에서의 지역?</div>
    <div class="poll-answer">
    <ul>
    `;
    answerArr.array.forEach(function (answer) {
        poll+=`<li><input type="radio" name="poll-answer" id="" /> ${answer}</li>`
    });
      poll+=`
      </ul>
    </div>
    <div class="poll-btn">
      <button id="btn-poll" class="button btn-primary">투표하기</button>
      <button class="button">이전결과보기</button>
    </div>
    <div class="poll-date">투표기간 : 2022.09.01 ~ 2022.09.30</div>
    `;
    contentLeftPollDiv.innerHTML=poll;
    contentLeftPollDiv.style.display="";  //보이게
    contentLeftPollBtnDiv.style.display="none"; //안보이게
}else{
    contentLeftPollDiv.style.display="none";  //안보이게
    contentLeftPollBtnDiv.style.display="";  //보이게
}

document.querySelector("#btn-makepoll").addEventListener()
window.open("./makepoll.html", "mkpoll", "width=40px; height=40px;")