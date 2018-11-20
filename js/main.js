let recordCollection = [ 
  { 
    "artist" : "the Beatles",
    "title" : "The Beatles",
    "year" : "1968",
    "cover" : "https://images-na.ssl-images-amazon.com/images/I/316GrhxGleL._SY355_.jpg"
  }, {
    "artist" : "Led Zepplin",
    "title" : "II",
    "year" : "1969",
    "cover" : "https://www.rockarchive.com/media/2451/morgan-howell-unframed-led-zeppelin-led-zep-ii.jpg?crop=0.064888037478084692,0.054137015153136778,0.076156299904429348,0.30462281691262111&cropmode=percentage&width=800&height=800&rnd=131503767740000000&overlay=watermark.png&overlay.size=230,20&overlay.position=0,780"
  }, 
  // {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "cover" : ""
  // }, 

];

let btn = $("#see-records");
let outputDiv = $("#output-records");
let search = $("#search");



// function alphabetize() {
//    recordCollection.sort(function(a, b){
// 	  var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
// 	  if (nameA < nameB) //sort string ascending
//  	  	return -1 
// 	  if (nameA > nameB)
// 	  	return 1
// 	  return 0 //default return value (no sorting)
//   })
// };

// function visitedOverWantToGo() {
//   recordCollection.sort(function(a, b) {
// 	return a.visited - b.visited
//   })
// };

function populateRecords(recordCollectionArray) { 
  let radioBtn = $("input[name=searchChoice]:checked").attr('id');
  let searchVal = search.val().toLowerCase();
  ///// CLEARS THE DIV FOR THE NEW DISPLAY //////////////////
  outputDiv.html("");
  for(let i of recordCollectionArray) {
    ////CHECKS TO SEE IF THE VALUE IN THE SEARCH BAR MATCHES ANYTHING IN THE ARRAYS NAMES//////
    if (radioBtn === "artist") {
      console.log(">>>radiobtn var >>>>>", radioBtn)
       console.log("artist button works")
      if (i.artist.toLowerCase().includes(searchVal)) { 
    //CHECKS IF RADIO BUTTON THAT I HAVE BEEN THERE IS CHECKED///////////////
      console.log(">>>radiobtn var >>>>>", radioBtn)
       console.log("artist button works")
      //CHECKS THE ARRAY TO SEE IF I ACTUALLY HAVE BEEN THERE //////////////
       
        //SPITS OUT THE CARD USING THE INFORMATION FROM THE ARRAY/////////////////  
              console.log((i.artist.toLowerCase().includes(searchVal)))
              outputDiv.append(`<div class="card album bg-dark text-white col" style="width:18rem;"><h5 class="card-header">${i.artist}</h5><img class="card-img-top location-image" src="${i.cover}"alt="${i.title}"><div class="card-footer">"${i.title}" -${i.year}</div></div>`).children(':last').hide().fadeIn(1500);
              console.log(i.artist);
              console.log(search.val());
            }
              ///CHECKS TO SEE IF THE RADIO BUTTON FOR WANT TO GO IS CHECKED
      } else if(radioBtn === "album") {
            ///THEN CHECKS THRU THE ARRAY TO SEE IF I HAVE IN FACT NOT BEEN THERE
           if (i.title.toLowerCase().includes(searchVal)) {
            // SPITS OUT A CARD USING THE INFORMATION FROM THE ARRAY
              outputDiv.append(`<div class="card album bg-dark text-white col" style="width: 18rem;"><h5 class="card-header">${i.artist}</h5><img class="card-img-top location-image" src="${i.cover}"alt="${i.title}"><div class="card-footer">"${i.title}" -${i.year}</div></div>`).children(':last').hide().fadeIn(1500);
              console.log(i.title);
              console.log(search.val());
              console.log("album button works!")
            }
             //// IF NEITHER BUTTON IS CLICKED THEN IT WILL SHOW EVERYTHING 
          } else {
            console.log("both button works!")
               if (i.title.toLowerCase().includes(searchVal) || i.artist.toLowerCase().includes(searchVal)) {
                 outputDiv.append(`<div class="card album bg-dark text-white col" style="width: 18rem;"><h5 class="card-header">${i.artist}</h5><img class="card-img-top location-image" src="${i.cover}"alt="${i.title}"><div class="card-footer">"${i.title}" -${i.year}</div></div>`).children(':last').hide().fadeIn(1500);
              }          
            }
        
   }   if(outputDiv.html() === "") {
     //////IF THERE IS NOTHING SHOWN IN THE DIV THEN IT MEANS THE SEARCH RESULTED IN NOTHING AND SHOWS THIS MESSAGE//////
        outputDiv.html("<h2>Sorry, there's nothing here for you at this time</h2>");
       }
     
};



$(recordSearchForm).submit(function(e) {
  e.preventDefault();
  // alphabetize();
  // visitedOverWantToGo();
  populateRecords(recordCollection);
});