var recordCollection = [ 
  { 
    "artist" : "The Beatles",
    "title" : "The Beatles",
    "year" : "1968",
    "genre" : "Rock",
    "cover" : "https://images-na.ssl-images-amazon.com/images/I/316GrhxGleL._SY355_.jpg"
  }, {
    "artist" : "Led Zepplin",
    "title" : "II",
    "year" : "1969",
    "genre" : "Rock",
    "cover" : "https://www.rockarchive.com/media/2451/morgan-howell-unframed-led-zeppelin-led-zep-ii.jpg?crop=0.064888037478084692,0.054137015153136778,0.076156299904429348,0.30462281691262111&cropmode=percentage&width=800&height=800&rnd=131503767740000000&overlay=watermark.png&overlay.size=230,20&overlay.position=0,780"
  }, {
    "artist" : "1969 Bad Ass Band",
    "title" : "1969 Bad Ass Band",
    "year" : "1978",
    "genre" : "Funk / Soul",
    "style" : ["Soul", "Funk"],
    "cover" : "https://img.discogs.com/7rJSPeaMugb0-Z0mAZmxoK3fEqc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4115777-1355761197-7970.jpeg.jpg"
  }, {
    "artist" : "Various",
    "title" : "24 Original Happening Hits",
    "year" : "1967",
    "genre" : "Rock",
    "style" : ["Folk Rock", "Rock & Roll"],
    "cover" : "https://img.discogs.com/Ft5MMFf9hk_YLkmBE43PivKG0DM=/fit-in/597x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1851100-1393703507-1710.jpeg.jpg"
  }, {
    "artist" : "The 5th Dimension",
    "title" : "Greatest Hits",
    "year" : "1970",
    "genre" : "Funk/Soul",
    "style" : ["Funk", "Soul"],
    "cover" : "https://img.discogs.com/4XvMZIMRIyZ_7IPFZr678fT5qiw=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1063235-1388670809-7519.jpeg.jpg"
  }, {
    "artist" : "AC/DC",
    "title" : "Dirty Deeds Done Dirt Cheap",
    "year" : "1981",
    "genre" : "Rock",
    "style" : "Hard Rock",
    "cover" : "https://img.discogs.com/yngB-2HHmxG_1Jubyn97eFYyj8o=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-773300-1272852415.jpeg.jpg"
  }, {
    "artist" : "AC/DC",
    "title" : "Highway To Hell",
    "year" : "1979",
    "genre" : "Rock",
    "style" : "Hard Rock",
    "cover" : "https://img.discogs.com/0oaLwewmJP4jn_B3LOzxcr1-gd0=/fit-in/588x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6270536-1415254406-8790.jpeg.jpg"
  }, {
    "artist" : "AC/DC",
    "title" : "Back In Black",
    "year" : "1980",
    "genre" : "Rock",
    "style" : "Hard Rock",
    "cover" : "https://img.discogs.com/hjVtzok-FcDgxnJQw4q2RwqWxUM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-400591-1537035829-1391.jpeg.jpg"
  }, {
    "artist" : "Alice Cooper",
    "title" : "School's Out",
    "year" : "1972",
    "genre" : "Rock",
    "style" : "Hard Rock",
    "cover" : "https://img.discogs.com/4SdEhKkV7_kVOA7Ac4ISkw7VmX0=/fit-in/500x483/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-638121-1296587170.jpeg.jpg"
  }, {
    "artist" : "Arlo Guthrie",
    "title" : "Alice's Restaurant",
    "year" : "1969",
    "genre" : "Rock",
    "style" : "Folk Rock",
    "cover" : "https://img.discogs.com/h9hUkzafMhtGkTtuXYM2YV25wxY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1302018-1316629824.jpeg.jpg"
  }, {
    "artist" : "The Allman Brothers Band",
    "title" : "The Allman Brothers Band At Fillmore East",
    "year" : "1971",
    "genre" : "Rock",
    "style" : "Blues Rock",
    "cover" : "https://img.discogs.com/19VJXnD_qngHt_gMDr_9UbeX_Lw=/fit-in/596x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2379908-1280619864.jpeg.jpg"
  }, {
    "artist" : "The Allman Brothers Band",
    "title" : "Brothers and Sisters",
    "year" : "1973",
    "genre" : "Rock",
    "style" : ["Blues Rock", "Country Rock"],
    "cover" : "https://img.discogs.com/ohGkNu6Ccq8PDgdhmKnSL8c3fv0=/fit-in/600x630/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4018606-1497181745-4056.jpeg.jpg"
  }, {
    "artist" : "The B-52's",
    "title" : "Mesopotamia",
    "year" : "1981",
    "genre" : "Rock",
    "style" : ["New Wave", "Synth-pop"],
    "cover" : "https://img.discogs.com/7X3q5_AquL41mMMZCW-osyGQdd0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-76787-1331837773.jpeg.jpg"
  }, {
    "artist" : "The B-52's",
    "title" : "Wild Planet",
    "year" : "1980",
    "genre" : "Rock",
    "style" : ["New Wave"],
    "cover" : "https://img.discogs.com/zzN4vh9gpADv7s0lYmU_JON_Df4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-528139-1194068906.jpeg.jpg"
  }, {
    "artist" : "The B-52's",
    "title" : "The B-52's",
    "year" : "1979",
    "genre" : "Rock",
    "style" : ["New Wave"],
    "cover" : "https://img.discogs.com/V1su9TGAjLNbfkuR7DLDGpeoFbo=/fit-in/567x567/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-508401-1308215276.jpeg.jpg"
  }, {
    "artist" : "Bad Company",
    "title" : "Run With The Pack",
    "year" : "1976",
    "genre" : "Rock",
    "style" : ["Hard Rock"],
    "cover" : "https://images-na.ssl-images-amazon.com/images/I/51Vf5PFyCvL.jpg"
  }, {
    "artist" : "Batterymen",
    "title" : "The Semi-Pro Baseball EP, Vol. One",
    "year" : "2015",
    "genre" : "Rock",
    "style" : ["Rock"],
    "cover" : "https://f4.bcbits.com/img/0006890607_10.jpg"
  }, {
    "artist" : "The Beach Boys",
    "title" : "High Water",
    "year" : "1973",
    "genre" : "Rock",
    "style" : ["Surf", "Rock & Roll", "Psychedelic Rock"],
    "cover" : "https://images-na.ssl-images-amazon.com/images/I/61%2Bq9OkedML._SY355_.jpg"
  }, 
  // {
  //   "artist" : "",
  //   "title" : "",
  //   "year" : "",
  //   "genre" : "",
  //   "style" : [""],
  //   "cover" : ""
  // },

];