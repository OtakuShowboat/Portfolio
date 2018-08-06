
// Start of navigation url # removal script

// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

window.addEventListener("DOMContentLoaded", function(e) {
  var links = document.getElementsByTagName("A");
  for(var i=0; i < links.length; i++) {
    if(!links[i].hash) continue;
    if(links[i].origin + links[i].pathname != self.location.href) continue;
    (function(anchorPoint) {
      links[i].addEventListener("click", function(e) {
        anchorPoint.scrollIntoView({ 
        	behavior: "smooth", // Customized edits to add smooth scroll transition - JH
        	block: "start"
        });
        e.preventDefault();
      }, false);
    })(document.getElementById(links[i].hash.replace(/#/, "")));
  }
}, false);

// End of navigation url # removal script


//Not the most elegant of code, but it gets the job done. The below is what highlights the navbar text for the current page.

function highlightNav() {

//Highlights home page
var homeLink = document.getElementById("home");
if(window.location.pathname == "/OtakuBlog/" || window.location.pathname == "/") 
  {
    homeLink.className += " active";
  };


//Top navigation highlighting for side navigation pages
var backgroundLink = document.getElementById("bgd");
var servicesLink = document.getElementById("srv");
var portfolioLink = document.getElementById("pf");
var urlArray = window.location.pathname.split("/")

for (var i = 0, l = urlArray.length; i < l; i++) {
if( urlArray[i] == "Background" ){
  backgroundLink.className += " active ";
}
if( urlArray[i] == "Website_Services" ) {
  servicesLink.className += " active ";
}
if( urlArray[i] == "Portfolio" ) {
  portfolioLink.className += " active ";
}

 function runApplication() {
  //console.log(window.location.pathname);
  setActiveLink(window.location.pathname + window.location.hash);
 }
};

};