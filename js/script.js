

//menu box toggle
$("#btn_menu").on("click", function () {
  $(".menu_box").stop().toggle(500);
});

$(".close_box").on("click", function () {
  $(".menu_box").css({ 'display': 'none' });
});

$(".h_menu").on("click", function () {
  $(".menu_box").stop().toggle(500);
});

$(".close_box").on("click", function () {
  $(".menu_box").css({ 'display': 'none' });
});



// #search 버튼 event action
// $('.search_icon').on("click", function () {
//   var target = $('.right_box :nth-child(2)');
//   var hasCls = target.hasClass("secon_li_padding");

//   $('#search_box').stop().toggle(200, function () {

//     if (hasCls) {
//       target.removeClass('secon_li_padding');
//     }
//     else {
//       target.addClass('secon_li_padding');
//     }
//   });

// });

//top부분 스와이프 슬라이드
var topSwiper = new Swiper(".top_ad", {
  direction: "vertical",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

//검색 박스 css 애니메이션
//position absolute로 안보이는 곳에 위치잡아놓고 translate로 밀어서 보이게 만들기 
// $(".search_icon").click(function () {
//   $('#search_box').css({'display':'block'});
// });

// new item부분 슬라이드 
var newSwiper = new Swiper(".items", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  on: {
    slideChange: function () {

      // item 슬라이드에 따라 인포값 변경
      const now_idx = this.realIndex;

      $(".item_info_box").children().css({ "display": "none" })
      $("#item_info_" + now_idx).css({ "display": "inline-block" });
    }
  },

});

//new slide 모바일
$(function () {

  // 아코디언 li 포지션 읽기
  const jbOffset1 = $('#board li:eq(0)').offset().top;
  const jbOffset2 = $('#board li:eq(1)').offset().top;
  const jbOffset3 = $('#board li:eq(2)').offset().top;
  const jbOffset4 = $('#board li:eq(3)').offset().top;
  const jbOffset5 = $('#board li:eq(4)').offset().top;
  const jbOffset6 = $('#board li:eq(5)').offset().top;

  const scroll_margin = 220;

  $(window).scroll(function () {
    if ($(document).scrollTop() > (jbOffset76 - scroll_margin)) {
      $("#board li:eq(5)").children("div").stop().slideDown(100);
      $("#board li:eq(5)").siblings().children("div").stop().slideUp(100);
    }
    else if ($(document).scrollTop() > (jbOffset5 - scroll_margin)) {
      $("#board li:eq(4)").children("div").stop().slideDown(100);
      $("#board li:eq(4)").siblings().children("div").stop().slideUp(100);
    }
    else if ($(document).scrollTop() > (jbOffset4 - scroll_margin)) {
      $("#board li:eq(3)").children("div").stop().slideDown(100);
      $("#board li:eq(3)").siblings().children("div").stop().slideUp(100);
    }
    else if ($(document).scrollTop() > (jbOffset3 - scroll_margin)) {
      $("#board li:eq(2)").children("div").stop().slideDown(100);
      $("#board li:eq(2)").siblings().children("div").stop().slideUp(100);
    }
    else if ($(document).scrollTop() > (jbOffset2 - scroll_margin)) {
      $("#board li:eq(1)").children("div").stop().slideDown(100);
      $("#board li:eq(1)").siblings().children("div").stop().slideUp(100);
    }
    else if ($(document).scrollTop() > (jbOffset1 - scroll_margin)) {
      $("#board li:eq(0)").children("div").stop().slideDown(100);
      $("#board li:eq(0)").siblings().children("div").stop().slideUp(100);
    }
  });
});

//#top3 부분 슬라이드

var categories = new Swiper(".categories", {
  spaceBetween: 30,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {

      const idx = this.realIndex;

      $("#h_group").children().css({ "display": "none" });
      $("#group_" + idx).css({ "display": "block" });

    }
  },
});


var top3Slide = new Swiper(".top3Items", {
  slidesPerView: 1,
  spaceBetween: 30,
  //media quary
  breakpoints: {
    1300: {
      slidesPerView: 3,
    },
    749: {
      slidesPerView: 2,
    }
  },
});

//plus icon active motion
var before_target = null;

function cursur_click(before_target) {

  $(".plus_cursor").on("click", function () {

    if ((before_target !== null) && (this !== before_target)) {
      return 0;
    }

    const top = $(this).position().top;
    const left = $(this).position().left;


    if ($(this).hasClass("icon_plus_active") === true) {
      $(this).removeClass("icon_plus_active");
      before_target = null;
    }
    else {
      $(this).addClass("icon_plus_active");
      before_target = this;
    }

    //해상도 x800 일때 info화면 전체보기
    if (matchMedia("screen and (max-width:1200px)").matches) {
      $(".thema_info_box").css({
        "left": "0px",
        "top": "0px"
      }).toggle(20);

    } else {
      $(".thema_info_box").css({
        "left": (left - 10),
        "top": (top - 10)
      }).toggle(20);

    }


    // 현재 +버튼의 인덱스 확인
    let idx = $(this).index() + 1;

    // 인덱스에 해당하는 아이템만 display 
    $(".thema_info_box").children().css({ "display": "none" });
    $("#t_info_" + idx).css({ "display": "inline-block" });

  });

}

cursur_click(before_target);


// timer

function timer_draw(h, m, s) {
  var time = "";

  if ((h + m + s) <= 0) {
    $("#finished").css({ "display": "block" });
    $("#timer").css({ "display": "none" });

  }
  if (h >= 10) {
    time = h.toString();
  }
  else {
    time = "0" + h.toString();
  }

  time += " : ";

  if (m >= 10) {
    time += m.toString();
  }
  else {
    time += "0" + m.toString();
  }

  time += " : ";

  if (s >= 10) {
    time += s.toString();
  }
  else {
    time += "0" + s.toString();
  }

  $("#timer").text(time);

}


function timer(s) {

  setInterval(() => {
    if (s <= 0) {
      timer_draw(0, 0, 0)
      return 0;
    }

    s--;
    var t = s;
    var hour, min, sec = 0;

    hour = Math.floor(s / 3600);
    t -= (hour * 3600);

    min = Math.floor(t / 60);
    t -= (min * 60);

    sec = t;

    timer_draw(hour, min, sec);

  }, 1000);

}

//timer(초)
timer(7820);


//time sale 이벤트
function circle_click() {

  $(".circle_hover").on("click", function () {

    // 현재 클릭한 인덱스 확인
    const id = $(this).attr("id");
    // s1인지 s2인지 포지션확인
    const cls = $(this).attr("class");

    //현재 sub_circle의 index값 확인
    let id_lang = id.length;
    let id_idx = Number(id.substring(id_lang - 1, id_lang));

    //다음 main_circle의 id값 만들기 
    let next_id = "main_item_" + Number(id_idx + 1);

    //loop
    var i = 0;

    // item이 총몇개인지 확인
    let main_length = $("#main_item_box").children.length;

    //현재 sub_circle 화면상 제거
    $(this).css({ "display": "none" }).removeClass(cls);

    //main에 활성화 되어있는 요소 확인 후 해당 sub_circle을 활성화
    while (main_length >= i) {

      //sub_circle의 id와 main_circle의 아이디의 인덱스 차이를 위해 i+1해줌
      if ($("#main_item_" + (1 + i)).css("display") != "none") {
        $("#circle_" + i).css({ "display": "block" }).addClass(cls);
      }
      i++;
    }

    //main circle 제거 및 다음 main_circle 활성화
    $("#main_item_box").children().css({ "display": "none" });
    $("#" + next_id).css({ "display": "block" });

  });

}

circle_click();

// ##store 부분

//링크로 이동 시
var url = $(location).attr('href');
var sub_url = Number(url.substring(url.length - 1, url.length));
var i = isNaN(sub_url) ? 0 : sub_url;

$(".tab li a").css({ "background-color": "#f3f2ed" });
$(".tab li").css({ "font-weight": 200, "background-color": "#f3f2ed" });
$("#tab_" + i).css({ "background-color": "#fbe2d2" });
$("#tab_" + i + " a").css({ "font-weight": 400, "background-color": "#fbe2d2" });

$("#menu_" + i + " a").css({ "color": "#000", "font-weight": 400 });
$("#item_page_" + i).css({ "display": "flex" });

$(".bn_txt h1").css({ "display": "none" });
$(".bn_txt h1").eq(i).css({ "display": "block" });

$("#header>img").children().css({ "display": "none" });
$("#header>img").eq(i).css({ "display": "block" });


$(".store_menu").click(function () {
  var id = $(this).attr("id");
  i = Number(id.substring(id.length - 1, id.length));


  //메뉴 글씨 크기
  $(".lnb li a").css({ "color": "#333", "font-weight": 200 });
  $("#menu_" + i + " a").css({ "color": "#000", "font-weight": 400 });

  $(".tab li").css({ "background-color": "#f3f2ed" });
  $(".tab li a").css({ "font-weight": 200, "background-color": "#f3f2ed" });
  $("#tab_" + i).css({ "background-color": "#fbe2d2" });
  $("#tab_" + i + " a").css({ "font-weight": 400, "background-color": "#fbe2d2" });

  $(".item_page").css({ "display": "none" });
  $("#item_page_" + i).css({ "display": "flex" });


  $(".bn_txt h1").css({ "display": "none" });
  $(".bn_txt h1").eq(i).css({ "display": "block" });
  $("#header>img").css({ "display": "none" });
  $("#header>img").eq(i).css({ "display": "block" });

  //메뉴닫기
  $(".menu_box").css({ 'display': 'none' });

  //주소변경
  $(location).attr("href", "#" + i);
});

//메뉴 클릭 시
$(".lnb li a").click(function () {

  var id = $(this).parent().attr("id");
  i = Number(id.substring(id.length - 1, id.length));


  //메뉴 글씨 크기
  $(".lnb li a").css({ "color": "#333", "font-weight": 200 });
  $("#menu_" + i + " a").css({ "color": "#000", "font-weight": 400 });

  $(".tab li").css({ "background-color": "#f3f2ed" });
  $(".tab li a").css({ "font-weight": 200, "background-color": "#f3f2ed" });
  $("#tab_" + i).css({ "background-color": "#fbe2d2" });
  $("#tab_" + i + " a").css({ "font-weight": 400, "background-color": "#fbe2d2" });

  $(".item_page").css({ "display": "none" });
  $("#item_page_" + i).css({ "display": "flex" });


  $(".bn_txt h1").css({ "display": "none" });
  $(".bn_txt h1").eq(i).css({ "display": "block" });
  $("#header>img").css({ "display": "none" });
  $("#header>img").eq(i).css({ "display": "block" });

});

//메뉴 클릭 시
$(".store_tab_box li a").click(function () {

  var id = $(this).parent().attr("id");
  i = Number(id.substring(id.length - 1, id.length));


  //메뉴 글씨 크기
  $(".lnb li a").css({ "color": "#333", "font-weight": 200 });
  $("#menu_" + i + " a").css({ "color": "#000", "font-weight": 400 });

  $(".tab li").css({ "background-color": "#f3f2ed" });
  $(".tab li a").css({ "font-weight": 200, "background-color": "#f3f2ed" });
  $("#tab_" + i).css({ "background-color": "#fbe2d2" });
  $("#tab_" + i + " a").css({ "font-weight": 400, "background-color": "#fbe2d2" });

  $(".item_page").css({ "display": "none" });
  $("#item_page_" + i).css({ "display": "flex" });


  $(".bn_txt h1").css({ "display": "none" });
  $(".bn_txt h1").eq(i).css({ "display": "block" });
  $("#header>img").css({ "display": "none" });
  $("#header>img").eq(i).css({ "display": "block" });

});

// 원데이클래스 예약

var form_check = true;

$('#rsvt_btn').click(function () {

  $(this).parent('form').find('input[type!="hidden"]').each(function () {
    if (!$(this).val() || !$("#message").val()) {
      form_check = false;
    }
  });

  if (!form_check) {
    alert("* 필수 항목을 채워주세요");
  }
  else {
    alert("예약되었습니다 :D");
  };

  form_check = true;
});


//loading page

$(document).ready(function () {

  $('#loading').css({ "display": "block" });
});

$(window).load(function () {
  $('#loading').css({ "display": "none" });
});
