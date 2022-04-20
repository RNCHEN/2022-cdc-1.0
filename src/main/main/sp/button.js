// 侧边导航hover触发图标改变
let buttons = document.getElementsByClassName('left-button');
for (let button of buttons) {
    if(button.classList.contains('left-button-point')){
        let oldSrc = button.firstElementChild.src;
        button.firstElementChild.src = oldSrc.substring(0, oldSrc.lastIndexOf('.')) + '1' + '.svg';
    }
    else{
        button.onmouseenter = function (e) {
            let oldSrc = e.target.firstChild.src;
            e.target.firstElementChild.src = oldSrc.substring(0, oldSrc.lastIndexOf('.')) + '1' + '.svg';
        };
        button.onmouseleave = function (e) {
            let newSrc = e.target.firstElementChild.src;
            e.target.firstElementChild.src = newSrc.substring(0, newSrc.lastIndexOf('1')) + '.svg';
        }
    }
}