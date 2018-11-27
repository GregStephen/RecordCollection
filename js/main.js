let searchBtn = $("#see-records");
let outputDiv = $("#output-records");
let search = $("#search");
let genreDiv = $("#genreOfMusicDiv");
let moreOptionsButton = $("#moreOptionsButton");

function alphabetize() {
   recordCollection.sort(function(a, b){
	  var aWithoutThe = a.artist.replace(/the /gi, '').toLowerCase()
    var bWithoutThe = b.artist.replace(/the /gi, '').toLowerCase()
	  if (aWithoutThe < bWithoutThe) //sort string ascending
 	  	return -1 
	  if (aWithoutThe > bWithoutThe)
	  	return 1
	  return 0 //default return value (no sorting)
  })
};



function populateRecords(recordCollectionArray) { 
  let radioBtn = $("input[name=searchChoice]:checked").attr('id');
  let searchVal = search.val().toLowerCase();
  ///// CLEARS THE DIV FOR THE NEW DISPLAY //////////////////
  outputDiv.html("");
  for(let i of recordCollectionArray) {
    //CHECKS IF ARTIST RADIO BUTTON IS CHECKED///////////////
    if (radioBtn === "artist") {
      console.log(">>>radiobtn var >>>>>", radioBtn)
       console.log("artist button works")
       ////CHECKS IF THE VALUE IN THE SEARCH BAR MATCHES ANY ARTISTS//////
      if (i.artist.toLowerCase().includes(searchVal)) { 
       console.log(">>>radiobtn var >>>>>", radioBtn)
        console.log("artist button works")
       //SPITS OUT THE CARD USING THE INFORMATION FROM THE ARRAY/////////////////  
        console.log((i.artist.toLowerCase().includes(searchVal)))
        outputDiv.append(`<div class="card album bg-dark text-white col" style="width:18rem;"><h5 class="card-header">${i.artist}</h5><a target = "_blank" href="${i.link}"><img class="card-img-top location-image" src="${i.cover}"alt="${i.title}"></a><div class="card-footer">"${i.title}" -${i.year}</div></div>`).children(':last').hide().fadeIn(1500);
        console.log(i.artist); 
        console.log(search.val());
            }
              ///CHECKS IF ALBUM RADIO IS CHECKED//////////////////
      } else if(radioBtn === "album") {
            ///THEN CHECKS IF VALUE IN SEARCH BAR MATCHES ANY ALBUM
           if (i.title.toLowerCase().includes(searchVal)) {
            // SPITS OUT A CARD USING THE INFORMATION FROM THE ARRAY
              outputDiv.append(`<div class="card album bg-dark text-white col" style="width: 18rem;"><h5 class="card-header">${i.artist}</h5><a target = "_blank" href="${i.link}"><img class="card-img-top location-image" src="${i.cover}"alt="${i.title}"></a><div class="card-footer">"${i.title}" -${i.year}</div></div>`).children(':last').hide().fadeIn(1500);
              console.log(i.title);
              console.log(search.val());
              console.log("album button works!")
            }
             //// IF NEITHER BUTTON OR THE BOTH IS CLICKED THEN IT WILL SHOW EVERYTHING 
          } else {
            console.log("both button works!")
               if (i.title.toLowerCase().includes(searchVal) || i.artist.toLowerCase().includes(searchVal)) {
                 outputDiv.append(`<div class="card album bg-dark text-white col" style="width: 18rem;"><h5 class="card-header">${i.artist}</h5><a target = "_blank" href="${i.link}"><img class="card-img-top location-image" src="${i.cover}"alt="${i.title}"></a><div class="card-footer">"${i.title}" -${i.year}</div></div>`).children(':last').hide().fadeIn(1500);
              }          
            }
        
   }   if(outputDiv.html() === "") {
     //////IF THERE IS NOTHING SHOWN IN THE DIV THEN IT MEANS THE SEARCH RESULTED IN NOTHING AND SHOWS THIS MESSAGE//////
        outputDiv.html("<h2>Sorry, there's nothing here for you at this time</h2>");
       }
     
};


genreDiv.hide();

moreOptionsButton.click(function(e){
  e.preventDefault();
  genreDiv.show();
  moreOptionsButton.hide();
});



searchBtn.click(function(e) {
  e.preventDefault();
  alphabetize();
  populateRecords(recordCollection);
});