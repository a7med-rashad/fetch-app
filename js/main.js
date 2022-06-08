
let theInput = document.querySelector(".get-link input")
let getButton = document.querySelector(".get-button")
let myData = document.querySelector(".show-data")

theInput.addEventListener ("keyup", (e) => {
    if(e.keyCode === 13) {
        getLink()
    }
})

getButton.onclick = function () {
    getLink()
}

function getLink() {
    if (theInput.value == "") {
        myData.innerHTML = "<span>Please write the your username !</span>"
    }else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((link) => link.json())

        .then((data) => {
            myData.innerHTML = "";

            data.forEach(link => {
                let mainDiv = document.createElement("div")

                mainDiv.appendChild(document.createTextNode(link.name))

                mainDiv.className = "link-box"

                let theUrl = document.createElement("a")

                theUrl.appendChild(document.createTextNode("Visit"))

                theUrl.href = `https://github.com/${theInput.value}/${link.name}`;

                theUrl.setAttribute("target", "_blank");

                mainDiv.appendChild(theUrl)

                let starsText = document.createElement("span")

                starsText.appendChild(document.createTextNode(`Stars  ${link.stargazers_count}`))

                mainDiv.appendChild(starsText)

                myData.appendChild(mainDiv)
            });
        });
        
    }
}