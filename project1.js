let blankPic= document.getElementById('blank');
let inputFile = document.getElementById('input-file');
let grayscale= document.getElementById('applyFilterBtn')

inputFile.onchange=function(){
    blankPic.src=URL.createObjectURL(inputFile.files[0]);
}

grayscale.onclick=function(){
    const image = document.getElementById('blank')
    image.style.filter='grayscale(100%)'
}