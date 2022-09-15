use = 'strict'

function redirect() {
    window.location.href = './editor.html';
}
window.onclick = function redirecthandle(){
    document.getElementById('redir').onclick(redirect());
}