// !===========---Start---=============================================================================
$(document).ready(function () {

  AOS.init();
/**============================================================================================================
 *todo------Variables----------------=> 
 *===========================================================================================================*/

var links=document.querySelector(`.links`),
    burger=document.querySelector(`.burger`),
    header=document.querySelector(`header`),
    id_header=document.querySelector(`.header`),
    test=document.querySelector(`.test-item li`),
    list_item=document.querySelector(`.links  li`),
    services=document.querySelector(".services"),
    embed=document.querySelector(".video  embed"),
    main_shape=document.querySelector(".video .main-shape"),
    main_embed=document.querySelector(".video .main-embed");
/**============================================================================================================
 *todo------Main-Code----------------=====> 
 *===========================================================================================================*/
// ?===========---Burger---===========================-->

burger.addEventListener(`click`,()=>{
  links.classList.toggle(`move`);
})
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---Video---===========================-->


$(".video .project.one").click(function(){
  $(this).find(".shape").addClass("project_active");
  $(this).siblings().find(".shape").removeClass("project_active");
  embed.src = "https://www.youtube.com/embed/1urLN_06Mbc";
  main_shape.textContent="Project One";
  $(".video .main-embed").animate({
    opacity:"0.1",
    left:"-5%"
  },250)
  $(".video .main-embed").animate({
    opacity:"1",
    left:"0"
  },250)
})
$(".video .project.two").click(function(){
  $(this).find(".shape").addClass("project_active");
  $(this).siblings().find(".shape").removeClass("project_active");
  embed.src ="https://www.youtube.com/embed/-_X6PhkjpzU";
  main_shape.textContent="Project Two";
    $(".video .main-embed").animate({
      opacity:"0.1",
      left:"-5%"
    },250)
  $(".video .main-embed").animate({
      opacity:"1",
      left:"0"
    },250)
})
$(".video .project.three").click(function(){
  $(this).find(".shape").addClass("project_active");
  $(this).siblings().find(".shape").removeClass("project_active");
  embed.src ="https://www.youtube.com/embed/7mTNt3mzC6E";
  main_shape.textContent="Project Three";
    $(".video .main-embed").animate({
      opacity:"0.1",
      left:"-5%"
    },250)
  $(".video .main-embed").animate({
      opacity:"1",
      left:"0"
    },250)
})
$(".video .project.four").click(function(){
  $(this).find(".shape").addClass("project_active");
  $(this).siblings().find(".shape").removeClass("project_active");
  embed.src ="https://www.youtube.com/embed/UlG62IXqa5k";
  main_shape.textContent="Project Four";
    $(".video .main-embed").animate({
      opacity:"0.1",
      left:"-5%"
    },250)
  $(".video .main-embed").animate({
      opacity:"1",
      left:"0"
    },250)
})
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---Test---===========================-->

//   $(".test-item li").on(`click`,function(){
//     $(this).addClass(`test-item-style`);
//     $(this).siblings().removeClass(`test-item-style`);
// })
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---Links_Active---===========================-->


// $(".links li  a").click(function(){
//   $(this).addClass("active").parent().siblings().find("a").removeClass("active");
// })

//todo---> or

$(".links li  a").click(function () {
  $(".links li  a").removeClass("active");  //remove class first then add class to current link
  $(this).addClass("active");
});

$(".links li  a").click(function () {
  $("html,body").animate({

    scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
  },500);
});
////===========================================================================================================
$("section:not(#header)").click(function (){
$("#links").removeClass("move")
})
$("#links").click(function (){
  console.log("links")
})
////===========================================================================================================
////===========================================================================================================
// ?===========---Links_Active  on scroll---===========================-->


$(window).scroll(function(){
  $('.block').each(function(){
    if($(window).scrollTop() > $(this).offset().top){
      // console.log($(this).attr('id'));
      $(".links li  a").data("scroll");
      var RestID = $(this).attr('id');

      $(".links li  a").removeClass("active");
      $('.links li  a[data-scroll="' + RestID + '"]' ).addClass("active");
    }
  })
})
// console.log($(".links li  a").data("scroll"))
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---List_iTem---===========================-->

$(".links  li").each(function(){
  $(this).on(`click`,function(){
    $(".links").removeClass(`move`)
  })
})
$(".burger").on(`click`,function(){
  $(".links").add(`move`)
})
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---Header---===========================-->

window.addEventListener(`scroll`,()=>{
  if(window.scrollY > 0){
    id_header.classList.add(`header-style`)
  }
  else{
    
    id_header.classList.remove(`header-style`)
  }
})
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---Indicators---===========================-->

  $("#carousal_two  ")
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---Scroll-To-Top---===========================-->
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// ?===========---Carausal---===========================-->
$(document).ready(function () {
  // Activate Carousel
  $("#carouselExampleIndicators").carousel({ interval: 8000 });
  
})
////===========================================================================================================
////===========================================================================================================
////===========================================================================================================
// !===========---End---=======================================================================================
});
