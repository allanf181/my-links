document.addEventListener("keyup", ev => {
    if (ev.key === "Escape") {
        window.location.reload();
    }
});

document.addEventListener("DOMContentLoaded", (event) => {
    if(["#onlyfans", "#privacy"].includes(window.location.hash)){
        document.querySelector("#popup-overlay").setAttribute("data-enabled", "");
    }
    document.querySelector("a.close").addEventListener("click", ev => {
        document.querySelector("#popup-overlay").removeAttribute("data-enabled");
    });
});

(function(){

    const date = new Date();

    if(!(date.getMonth() === 1 && date.getDate() === 19) || ["#onlyfans", "#privacy"].includes(window.location.hash)){
        return;
    }

    const density = 7;
    const balloons = [];
    const colors = ['yellow', 'green', 'blue', 'red'];

    const stringElement = document.createElement("div");
    stringElement.classList.add("string");

    for (let i = 0; i < density; i++) {
        const element = document.createElement("div");
        element.classList.add("balloon");
        element.classList.add(randomColor());

        element.append(stringElement.cloneNode());
        document.body.append(element);

        setTimeout(() => {
            releaseBalloon(element);
        }, (i * 2000) + random(500, 1000));
    }


    function randomColor() {
        return colors[ random(0, colors.length) ];
    }

    function random (min, max){
        return Math.floor(Math.random() * (max-min)) + min;
    }

    function releaseBalloon(balloon) {
        const delay = random(100, 1000);
        const x = random(-99, -30); // random x value to fly
        const y = random(-99, -30); // random y value to fly

        const sequence = [{
            offset: 0,
            transform: `rotateZ(45deg) translate(0, 0)`
        }];


        if(random(0,2) === 0) {
            balloon.style.left = `${-1*x}vw`;

            sequence.push({
                offset: x/-200,
                transform: `rotateZ(45deg) translate(${x}vw, 0)`
            });
            sequence.push({
                offset: (x+y)/-200,
                transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
            });
            sequence.push({
                offset: (-100+y)/-200,
                transform: `rotateZ(45deg) translate(-100vw, ${y}vh)`
            });
        } else {
            sequence.push({
                offset: y/-200,
                transform: `rotateZ(45deg) translate(0, ${y}vh)`
            });
            sequence.push({
                offset: (x+y)/-200,
                transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
            });
            sequence.push({
                offset: (-100+x)/-200,
                transform: `rotateZ(45deg) translate(${x}vw, -100vh)`
            });
        }

        sequence.push({
            offset: 1,
            transform: `rotateZ(45deg) translate(-100vw, -100vh)`
        });

        const balloonAnimation = balloon.animate(sequence, {
            duration: 15000,
            delay: delay
        });


        balloonAnimation.onfinish = () => { releaseBalloon(balloon) }
    }
})();
