let body = document.querySelector("body")
let box = document.createElement("div")
let button = document.createElement("button")
let cancel = document.createElement("button")
let h1 = document.createElement("h1")
let p = document.createElement("p")
let hr = document.createElement("hr")


button.classList.add("btn")
box.classList.add("modal-container")
cancel.classList.add("cancelButton")

box.style.display = "none"
button.textContent = "Open Modal"
cancel.textContent = "X"
cancel.style.display = "none"
h1.textContent = "Model Head"
p.textContent = "I love share my knowledge with the community. I'm a full-stack web developer focused on front-end technologies.Frontend Lover <3 :)"

button.addEventListener("click", function () {
    box.style.display = "block"
    box.style.cssText = "width: 500px; height: 150px; border: 2px solid gray;";
    cancel.style.display = "block"
    button.style.backgroundColor = "rgb(0, 0, 0 , 0.4)";
    body.style.backgroundColor = "rgb(0, 0, 0, 0.4)";
    box.style.backgroundColor = "white"
    button.style.display = "none"
});

cancel.addEventListener("click", function () {
    body.style.backgroundColor = ""
    button.style.backgroundColor = ""
    box.style.display = "none"
    button.style.display = "block"
    button.style.opacity = "1";
    body.style.opacity = "1";
});


body.append(button)
body.append(box)
box.append(cancel)
box.append(h1)
box.append(hr)
box.append(p)
