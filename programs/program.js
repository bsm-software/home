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

    let programNotes = content.children.item(0);
    let height = programNotes.offsetHeight;

    for (i = 0; i < programNotes.children.length; i++) {
        let child = programNotes.children.item(i);
        if (child.classList.contains('separator')) {
            height += child.offsetHeight;
            let style = getComputedStyle(child);
            let verticalMargin = parseInt(style.marginTop);
            console.log("Vertical margin = " + verticalMargin);
            height += verticalMargin;
        }
    }

    content.setAttribute('style', 'height: ' + height + 'px;');
    content.classList.add('open');

    let item = content.parentElement;
    item.style.backgroundImage = "linear-gradient(var(--dark-true-blue), var(--true-blue))";
}
function conceal(id) {
    let content = document.getElementById(id);
    if (content.classList.contains('open') == false) {
        return;
    }

    content.setAttribute('style', 'height: 0px');
    content.classList.remove('open');

    let item = content.parentElement;
    item.style.backgroundImage = "linear-gradient(var(--true-blue), var(--dark-true-blue))";
}