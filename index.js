const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image:"https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image:"https://moringa.instructure.com/courses/967/files/517800/preview" , rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image:" https://moringa.instructure.com/courses/967/files/517799/preview ",raing:5, comment:"Finger-licking"},
    {id: 4, name: "Jesse Ramen", restaurant: "Ondimu", image:"https://moringa.instructure.com/courses/967/files/517798/preview", rating: 4.5, comment: "Tasty"},
   {id: 5, name: "Shawo Ramen", restaurant:"mdooeee", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating:4, comment:"Kitu ni tamu!"}
 ];

//  document.addEventListener("DOMContentLoaded", () => {
//     const ramenMenu = document.getElementById("ramen-menu")
//     const ramenDetail = document.getElementById("ramen-detail")
//     const  detailRestaurant = document.getElementById("ramen-restaurant")
//     const detailRating = document.getElementById("ramen-rating")
//     const detailName = document.getElementById("ramen-name")
//     const detailImage = document.getElementById("ramen-image")
//     const detailComment = document.getElementById("ramen-comment")


function displayRamens() {
  
  const ramenMenu =
  document.getElementById("ramen-menu")
  ramenMenu.innerHTML=``
  ramens.forEach(ramen =>{
    const img = document.createElement("img")
    img.src=ramen.image
    image.alt=ramen.name
    img.addEventListener("click",()=>handleClick(ramen));
    ramenMenu.appendChild(img)
  })
}



function handleClick() {
  const ramen_detail = 
  document.getElementById("ramen-detail")
  ramen_detail.getElementById("ramen-image")
  ramen_detail.getElementById("ramen-name")

  ramen_detail.getElementById("ramen-rating")
  ramen_detail.getElementById("ramen-restaurant")
  ramen_detail.getElementById("ramen-comment")

}

function addSubmitListener(){
  newRamenForm.addEventListener("submit", (event)=> {
    event.preventDefault();

    const ramenDish = {
      id: ramens.length + 1,
      name: document.getElementById("name").value,
      rating: document.getElementById("rating").value,
      comment: document.getElementById("comment").value,
      image: document.getElementById("image").value,
      restaurant: document.getElementById("restaurant").value
    }
    ramens.push(ramenDish);

const img = document.createElement("img");
img.src = ramenDish.image;
img.alt = ramenDish.name;
img.classList.add("ramen-detail");
img.addEventListener("click", () => handleClick(ramenDish));
ramenMenu.appendChild(img);

newRamenForm.reset();
  })
}

function main(){
  displayRamens()
  addSubmitListener()
}

main();