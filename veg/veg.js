var likedRecipes = [];

function viewLocation() {
    // Initialize the map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.352585, lng: 74.793579 }, // Default center (replace with user's location)
        zoom: 15 // Adjust zoom level as needed
    });

    // Add marker for user's location
    var marker = new google.maps.Marker({
        position: { lat: 13.35146806608148, lng: 74.7953220781786 }, // Default position (replace with user's location)
        map: map,
        title: 'Your Location'
    });
    var request = {
        location: userLocation,
        radius: '500', // Search radius in meters
        type: ['restaurant'] // Specify type as restaurant
    };
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            // Loop through the results and add a marker for each restaurant
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    });
}


function toggleLike(button, recipeName) {
    // Toggle the 'liked' class for the button
    button.classList.toggle('liked');

    // Check if the recipe is already liked
    var index = likedRecipes.indexOf(recipeName);
    if (index === -1) {
        // Recipe is not liked, so add it to the liked recipes array
        likedRecipes.push(recipeName);
        showNotification("Recipe Liked!");
    } else {
        // Recipe is already liked, so remove it from the liked recipes array
        likedRecipes.splice(index, 1);
    }

    // Show the Liked Recipes tab
    showLikedRecipes();
}


function showNotification(message) {
    // Show notification to the user
    alert(message);
}

function toggleLikedRecipes() {
  var likedRecipesList = document.getElementById('liked-recipes-list');
  var likedRecipesDiv = document.getElementById('liked-recipes');

  if (likedRecipes.length === 0) {
      // No liked recipes, hide the Liked Recipes tab
      likedRecipesDiv.style.display = 'none';
  } else {
      // Clear previous list
      likedRecipesList.innerHTML = '';

      // Populate the Liked Recipes tab with liked recipes
      likedRecipes.forEach(function(recipe) {
          var listItem = document.createElement('li');
          listItem.textContent = recipe;
          likedRecipesList.appendChild(listItem);
      });
      likedRecipesDiv.style.display = 'block';
  }
}

function showLikedRecipes() {
  var likedRecipesList = document.getElementById('liked-recipes-list');
  likedRecipesList.innerHTML = ''; // Clear previous list

  if (likedRecipes.length === 0) {
      // No liked recipes, so hide the Liked Recipes tab
      document.getElementById('liked-recipes').style.display = 'none';
  } else {
      // Populate the Liked Recipes tab with liked recipes
      likedRecipes.forEach(function(recipe) {
          var listItem = document.createElement('li');
          listItem.textContent = recipe;
          likedRecipesList.appendChild(listItem);
      });
      document.getElementById('liked-recipes').style.display = 'block';
  }
}
