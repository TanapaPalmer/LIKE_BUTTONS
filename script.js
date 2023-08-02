// function addmorelikes(e){
//     e.previousElementSibling.firstElementChild.innerText++
//     if (likes.innerText == 10){
//         result.innerText = "Seems like you like this picture a lot!";

//     }
// }



// increase likes
function increaseLikes(e) {
    e.innerText = parseInt(e.innerText) + 1;
}

// decrease likes
function decreaseLikes(e) {
    let likes = parseInt(e.innerText);
    
    if (likes > 0) {
        e.innerText = likes - 1;
        result.innerText = "You don't like me anymore?";
    }
}

function addmorelikes(e) {
    const likesElement = e.previousElementSibling.firstElementChild;
    increaseLikes(likesElement);

    const likes = parseInt(likesElement.innerText);

    if (likes % 20 === 0) {
        result.innerText = "Calm down!!!";

    } else if (likes % 10 === 0) {
        result.innerText = "Seems like you like me a lot!";

    } else if (likes % 5 === 0) {
        result.innerText = `${likes} likes for me!`;

    } else {
        result.innerText = "";
    }
}

// decrease likes button
function handleDecreaseButtonClick() {
    const likesElement = document.getElementById("likes");
    decreaseLikes(likesElement);
}
