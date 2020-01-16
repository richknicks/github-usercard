/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const followersArray = [
  'SethC16',
  'alecdye',
  'M-PAW',
  'AliciaPetgrave',
  'richknicks',
  'Vrndavana'
];

followersArray.forEach(user => {
  axios.get('https://api.github.com/users/' + user)
  .then( response => {
      gitProfile.append(createCard(response))
  })
  .catch( err => {
    console.log('Nothing to display.', err);
  })
})
function createCard (user){
  const gitCard = document.createElement('div'),
        gitImg = document.createElement('img'),
        gitInfo = document.createElement('div'),
        gitH3 = document.createElement('h3'),
        gitP1UserName = document.createElement('p'),
        gitP2Location = document.createElement('p'),
        gitP3Profile = document.createElement('p'),
        gitP4Followers = document.createElement('p'),
        gitP5Following = document.createElement('p'),
        gitP6Bio = document.createElement('p'),
        gitA = document.createElement('a');

        gitCard.append(gitImg);
        gitCard.append(gitInfo);
        gitInfo.append(gitH3);
        gitInfo.append(gitP1UserName);
        gitInfo.append(gitP2Location);
        gitInfo.append(gitP3Profile);
        gitInfo.append(gitP4Followers);
        gitInfo.append(gitP5Following);
        gitInfo.append(gitP6Bio);

        gitCard.classList.add("card");
        gitInfo.classList.add("card-info");
        gitH3.classList.add("name");
        gitP1UserName.classList.add("username");

        gitImg.src = user.data.avatar_url;
        gitH3.textContent = user.data.name;
        gitP1UserName.textContent = user.data.login;
        gitP2Location.textContent = `Location: ${user.data.location}`;
        gitP3Profile.textContent = 'Profile: '; 
        gitA.textContent = user.data.html_url;
        gitA.setAttribute("href", user.data.html_url);
        gitP4Followers.textContent = `Followers: ${user.data.followers}`;
        gitP5Following.textContent = `Following: ${user.data.following}`;
        gitP6Bio.textContent = `Bio: ${user.data.bio}`;

        gitP3Profile.append(gitA);

        

               
        return gitCard;

}
const gitProfile = document.querySelector('.cards');



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
