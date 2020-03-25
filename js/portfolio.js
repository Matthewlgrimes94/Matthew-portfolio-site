const reposEl = $(".repos");

$.get("https://api.github.com/users/matthewlgrimes94/repos", (data) => {
    console.log(data);
    for (var j = 0; j < data.length; j++) {
        if (data[j].name === "Salt-City-Services"){
            appendStarredRepo("star", data[j]);
        }
    }

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name)
        if (data[i].name === "Weather-glance") {
           appendRepo("brightness_high", data[i]);
        } else if (data[i].name === "Team-Generator") {
            appendRepo("people", data[i]);
        } else if (data[i].name === "Easy-Notes") {
           appendRepo("edit", data[i])
        } else if (data[i].name === "Big-B-Code-Quiz") {
            appendRepo("play_arrow", data[i]);
        }
    }

    for (var l = 0; l < data.length; l++) {
        if (data[l].name === "mood.") {
            appendStarredRepo("star", data[l]);
        }
    }
});


function appendRepo(iconName, repo){
    reposEl.append(
        $(`<div class="col s12 m6">
        <div class="repoItem z-depth-2 repoCard">
        <i class="medium material-icons repoIcon">${iconName}</i>
        <div class="center-align">
        <h4>${repo.name}</h4>
        <hr>
        <a href="${repo.html_url}"><button class="waves-effect waves-light btn mar cyan lighten-3">${repo.name} Link</button></a>
        </div>
        </div>
        </div>`));
}

function appendStarredRepo(iconName, repo){
    reposEl.append(
        $(`<div class="col s12">
        <div class="repoItem z-depth-2 repoCard">
        <i class="medium material-icons repoIcon">${iconName}</i>
        <div class="center-align">
        <h1>${repo.name}</h1>
        <hr>
        <a href="${repo.html_url}"><button class="waves-effect waves-light btn mar cyan lighten-3">${repo.name} Link</button></a>
        </div>
        </div>
        </div>`));
}