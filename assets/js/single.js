const tocToggle = document.getElementById('tocToggle')
let checked = false;
const toc = document.getElementById("jsToc")

tocToggle.addEventListener('click', () => {
    if (checked) {
        tocToggle.checked = false;
        checked = false;
        toc.classList.add('hidden')
    } else {
        tocToggle.checked = true;
        checked = true;
        toc.classList.remove('hidden')
    }
})
