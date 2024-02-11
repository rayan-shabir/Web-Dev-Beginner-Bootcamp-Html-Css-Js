function toggleHide() {
    let para = document.getEelemntById('para');
    let btn = document.getElementById('btn');

    if(para.style.display != 'none') {
        para.style.display = 'none';
    } else {
        para.style.display = 'block';
    }
}