use = 'strict';

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
    if( document.getElementById('editor').style.fontWeight == "bold" ) {
        document.getElementById('editor').style.fontWeight = "normal";
    } else {
        document.getElementById('editor').style.fontWeight = "bold";
    }
}

function clear() {
    document.getElementById("editor").style.fontWeight = "normal";
    document.getElementById("editor").style.textAlign = "left";
    document.getElementById('editor').style.fontStyle = "normal";
}

function left() {
    document.getElementById("editor").style.textAlign = "left";
}

function center() {
    document.getElementById("editor").style.textAlign = "center";
}

function right() {
    document.getElementById("editor").style.textAlign = "right";
}

function italic() {
    if (document.getElementById('editor').style.fontStyle == "italic" ) {
        document.getElementById('editor').style.fontStyle= "normal";
    } else {
        document.getElementById('editor').style.fontStyle = "italic";
    }
}

window.onload = () => {
    document.getElementById('bold').addEventListener('click', bold)

    document.getElementById('italic').addEventListener('click', italic)

    document.getElementById('a-l').addEventListener('click', left)

    document.getElementById('a-c').addEventListener('click', center)

    document.getElementById('a-r').addEventListener('click', right)

    document.getElementById('clear').addEventListener('click', clear)

    document.getElementById('save').addEventListener('click', () => {

        const filename = document.getElementById('docname').value + '.txt';

        const content = document.getElementById('editor').value;

        if (filename && content) {
            download(filename, content);
        } else {

            window.alert('The file could not be downloaded. The File name or content is missing.');

        }
    });
    
};
