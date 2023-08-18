const yourImage = document.querySelector(".main__avatar img");
const yourName = document.querySelector(".main__yourName");
const bio = document.querySelector(".main__bio");
const yourLocation = document.querySelector(".main__location");
const numberFollowers = document.querySelector(".numberFollowers");
const numberFollowing = document.querySelector(".numberFollowing");
const inputSearch = document.querySelector(".input__search");

function APIGithub(userGithub) {

    fetch(`https://api.github.com/users/${userGithub}`)
        .then((response) => {

          return response.json();

        })
        .then((data) => {

            yourImage.setAttribute("src", `${data.avatar_url}`);
            yourName.innerHTML = data.name;
            if(data.bio == null) {
                bio.style.display = "none";
            } else {
                bio.innerHTML = data.bio;
            };
            if(data.location == null) {
                yourLocation.style.display = "none";
            } else {
                yourLocation.innerHTML = data.location;
            };
            numberFollowers.innerHTML = data.followers;
            numberFollowing.innerHTML = data.following;

        });
};

inputSearch.addEventListener("submit", function(event) {

    event.preventDefault();

    APIGithub(this.childNodes[1].value);
    
    this.childNodes[1].value = "";

});