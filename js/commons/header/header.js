//gnb에서 마우스 나가면 서브메뉴 활성화
$(".gnb").on("mouseleave", subMenuHide);
function subMenuHide() {
  $(".subMenu").stop().slideUp();
  $(".subMenuBox").stop().slideUp();
}

var subUl = $(".subMenu>ul");
//1.subMenu(1) hover 시 밑줄
subUl.eq(0).hover(
  function () {
    $(".gnb>ul>li").eq(0).css({ "border-bottom": "3px solid #0190d8" });
  },
  function () {
    $(".gnb>ul>li").eq(0).css({ "border-bottom": "0px solid #0190d8" });
  }
);
//2.subMenu(2) hover 시 밑줄
subUl.eq(1).hover(
  function () {
    $(".gnb>ul>li").eq(1).css({ "border-bottom": "3px solid #0190d8" });
  },
  function () {
    $(".gnb>ul>li").eq(1).css({ "border-bottom": "0px solid #0190d8" });
  }
);
//3.subMenu(3) hover 시 밑줄
subUl.eq(2).hover(
  function () {
    $(".gnb>ul>li").eq(2).css({ "border-bottom": "3px solid #0190d8" });
  },
  function () {
    $(".gnb>ul>li").eq(2).css({ "border-bottom": "0px solid #0190d8" });
  }
);
//4.subMenu(4) hover 시 밑줄
subUl.eq(3).hover(
  function () {
    $(".gnb>ul>li").eq(3).css({ "border-bottom": "3px solid #0190d8" });
  },
  function () {
    $(".gnb>ul>li").eq(3).css({ "border-bottom": "0px solid #0190d8" });
  }
);
//1.subMenu(5) hover 시 밑줄
subUl.eq(4).hover(
  function () {
    $(".gnb>ul>li").eq(4).css({ "border-bottom": "3px solid #0190d8" });
  },
  function () {
    $(".gnb>ul>li").eq(4).css({ "border-bottom": "0px solid #0190d8" });
  }
);

//언어선택 버튼 클릭 시
$(".lang-btn").on("click", langMenuShow);
function langMenuShow() {
  $(".langMenu").slideToggle();
}

//언어선택 메뉴(KR) 클릭 시
var langMenuLi = $(".langMenu>ul>li");
langMenuLi.eq(0).on("click", langChangeKR);
function langChangeKR() {
  $(".lang-txt").text("KR");
  $(".langMenu").slideUp();
}

//언어선택 메뉴(CN) 클릭 시
var langMenuLi = $(".langMenu>ul>li");
langMenuLi.eq(2).on("click", langChangeCN);
function langChangeCN() {
  $(".lang-txt").text("CN");
  $(".langMenu").slideUp();
}
//언어선택 메뉴(EN) 클릭 시
var langMenuLi = $(".langMenu>ul>li");
langMenuLi.eq(1).on("click", langChangeEN);
function langChangeEN() {
  $(".lang-txt").text("EN");
  $(".langMenu").slideUp();
}

//gnb a태그 마우스 들어오면 서브메뉴 활성화
var gnbLi = $(".gnb>ul>li>a");
gnbLi.on("mouseenter", subMenuShow);

function subMenuShow() {
  $(".subMenu").slideDown();
  $(".subMenuBox").slideDown();
}
