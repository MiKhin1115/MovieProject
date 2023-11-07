const movies = [
  {
    id: 1,
    img: "box%20office/oppenheimer2.jpg", // Added 'img' property
    name: "Oppenheimer",
    
    url: "Home/bothisweek/oppenheimer.html", // Added 'url' property
  },
  {
    id: 2,
    img: "box%20office/barbie2.jpg", // Added 'img' property
    name: "Barbie",
    
    url: "Home/bothisweek/barbie.html", // Added 'url' property
  },
  { 
    id: 3,
    img: "box%20office/elemental2.jpg", // Added 'img' property
    name: "Elemental",
  
    url: "Home/bothisweek/elemental.html", // Added 'url' property
  },
  {
    id: 4,
    img: "box%20office/haunted_mansion.jpg", // Added 'img' property
    name: "Haunted Mansion",
    
    url: "Home/bothisweek/hauntedmansion.html", // Added 'url' property
  },
  {
    id: 5,
    img: "box%20office/indianajones.jpg", // Added 'img' property
    name: "Indiana Jones",
    
    url: "Home/bothisweek/indianaJones.html", // Added 'url' property
  },
  {
    id: 6,
    img: "box%20office/missionimpossible.jpg", // Added 'img' property
    name: "Mission Impossible",
 
    url: "Home/bothisweek/missionImpossible.html", // Added 'url' property
  },
  {
    id: 7,
    img: "box%20office/reddoor.jpg", // Added 'img' property
    name: "Red Door",
 
    url: "Home/bothisweek/insidious.html", // Added 'url' property
  },
  {
    id: 8,
    img: "box%20office/soundoffreedom.jpg", // Added 'img' property
    name: "Sound of Freedom",
 
    url: "Home/bothisweek/soundOfFreedom.html", // Added 'url' property
  },
  {
    id: 9,
    img: "box%20office/spiderverse.jpg", // Added 'img' property
    name: "Spider Verse",

    url: "Home/bothisweek/spiderverse.html", // Added 'url' property
  },
  {
    id: 10,
    img: "box%20office/talk_to_me.jpg", // Added 'img' property
    name: "Talk To Me",

    url: "Home/bothisweek/talktome.html", // Added 'url' property
  },
  {
    id: 11,
    img: "images/007.jpg", // Added 'img' property
    name: "Sky Fall",

    url: "Movies/Action/Skyfall.html", // Added 'url' property
  },
  {
    id: 12,
    img: "images/13assasins.jpg", // Added 'img' property
    name: "13 Assasins",

    url: "Movies/History/13Assassins.html", // Added 'url' property
  },
  {
      id: 13,
      img: "images/20thcenturygirl.jpg", // Added 'img' property
      name: "20th Century Girl",
  
      url: "Movies/Drama/20th Century Girl.html", // Added 'url' property
    },
    {
      id: 14,
      img: "images/2521.jpg", // Added 'img' property
      name: "Twenty-Five Twenty-One",
  
      url: "", // Added 'url' property
    },
    {
      id: 15,
      img: "images/ageofshadow.jpg", // Added 'img' property
      name: "Age Of Shadow",

      url: "", // Added 'url' property
    },
    {
      id: 16,
      img: "images/alchemy.jpg", // Added 'img' property
      name: "Alchemy of Souls",
 
      url: "Series/Fantasy/Alchemy of Souls.html", // Added 'url' property
    },
    {
      id: 17,
      img: "images/aliceinborderland.jpg", // Added 'img' property
      name: "Alice In Borderland",
   
      url: "Series/Thriller/AliceInBorderland.html", // Added 'url' property
    },
    {
      id: 18,
      img: "images/allofusaredead.jpg", // Added 'img' property
      name: "All Of Us Are Dead",
  
      url: "Series/Horror/All of us are dead.html", // Added 'url' property
    },
    {
      id: 19,
      img: "images/13assasins.jpg", // Added 'img' property
      name: "American Horror Stories",
   
      url: "Series/Horror/American Horror Stories.html", // Added 'url' property
    },
    {
      id: 20,
      img: "images/americanpsycho.jpg", // Added 'img' property
      name: "American Psycho",
   
      url: "", // Added 'url' property
    },
    {
      id: 21,
      img: "images/annabelle.jpg", // Added 'img' property
      name: "Annabelle",

      url: "", // Added 'url' property
    },
    {
      id: 22,
      img: "images/anne.jpg", // Added 'img' property
      name: "Anne",

      url: "", // Added 'url' property
    },
    {
      id: 23,
      img: "images/arcane.jpg", // Added 'img' property
      name: "Arcane",
  
      url: "Series/Animation/arcane.html", // Added 'url' property
    },
    {
      id: 24,
      img: "images/arthdalchro.jpg", // Added 'img' property
      name: "Arthdal Chronicles",
      
      url: "Series/Drama/ArthdalChronicles.html", // Added 'url' property
    },
    {
      id: 25,
      img: "images/attorneywoo.jpg", // Added 'img' property
      name: "Attorney Woo",
    
      url: "Series/Drama/ExtraordinaryAttorneyWoo.html", // Added 'url' property
    },
    {
      id: 26,
      img: "images/avengers.jpg", // Added 'img' property
      name: "Avengers",

      url: "Home/boalltime/The Avengers.html", // Added 'url' property
    },
    {
      id: 27,
      img: "images/bajirao.jpg", // Added 'img' property
      name: "Bajirao Mastani",
    
      url: "Movies/Drama/bajirao mastarni.html", // Added 'url' property
    },
    {
      id: 28,
      img: "images/barbarian.jpg", // Added 'img' property
      name: "Barbarian",
     
      url: "", // Added 'url' property
    },
];

const search2 = document.getElementsByClassName('search2')[0];
const search_bar1 = document.getElementById('search_bar1');

// Function to show search2
function showSearch2() {
    search2.style.display = "block";
}

// Function to hide search2
function hideSearch2() {
    search2.style.display = "none";
}

// Add a click event listener to search_bar1 to show search2
search_bar1.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the document click event
    showSearch2();
});

// Add a focus event listener to search_bar1 to show search2
search_bar1.addEventListener('focus', () => {
    showSearch2();
});

// Add a click event listener to the document to hide search2 when clicking outside
document.addEventListener('click', () => {
    hideSearch2();
});

window.addEventListener("load", () => {
  movies.forEach((element) => {
      const { img, name, url } = element;

      let card = document.createElement("a");
      card.href = url;
      card.innerHTML = `
          <div class="movie1"> 
          <div><img src=${img} style="width: 70px; height: 70px;" ></div>
          <div class="column">
          <div class="text">${name}</div>
          </div>
          </div>`;
      search2.appendChild(card);
  });
});

search_bar1.addEventListener('keyup', () => {
  let filter = search_bar1.value.toUpperCase();
  let a = search2.getElementsByTagName('a');

  for (let i = 0; i < a.length; i++) {
      let b = a[i].getElementsByClassName('column')[0];
      let c = b.getElementsByClassName('text')[0];

      let TextValue = c.textContent || c.innerText;
      if (TextValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = ''; // Show the element if it matches the filter
      } else {
          a[i].style.display = 'none'; // Hide the element if it doesn't match the filter
      }
  }
});


