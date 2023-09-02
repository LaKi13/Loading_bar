let pos = 0;
function recursionAnimation() {
    pos++;
    if (pos === 101) return;
    document.querySelector(".block").style.width = pos + "%";
    document.querySelector(".procent").textContent = pos + "%";
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 150);
}
animation();

// dots animation
const hideSquer = document.querySelectorAll(".hide-squer");
function s() {
    setTimeout(function () {
        hideSquer[0].style.opacity = "0";
    }, 500);
    setTimeout(function () {
        hideSquer[1].style.opacity = "0";
    }, 1000);
    setTimeout(function () {
        hideSquer[2].style.opacity = "0";
    }, 1500);

    setTimeout(function () {
        hideSquer[0].style.opacity = "1";
    }, 2000);
    setTimeout(function () {
        hideSquer[1].style.opacity = "1";
    }, 2500);
    setTimeout(function () {
        hideSquer[2].style.opacity = "1";
        if (pos === 101) return;
        s();
    }, 3000);
}
s();