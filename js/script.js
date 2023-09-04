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
    // First option (975Kb - 978Kb)
    // setTimeout(() => { hideSquer[0].style.opacity = "0"; }, 500);
    // setTimeout(() => { hideSquer[1].style.opacity = "0"; }, 1000);
    // setTimeout(() => { hideSquer[2].style.opacity = "0"; }, 1500);

    // setTimeout(() => { hideSquer[0].style.opacity = "1"; }, 2000);
    // setTimeout(() => { hideSquer[1].style.opacity = "1"; }, 2500);
    // setTimeout(() => {
    //     hideSquer[2].style.opacity = "1";
    //     if (pos === 101) return;
    //     s();
    // }, 3000);


    // Second option (975Kb - 978Kb)
    // let count = 0;
    // if (pos === 101) return;
    // const hide = setInterval(() => {
    //     hideSquer[count].style.opacity = "0";
    //     count++;
    //     if (count === hideSquer.length) {
    //         count = 0;
    //         clearInterval(hide);
    //     }
    // }, 500);

    // setTimeout(() => {
    //     const visible = setInterval(() => {
    //         hideSquer[count].style.opacity = "1";
    //         count++;
    //         if (count === hideSquer.length) {
    //             count = 0;
    //             clearInterval(visible);
    //             s();
    //         }
    //     }, 500);
    // }, 1500);


    // Third option (976Kb - 1.1Mb)
    let count1 = 0;
    const hide1 = setInterval(() => {
        s1(hide1, "0");
    }, 500);

    setTimeout(() => {
        const visible1 = setInterval(() => {
            s1(visible1, "1");
        }, 500);
    }, 1500);

    function s1(item1, item2) {
        if (pos === 101) return;
        hideSquer[count1].style.opacity = item2;
        count1++;
        if (count1 === hideSquer.length) {
            count1 = 0;
            clearInterval(item1);
            s();
        }
    }
}

s();