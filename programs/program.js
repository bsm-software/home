function toggle(id) {
    let content = document.getElementById(id);

    if (content.classList.contains('open')) {
        conceal(id);
    } else {
        reveal(id);
    }
}
function reveal(id) {
    let content = document.getElementById(id);
    if (content.classList.contains('open')) {
        return;
    }

    let text = content.children.item(0);
    let height = text.offsetHeight;

    content.setAttribute('style', 'height: ' + (height + 20) + 'px;');
    content.classList.add('open');
}
function conceal(id) {
    let content = document.getElementById(id);
    if (content.classList.contains('open') == false) {
        return;
    }

    content.setAttribute('style', 'height: 0px');
    content.classList.remove('open');
}