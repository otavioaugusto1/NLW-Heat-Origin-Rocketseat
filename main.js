const linksSocialMedia = {
  github: 'otavioaugusto1',
  instagram: 'otavio.gon',
  facebook: 'otavio.nogueira.752',
  twitter: 'OtvioAugustoGo9'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
function getUserGithub(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url;
    UserPhoto.src = data.avatar_url;
    userLogin.textContent = data.login;
  })
}
getUserGithub()