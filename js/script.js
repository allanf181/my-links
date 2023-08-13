document.querySelector(".button-privacy").addEventListener("click", function() {
    // Change background to dancing rick
    document.body.style.backgroundImage = "url('images/download.gif')"

    // Hide the heading and the button
    document.querySelector(".container").style.display = "none"

    // Play song
    var song = document.getElementsByTagName("audio")[1]
    song.play()
})
