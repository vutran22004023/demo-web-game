
document.getElementById('next').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist').scrollLeft +=  widthitem;
}

document.getElementById('prev').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist').scrollLeft -=  widthitem;
}

    // gamee - action
document.getElementById('next-action').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist-action').scrollLeft +=  widthitem;
}

document.getElementById('prev-action').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist-action').scrollLeft -=  widthitem;
}
    // game-sport
document.getElementById('next-sport').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist-sport').scrollLeft +=  widthitem;
}

document.getElementById('prev-sport').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist-sport').scrollLeft -=  widthitem;
}

    // game-adventure
document.getElementById('next-adventure').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist-adventure').scrollLeft +=  widthitem;
}

document.getElementById('prev-adventure').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist-adventure').scrollLeft -=  widthitem;
}

