document.addEventListener("keyup", ev => {
    if (ev.key === "Escape") {
        window.location.reload();
    }
});

document.addEventListener("DOMContentLoaded", (event) => {
    if(["#onlyfans", "#privacy"].includes(window.location.hash)){
        document.querySelector("#popup-overlay").setAttribute("data-enabled", "");
    }
});
