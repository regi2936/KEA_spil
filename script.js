//Starten er det samme som I Startskærmøvelse skriv det igen (eller kopier det ind her)

//En variabel med et tal
let score = 0;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();


    document.querySelector("#kort_bagside1").addEventListener("click", kort1ClickHandler);
    document.querySelector("#kort_bagside2").addEventListener("click", kort2ClickHandler);
}

function showStart() {
    console.log("show start");

}

document.querySelector("#start").classList.remove("hide");
document.querySelector("#play").classList.add("pulse");
document.querySelector("#play").addEventListener("click", hideStart);



function hideStart() {

    console.log("hide start")
    document.querySelector("#play").removeEventListener("click", hideStart)

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game")

    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");

}


function kort1ClickHandler() {
    console.log("der er klikket på Kort1");
    //score = score + 1;
    //score += 1;
    score++;
    console.log(score);
    document.querySelector("#points").innerHTML = "Score: " + score;
}


function kort2ClickHandler() {
    console.log("der er klikket på kort2");
    //score = score + 1;
    //score += 1;
    score++;
    console.log(score);
    document.querySelector("#points").innerHTML = "Score: " + score;
}
