const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" },
    {id: 4, name: "Jesse Ramen", restaurant: "Ondimu", image: "jesse.jpg", rating: 4.5, comment: "Tasty"},
   {id: 5, name: "Shawo Ramen", restaurant:"mdooeee", image: "shawo.jpg", rating:4, comment:"Kitu ni tamu!"}
 ];
 function displayRamens() {
   const menuDiv = document.getElementById('ramen-menu');
   ramens.forEach(function(ramen) {
       const imgElement = document.createElement('img');
       imgElement.src = ramen.image;  // Use ramen.image to get the image path
       imgElement.alt = ramen.name;   // Set alt text as the ramen name
       imgElement.classList.add('ramen-image');
       
       menuDiv.appendChild(imgElement);
   });
}

displayRamens();

function handleClick() {
   const form = document.getElementById('ramen-new');
   form.setAttribute("class", "id");
   form.style.flexDirection = "column";
   form.style.alignItems = "center";
   form.style.justifyContent = "center";
   form.style.display = "flex";

   const name = document.getElementById('name');
   name.setAttribute("placeholder", "Jajemelo"); 
   name.style.color = "blue";

   const restaurant = document.getElementById('new-restaurant');
   restaurant.setAttribute("placeholder", "Restaurant"); 

   const image = document.getElementById('new-image');
   image.setAttribute("accept", "image/*"); 

   const rating = document.getElementById('new-rating');
   rating.setAttribute("placeholder", "Rating"); 

   const comment = document.getElementById('new-comment');
   comment.setAttribute("placeholder", "Comment"); 
}

handleClick();
