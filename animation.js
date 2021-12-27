let i = 0;
let message = 'Discord Maria Célia'

typing();

function typing() {
    if(i < message.length) {
        document.getElementById('text').innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 150);
    } else if(i == message.length) {
        document.getElementById('bar').innerHTML = ''
    }
}