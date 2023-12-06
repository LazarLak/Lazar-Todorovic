document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}

$(".burger").on("click", function(){
  $(".navigation_bar").toggleClass("navigation");
  $(".line").first().toggleClass("line1");
  $(".line").eq(1).toggleClass("line2");
  $(".line").eq(2).toggleClass("line3");
  
})

    $(function(){
        //prepare Your data array with img urls
        var dataArray=new Array();
        dataArray[0]="images/Lazar1.png";
        dataArray[1]="images/Lazar.png";

        //start with id=0 after 5 seconds
        var thisId=0;

        window.setInterval(function(){
            $('.home_image').attr('src',dataArray[thisId]);
            thisId++; //increment data array id
            if (thisId==3) thisId=0; //repeat from start
        },1000);        
    });

    $(function () {
      $(".touch, .email").on('click', function (event) {
          event.preventDefault();
        var email = 'laztodorovic@gmail.com';
        var subject = 'Job Interview';
        var emailBody = '';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
      });
    });

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i<reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    } else{
      reveals[i].classList.remove('active');
    }
  }
}