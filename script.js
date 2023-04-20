
let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

// Parallax library
var rellax;

let jsonDatabase = [
  {
    "song" : "Last Night",
    "picUrl" : "https://charts-static.billboard.com/img/2016/08/morgan-wallen-nlu-344x344.jpg",
    "artist" : "Morgan Wallen",
    "rank" : "1"
  },
  {
    "song" : "Search & Rescue",
    "picUrl" : "https://charts-static.billboard.com/img/2023/04/drake-04g-searchrescue-od4-344x344.jpg",
    "artist" : "Drake",
    "rank" : "2"
  },
  {
    "song" : "Flowers",
    "picUrl" : "https://charts-static.billboard.com/img/2023/01/miley-cyrus-jca-flowers-rqa-344x344.jpg",
    "artist" : "Miley Cyrus",
    "rank" : "3"
  },
  {
    "song" : "Kill Bill",
    "picUrl" : "https://charts-static.billboard.com/img/2022/12/sza-mhq-killbill-6i8-344x344.jpg",
    "artist" : "SZA",
    "rank" : "4"
  },
  {
    "song" : "Creepin'",
    "picUrl" : "https://charts-static.billboard.com/img/2013/08/metro-boomin-nxb-344x344.jpg",
    "artist" : "Metro Boomin, The Weeknd & 21 Savage",
    "rank" : "5"
  },
  {
    "song" : "Calm Down",
    "picUrl" : "https://charts-static.billboard.com/img/2022/02/rema-000-calmdown-5vt-344x344.jpg",
    "artist" : "Rema & Selena Gomez",
    "rank" : "6"
  },
  {
    "song" : "Die For You",
    "picUrl" : "https://charts-static.billboard.com/img/2016/12/the-weeknd-xmx-dieforyou-ix0-344x344.jpg",
    "artist" : "The Weeknd & Ariana Grande",
    "rank" : "7"
  },
  {
    "song" : "Boy's A Liar, Pt. 2",
    "picUrl" : "https://charts-static.billboard.com/img/2022/12/pinkpantheress-dxq-boysaliarpt2-v8t-344x344.jpg",
    "artist" : "PinkPantheress & Ice Spice",
    "rank" : "8"
  },
  {
    "song" : "Anti-Hero",
    "picUrl" : "https://charts-static.billboard.com/img/2022/10/taylor-swift-824-antihero-fgo-344x344.jpg",
    "artist" : "Taylor Swift",
    "rank" : "9"
  },
  {
    "song" : "Ella Baila Sola",
    "picUrl" : "https://charts-static.billboard.com/img/2023/04/eslabon-armado-v4x-ellabailasola-2jo-344x344.jpg",
    "artist" : "Eslabon Armado X Peso Pluma",
    "rank" : "10"
  }
];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

const observer = lozad(); // Initialize Lozad
observer.observe();

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['artist'];
  newContentElement.classList.add('contentItem');
  newContentElement.classList.add('lozad');
  newContentElement.setAttribute('data-background-image', incomingJSON['picUrl']);

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['song'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add ARTIST to the item
  let newContentArtist = document.createElement("P");
  newContentArtist.classList.add('contentArtist');
  newContentArtist.innerText = "Artist: " + incomingJSON['artist'];
  newContentElement.appendChild(newContentArtist);

  /// Create & add RANK to the item
  let newContentRank = document.createElement("P");
  newContentRank.classList.add('contentRank');
  newContentRank.innerText = "Rank: " + incomingJSON['rank'];
  newContentElement.appendChild(newContentRank);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);
}