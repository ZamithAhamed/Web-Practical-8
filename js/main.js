let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myCarousel");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  function zoomin(){
    var myImg = document.getElementById("sea");
    var currWidth = myImg.clientWidth;
    if(currWidth == 500){
        
      
    } else{
        myImg.style.width = (currWidth + 50) + "px";
    }
}
function zoomout(){
    var myImg = document.getElementById("sea");
    var currWidth = myImg.clientWidth;
    if(currWidth == 200){
        
    } else{
        myImg.style.width = (currWidth - 50) + "px";
    }
}


function shiftimg(){
    var logo = document.getElementById("logo");
    logo.outerHTML = "<img src='Asset/packyourbags.jpg' id='logo' align='right'> "; 

  
}
function validate(){
  var x=document.getElementById("email").value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  
  var uname=document.getElementById("name").value;
  var num=document.getElementById("pnum").value;

  if(uname==null || uname==""){
    alert("Name must be entered");
  }
  else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address"); 
  }
  else if(num.length<10){
    alert("Invalid phone number..please re enter");
  }
   else{
    alert("Your registration is successfull");
   }
}

function clear(){
  document.getElementById("Contact").reset();
}
