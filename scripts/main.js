const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/montgo.jpg") {
        myImage.setAttribute("src", "images/sea.jpg");
    } else {
        myImage.setAttribute("src", "images/montgo.jpg" );
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Then we arrived in Javea, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Then we arrived in Javea, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
