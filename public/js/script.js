"use strict";
(function(){

console.log("js ready")

const views = $("#views").children()
const nameTag = $("#name-tag")
const devPortfolio = $("#dev-portfolio")
const projectDesc = $(".project-desc")
const writingPortfolio = $("#writing-portfolio")
const aboutMe = $("#about-me")
const contactMe = $("#contact-me")

views.hide()
devPortfolio.hide()
projectDesc.hide()
writingPortfolio.hide()
aboutMe.hide()
contactMe.hide()

nameTag.on("click", function(){
  nameTag.hide();
  views.show();
})


$("#dev-portfolio-link").on("click", function(){
  views.hide()
  devPortfolio.show()
  $("body").css('background', "#E4939E")
})

$("#line-runner-master").on("click", function(){
  $("#line-runner-desc").toggle();
})

$("#trip-ed-master").on("click", function(){
  $("#triped-desc").toggle();
})

$("#pet-tinder-master").on("click", function(){
  $("#petinder-desc").toggle();
})

$("#u-vote-master").on("click", function(){
  $("#u-vote-desc").toggle();
})


$("#recent-projects").on("click", function(){
  devPortfolio.hide()
  views.show()
  $("body").css('background', "#349884")
})

$("#writing-portfolio-link").on("click", function(){
  views.hide()
  writingPortfolio.show()
  $("body").css('background', "#ffde8d")
})

$("#selected-works").on("click", function(){
  writingPortfolio.hide()
  views.show()
  $("body").css('background', "#349884")
})

$("#outreach-master").on("click", function(){
  $("#outreach-desc").toggle()
  $("#episodes-list").hide()
})

$("#nick-master").on("click", function(){
  $("#nick-desc").toggle()
  $("#shorts-list").hide()
})


$("#shorts-trigger").on("click", function(){
  $("#shorts-list").toggle()
})

$("#episodes-trigger").on("click", function(){
  $("#episodes-list").toggle()
})

$("#about-me-link").on("click", function(){
  views.hide()
  aboutMe.show()
  $("body").css('background', "#5771B2")
})

$("#dev-shortcut").on("click", function(){
  aboutMe.hide()
  devPortfolio.show()
  $("body").css('background', "#E4939E")
})

$("#writing-shortcut").on("click", function(){
  aboutMe.hide()
  writingPortfolio.show()
  $("body").css('background', "#ffde8d")
})

$("#resume-link").on("click", function(){
  var url ="../img/resume.pdf"
  var win = window.open(url, '_blank');
  win.focus();
})

$("#about-me-h2").on("click", function(){
  aboutMe.hide()
  views.show()
  $("body").css('background', "#349884")
})

$("#contact-link").on("click", function(){
  views.hide()
  contactMe.show()
  $("body").css('background', "black")
})

$("#contact-me-h2").on("click", function(){
  contactMe.hide()
  views.show()
  $("body").css('background', "#349884")
})

})();
