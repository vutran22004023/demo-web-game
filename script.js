
document.getElementById('next').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist').scrollLeft +=  widthitem;
}

document.getElementById('prev').onclick = function () {
    const widthitem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist').scrollLeft -=  widthitem;
}