window.onload = function () {
};

/********************************************************
 *  SLIDE QUOTES
 *******************************************************/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(number) {
  showSlides(slideIndex += number);
}

function currentSlide(number) {
  showSlides(slideIndex = number);
}


function showSlides(numberSlide) 
{
  var i;
  var slides = document.getElementsByClassName("slide-quote");
  
    if (numberSlide > slides.length) 
      slideIndex = 1;
  
    if (numberSlide < 1) 
      slideIndex = slides.length;

    for (i = 0; i < slides.length; i++)   //SE DESHABILITAN TODOS
      slides[i].style.display = "none";  
  
  slides[slideIndex-1].style.display = "block";  //SE HABILITA LA QUE PASE POR PARAMETRO
}



/********************************************************
 *  SEARCH FUNCTIONS
 *******************************************************/

// Get the input field
var input       = "";
var inputMobile = "";

input = document.getElementById("searchInput");
inputMobile = document.getElementById("searchInputMobile");


input.addEventListener("keyup", function(event) 
{
    // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) 
  {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btnSearch").click();
  } 
});
  
inputMobile.addEventListener("keyup", function(event) 
{
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) 
  {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btnSearchMobile").click();
  } 
});



function search() 
{
    var text          = document.getElementById("searchInput").value;
    var searchResults = document.getElementById("body-search-results");
    var countResults  = 0;

    var indext        = -1;
    var indexst       = -1;
    var indexp        = -1;

    removeAllChildNodes(searchResults);

    var pattern  = text.toLowerCase();
    var targetId = "";
  
    if(text != '')
    {
      var divs = document.getElementsByClassName("col-md-8");

      for (var i = 0; i < divs.length; i++) 
      {
        var title    = divs[i].getElementsByClassName("card-title");
        var subtitle = divs[i].getElementsByClassName("text-muted");
        var para     = divs[i].getElementsByTagName("p");
        

            indext = title[0].innerText.toLowerCase().indexOf(pattern);
           
            if(indext == -1)
            {
              indexst = subtitle[0].innerText.toLowerCase().indexOf(pattern);
              
              if(indexst == -1)
              {
                indexp = para[1].innerText.toLowerCase().indexOf(pattern);

                 if(indexp != -1)
                {
                  appendResult(title, subtitle, para, countResults, searchResults);

                }
              }
              else
              {
                appendResult(title, subtitle, para, countResults, searchResults);
              }    
            }
            else
            {
              appendResult(title, subtitle, para, countResults, searchResults);
            }
          }      
        }          
 }



function searchMobile() 
{
    
    var text                = document.getElementById("searchInputMobile").value;
    var searchResultsMobile = document.getElementById("body-search-results-mobile");
    var countResults        = 0;


    var indext        = -1;
    var indexst       = -1;
    var indexp        = -1;

    removeAllChildNodes(searchResultsMobile);

    var pattern  = text.toLowerCase();
    var targetId = "";
  
    if(text != '')
    {
      var divs = document.getElementsByClassName("col-md-8");

      for (var i = 0; i < divs.length; i++) 
      {
        var title    = divs[i].getElementsByClassName("card-title");
        var subtitle = divs[i].getElementsByClassName("text-muted");
        var para     = divs[i].getElementsByTagName("p");
        

            indext = title[0].innerText.toLowerCase().indexOf(pattern);
           
            if(indext == -1)
            {
              indexst = subtitle[0].innerText.toLowerCase().indexOf(pattern);
              
              if(indexst == -1)
              {
                indexp = para[1].innerText.toLowerCase().indexOf(pattern);

                 if(indexp != -1)
                {
                  appendResult(title, subtitle, para, countResults, searchResultsMobile);

                }
              }
              else
              {
                appendResult(title, subtitle, para, countResults, searchResultsMobile);
              }    
            }
            else
            {
              appendResult(title, subtitle, para, countResults, searchResultsMobile);
            }
          }      
        }          
 }

function appendResult(title, subtitle, para, countResults, searchResults){

 var br = document.createElement('br');
                   countResults = countResults + 1;

                  var div = document.createElement('div');
                  div.id  = 'search-result'+countResults;
                  div.classList.add("searchResult");
                  searchResults.appendChild(div);
              

                  var el_title       = document.createElement('h4');
                  el_title.innerHTML = title[0].innerHTML;
                  div.appendChild(el_title);


                  var el_subtitle       = document.createElement('h5');
                  el_subtitle.innerHTML = subtitle[0].innerHTML;
                  div.appendChild(el_subtitle); 


                  var el_text        = document.createElement('h6'); 
                  el_text.innerHTML  = para[1].innerHTML;
                  div.appendChild(el_text);  
              
                  var div_line                  = document.createElement('div');
                  div_line.style.display        = "flex";
                  div_line.style.justifyContent = "center";
                  searchResults.appendChild(br);
                  searchResults.appendChild(div_line);
              

                  var horizontal_line = document.createElement('div'); 
                  horizontal_line.classList.add('hl-solid'); 
                  horizontal_line.style.width = "80%";
                  div_line.appendChild(horizontal_line);

                  searchResults.appendChild(br);
                  
                  searchResults.style.display = "block";
}

 function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


 /********************************************************
 *  PAGINATION
 *******************************************************/
var pageIndex = 1;
showPage(pageIndex);

 function plusPage(pageNumber)
{
  showPage(pageIndex += pageNumber);
}

function currentPage(pageNumber) {
  showSlides(pageIndex = pageNumber);
}


function showPage(pageNumber)
{
  var i;
  var pages = document.getElementsByClassName("main-articles");

    if (pageNumber > pages.length) 
      pageIndex = pages.length;
  
    if (pageNumber < 1) 
      pageIndex = 1;

    for (i = 0; i < pages.length; i++)   //SE DESHABILITAN TODOS
      pages[i].style.display = "none";  

  pages[pageIndex-1].style.display = "grid";  //SE HABILITA LA QUE PASE POR PARAMETRO
}


 /********************************************************
 *  ICON SEARCH MOBILE
 *******************************************************/

let rotateAngle = 0;


function rotate(image) {

  var searchResultsMobile = document.getElementById("body-search-results-mobile");
  var searchIcon; 
  if(rotateAngle == 0 || rotateAngle == 360)
  {
    searchIcon = document.getElementById("searchIcon-slide");
    rotateAngle = 45;
    setPositionSearchBox("0");
  }
  else
  {
    searchIcon  = document.getElementById("searchIcon-main");
    rotateAngle = 360;
    setPositionSearchBox("-100%");
    removeAllChildNodes(searchResultsMobile);
  }

  console.log("rotateAngle: "+rotateAngle);

    searchIcon.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");  
}


function setPositionSearchBox(position)
{
  var searchBox  = document.getElementById("searchBoxMobile");
  searchBox.style.right = position;

} 