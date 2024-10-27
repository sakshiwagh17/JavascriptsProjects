const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    fetchProfile();
})

function fetchProfile() {
    const username=document.getElementById("username").value;
    if(!username){
        alert('Enter the username');
        return 
    }
    fetch(`https://api.github.com/users/${username}`)
    .then(Response=>{
        if(!Response.ok){
            throw new console.error("Cant fetch the data");
            
        }
        return Response.json();
    })
    .then(data=>{
        displayProfile(data);
    })
    .catch(err=>{
        console.log("there is some err"+err);
        
    })
}
function displayProfile(data) {
    const profileElement=document.getElementById("profile");
    profileElement.innerHTML=`<h1>${data.login}</h1>
    <img src="${data.avatar_url}" width="100" height="100" style="border-radius: 50%;">
    <h3>Name:${data.name}</h3>
    <h4>Followers: ${data.followers}</h4>
    <h4>Following: ${data.following}</h4>
    <h4>Public repository:${data.public_repos}</h4>
    <a href="${data.html_url}">Get the github profile</a>`

    
}
