let searchBtn = $("#see-records");
let outputDiv = $("#output-records");
let search = $("#search");
let genreDiv = $("#genreOfMusicDiv");
let moreOptionsButton = $("#moreOptionsButton");
let searchForm = $("#recordSearchForm");

function alphabetize() {
   recordCollection.sort(function(a, b){
	  var aWithoutThe = a.artist.replace(/the /gi, '').toLowerCase()
    var bWithoutThe = b.artist.replace(/the /gi, '').toLowerCase()
	  if (aWithoutThe < bWithoutThe) //sort string ascending
 	  	return -1 
	  if (aWithoutThe > bWithoutThe)
	  	return 1
	  return 0 //default return value (no sorting)
  });
};



// $(document).ready(function() {
//   $('.popover-dismiss').popover({
//     container:'body',
//     html: true,
//     placement: 'auto',
//     trigger: 'focus',
//     content: function(){
//       var url = $(this).data('full');
//       return '<img src="' + url + '">'
//     }
//   });
// });



function populateRecords(recordCollectionArray) { 
  let radioBtn = $("input[name=searchChoice]:checked").attr('id');
  let searchVal = search.val().toLowerCase();
  let genreChoices = $("input:checkbox:checked").map(function(){
    return $(this).attr('id');
  }).get();
  console.log(genreChoices)
  console.log(genreChoices == 0)
  ///// CLEARS THE DIV FOR THE NEW DISPLAY //////////////////
  outputDiv.html("");
 
  for(let i of recordCollectionArray) {
    
    function outputResults() {
      //YOU SHOULD CHANGE THE LINK TO COME FROM THE ALBUM TITLE AND A POPOVER TO SHOW THE TRACK LISTING WHEN YOU PRESS THE ALBUM/////
      outputDiv.append(`<div class="card album bg-dark text-white col" style="width:18rem;"><h5 class="card-header">${i.artist}</h5>
        <button id = "popoverBtn"><a tabindex="0" data-trigger="focus" title="Songs" data-toggle="popover" data-html="true" data-content= '<img src="${i.back}">'> <img class="card-img-top" src="${i.cover}" alt="${i.title}"></a></button>
        <div class="card-footer"><a target = "_blank" href="${i.link}">"${i.title}"</a> -${i.year}</div></div>`).children(':last').hide().fadeIn(1500);
    };

    function buttonCheck(){
      if (radioBtn === "artist") {
        console.log(">>>radiobtn var >>>>>", radioBtn)
        console.log("artist button works")
        ////CHECKS IF THE VALUE IN THE SEARCH BAR MATCHES ANY ARTISTS//////
        if (i.artist.toLowerCase().includes(searchVal)) { 
          console.log(">>>radiobtn var >>>>>", radioBtn)
          console.log("artist button works")
          //SPITS OUT THE CARD USING THE INFORMATION FROM THE ARRAY/////////////////  
          console.log((i.artist.toLowerCase().includes(searchVal)))
          outputResults();
          console.log(i.artist); 
          console.log(search.val());
        }
        ///CHECKS IF ALBUM RADIO IS CHECKED//////////////////
      } else if(radioBtn === "album") {
          ///THEN CHECKS IF VALUE IN SEARCH BAR MATCHES ANY ALBUM
        if (i.title.toLowerCase().includes(searchVal)) {
          // SPITS OUT A CARD USING THE INFORMATION FROM THE ARRAY
          outputResults();
          console.log(i.title);
          console.log(search.val());
          console.log("album button works!")
        }
          //// IF NEITHER BUTTON OR THE BOTH IS CLICKED THEN IT WILL SHOW EVERYTHING 
      } else {
          console.log("both button works!")
          if (i.title.toLowerCase().includes(searchVal) || i.artist.toLowerCase().includes(searchVal)) {
          outputResults();
        }          
      }
    }

    if (genreChoices == 0){
      buttonCheck();
    } else {
    $.each(genreChoices, function(index, value){
      console.log(index, value)
      console.log(value === i.genre.toLowerCase())
        if (value === i.genre.toLowerCase()) {
      //CHECKS IF ARTIST RADIO BUTTON IS CHECKED///////////////
          buttonCheck();
          //////IF THERE IS NOTHING SHOWN IN THE DIV THEN IT MEANS THE SEARCH RESULTED IN NOTHING AND SHOWS THIS MESSAGE//////
        } 
      }); 
    } 
  }
  if(outputDiv.html() === "") {
    outputDiv.html("<h2>Sorry, there's nothing here for you at this time</h2>");
  }
};
$(document).ready(function () {
  $('[data-toggle="popover"]').popover({
  container: outputDiv
  })
});

genreDiv.hide();

searchForm.on( "click", "#moreOptionsButton", function(event) {
  event.preventDefault();
  event.stopPropagation();
  genreDiv.show();
  $(this).hide();
});

// $("#popoverBtn").on('click',function(){
// $('a').popover("show");
// });

searchForm.on( "click", "#see-records", function(event) {
  event.preventDefault();
  event.stopPropagation();
  alphabetize();
  populateRecords(recordCollection)
  $('a').popover("show");
  $('a').popover("hide");

});


