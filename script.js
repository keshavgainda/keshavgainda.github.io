$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
           $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    //toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

//     var Webflow = Webflow || [];
//   Webflow.push(function() {
//     $.get('https://cdn.rawgit.com/alvarotrigo/fullPage.js/master/examples/simple.html', function(data) {
//       $('#ajaxContent').append(data);
//     });
//   });

    // //typed animation script
    // var typed = new Typed(".typing", {
    //     strings: ["Student", "Learner", "Programmer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // var typed = new Typed(".typing-2", {
    //     strings: ["Student", "Learner", "Programmer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
  

});