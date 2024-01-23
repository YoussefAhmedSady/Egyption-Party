$('.open').click(function (e) { 
    $('nav').animate({width:'250px'},50)
    $('.item1').animate({marginLeft: '250px'},50)
});
$('.close').click(function (e) { 
    $('nav ').animate({width:'0px'},50)
    $('.item1').animate({marginLeft: '0px'},50)
});
$("nav a").click(function(e){
    
    let sectionId= $(e.target).attr("href");
    let positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})
$('#toggle').click(function(e){
    $('h3').not(e.target).next().slideUp(100);
    $(e.target).next().slideToggle(100)
});window.onload = function() {
   
    countDownToTime("10 october 2024 9:56:00");
  }
  function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);
futureDate = (futureDate.getTime()/1000);

let now = new Date();
now = (now.getTime()/1000);

timeDifference = (futureDate- now);
    
let days = Math.floor( timeDifference / (24*60*60));
let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$("#days").html(`${days} D`);
$("#hours").html(`${hours} h`);
$("#minutes").html(`${ mins } m`);
$('#seconds').html(`${ secs} s`)


setInterval(function() {  countDownToTime(countTo); }, 1000);
}

$('#massage').keypress(function (e) {
    let accutal=$(this).val().length;
    let amountLeft=100-accutal
    if(amountLeft<=0){
        $('#remain').html('your have no available carachtars')
    }else{
        $('#remain').html(amountLeft)
    }
})
