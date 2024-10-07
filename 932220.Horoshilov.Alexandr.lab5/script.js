
function actionPopup(num, action) {
    var popups = document.querySelectorAll('.popup-box');
    var overlay = document.querySelector('.overlay');

    if (action === 'open') {
        var popup = document.querySelector('.popup-box-' + num);
        popup.style.display = 'block';
        overlay.style.display = 'block';
    } 
    else if (action === 'close') {
        popups.forEach(function(popup) {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });
    }
}