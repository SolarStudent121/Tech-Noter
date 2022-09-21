'use strict'

navigator.serviceWorker.register("../sw.js");

const editor = document.getElementById('editor');

function download(filename, content) {

    const element = document.createElement('a');

    const blob = new Blob([content], { type: 'plain/text' });

    const fileUrl = URL.createObjectURL(blob);

    element.setAttribute('href', fileUrl);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
};

function bold() {
    if (editor.style.fontWeight == "bold") {
        editor.style.fontWeight = "normal";
    } else {
        editor.style.fontWeight = "bold";
    }
}

function clear() {
    editor.style.fontWeight = "normal";
    editor.style.textAlign = "left";
    editor.style.fontStyle = "normal";
}

function left() {
    editor.style.textAlign = "left";
}

function center() {
    editor.style.textAlign = "center";
}

function right() {
    editor.style.textAlign = "right";
}

function italic() {
    if (editor.style.fontStyle == "italic") {
        editor.style.fontStyle = "normal";
    } else {
        editor.style.fontStyle = "italic";
    }
}

$(document).ready(function () {
    function hidePreloader() {
        var preloader = $('#preloader');
        preloader.fadeOut(500);
    }
    hidePreloader();
    document.getElementById('nav').hidden = false;
    document.getElementById('body').hidden = false;
    document.getElementById('footer').hidden = false;
});

window.onload = () => {
    document.getElementById('bold').addEventListener('click', bold)

    document.getElementById('italic').addEventListener('click', italic)

    document.getElementById('a-l').addEventListener('click', left)

    document.getElementById('a-c').addEventListener('click', center)

    document.getElementById('a-r').addEventListener('click', right)

    document.getElementById('clear').addEventListener('click', clear)

    document.getElementById('save').addEventListener('click', () => {

        const fname = document.getElementById('docname').value + '.txt';

        const fcontent = editor.value;

        if (fname && fcontent) {
            download(fname, fcontent);
        } else {

            window.alert('The file could not be downloaded. The File name or content is missing.');

        }
    });

};
