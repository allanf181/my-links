document.querySelector(".button-privacy").addEventListener("click", function() {
    document.body.style.backgroundImage = "url('images/download.gif')";
    document.querySelector(".container").style.display = "none";
    const song = document.getElementsByTagName("audio")[1];
    song.play();
});

document.addEventListener("keyup", ev => {
    if (ev.key === "Escape") {
        window.location.reload();
    }
});
