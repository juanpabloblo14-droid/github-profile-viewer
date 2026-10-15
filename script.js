//DOM ELEMENTS
const userName = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchbtn");
const messageDisplay = document.getElementById("message");
const profileCard = document.getElementById("profilecard");
const avatarDisplay = document.getElementById("avatar");
const nameDisplay = document.getElementById("name");
const bioDisplay = document.getElementById("bio");
const reposDisplay = document.getElementById("repos");
const followersDisplay = document.getElementById("followers");


//SEARCH BUTTON 
searchBtn.addEventListener("click", function () {
    let username = userName.value.trim()
    if (username === '') {
        messageDisplay.textContent = "Please enter a username";
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
        .then(function (response) {
            if (!response.ok) {
                messageDisplay.textContent = "User not found";
                throw new Error("not found");
            }
            return response.json();
        })
        .then(function (data) {
            nameDisplay.textContent = data.name;
            bioDisplay.textContent = data.bio || "No bio available";
            avatarDisplay.src = data.avatar_url;
            reposDisplay.textContent = data.public_repos;
            followersDisplay.textContent = data.followers;

            profileCard.classList.remove("hidden");
            messageDisplay.textContent = "";
        })
        .catch(function () {
        });
});