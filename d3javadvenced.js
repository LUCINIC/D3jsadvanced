$(document).ready(function() {
 
    $('#load-images-btn').on('click', function() {
      
      $.ajax({
         
        url: 'https://api.pexels.com/v1/search?query=[1EqusIeAgK8cI2HDkdrlVhUmknI6eCH3TwTNFoKa9x4ea026WJZE4IYY]',
        headers: {
          'Authorization': '[1EqusIeAgK8cI2HDkdrlVhUmknI6eCH3TwTNFoKa9x4ea026WJZE4IYY]'
        },
        success: function(response) {
         
          if (response && response.photos && response.photos.length) {
            
            $('#images-container').empty();
            
            
            response.photos.forEach(function(photo) {
              $('#images-container').append('<div class="col-md-4"><img src="' + photo.src.medium + '" class="img-fluid"></div>');
            });
          }
        }
      });
    });
  }); 
  
  const loadSecondaryImagesBtn = document.getElementById("load-secondary-images-btn");
  loadSecondaryImagesBtn.addEventListener("click", function() {
    const imagesContainer = document.getElementById("secondary-images-container");
    const query = "cats";
    const url = `https://api.pexels.com/v1/search?query=${query}`;
    fetch(url, {
      headers: {
        Authorization: "1EqusIeAgK8cI2HDkdrlVhUmknI6eCH3TwTNFoKa9x4ea026WJZE4IYY"
      }
    })
    .then(response => response.json())
    .then(data => {
      imagesContainer.innerHTML = "";
      data.photos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.src.medium;
        img.classList.add("col-4", "mb-3");
        imagesContainer.appendChild(img);
      });
    })
    .catch(error => console.error(error));
  }); 
  



  const editButton = document.querySelector('.btn-outline-secondary'); 
editButton.textContent = 'Nascondi'; 


const editButton = document.querySelector('.btn-outline-secondary'); 
const card = document.querySelector('.card'); 

editButton.addEventListener('click', function() { 
  card.style.display = 'none'; 
}); 




const badge = document.querySelector('.card .badge'); 
const imageId = "my-image-id"; 

badge.textContent = imageId; 




const form = document.querySelector('#search-form'); 
const input = document.querySelector('#search-input'); 

form.addEventListener('submit', function(event) { 
  event.preventDefault(); 

  const query = input.value; 
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=YOUR_ACCESS_KEY`; 

  fetch(url) 
    .then(response => response.json()) 
    .then(data => {
      
    })
    .catch(error => console.error(error)); 
}); 




async function getCarouselImages() {
    const response = await fetch('https://api.unsplash.com/photos/random?count=5&client_id=YOUR_ACCESS_KEY');
    const data = await response.json();
    return data;
  }

  

  const errorAlert = document.querySelector('#error-alert');
const imageCard = document.querySelector('#image-card');


function showError() {
  errorAlert.classList.remove('d-none');
  imageCard.classList.add('d-none');
}






