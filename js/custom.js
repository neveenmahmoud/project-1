/* global, aleart, console*/
$(function(){
    'use strict';
    $('.header').height($(window).height());
    $(window).resize(function (){
    $('.header').height($(window).height());    
        
        
    });
    
});
//start header section
var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//start feedback section

//var swiper = new Swiper('.swiper-container', {
//      slidesPerView: 3,
//      spaceBetween: 30,
//      pagination: {
//        el: '.swiper-pagination',
//        clickable: true,
//      },
//    });
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });