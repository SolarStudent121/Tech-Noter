use = 'strict'

function redirect() {
    window.location.href = '../editor';
}
document.getElementById('redir').addEventListener('click', redirect);

navigator.serviceWorker.register("../sw.js");