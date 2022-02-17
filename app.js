
function switchButton(button_num)
{
    var container = document.getElementById("container");
    var button_pos = container.getElementsByTagName("img");
    var button_opc = document.getElementById("button"+button_num);

    if (button_pos[button_num].src.match('images/hover_button.png'))
    {
        button_pos[button_num].src = "images/button1.png";
        button_opc.style.opacity = "1";
    }
    else if (button_pos[button_num].src.match('images/button1.png'))
    {
        button_pos[button_num].src = "images/button2.png";
        button_opc.style.opacity = "1";
    }
    else if (button_pos[button_num].src.match('images/button2.png'))
    {
        button_pos[button_num].src = "images/button3.png";
        button_opc.style.opacity = "1";
    }
    else if (button_pos[button_num].src.match('images/button3.png'))
    {
        button_pos[button_num].src = "images/button4.png";
        button_opc.style.opacity = "1";
    }
    else if (button_pos[button_num].src.match('images/button4.png'))
    {
        button_pos[button_num].src = "images/hover_button.png";
        button_opc.style.opacity = "";
    }
}

function resetFret() {
    var container = document.getElementById("container");
    var buttons = container.getElementsByTagName("img");
    for (let i=0; i<24; i++)
    {
        var buttons_opc = document.getElementById("button"+i);
        buttons[i].src = "images/hover_button.png";
        buttons_opc.style.opacity = "";
    }
}

function exportPng() {
    domtoimage.toBlob(document.getElementById('container'))
        .then(function (blob) {
            window.saveAs(blob, 'fretboard.png');
        })
}

function drawAgain() {
    var container = document.getElementById("container");
    var button_pos = container.getElementsByTagName("img");
    var button_index = [];
    for(let i=0; i<24; i++)
    {
        if (button_pos[i].src.match('images/button1.png'))
        button_index.push(i);

        if (button_pos[i].src.match('images/button2.png'))
        button_index.push(i);

        if (button_pos[i].src.match('images/button3.png'))
        button_index.push(i);

        if (button_pos[i].src.match('images/button4.png'))
        button_index.push(i);
    }
    for(var element of button_index)
        console.log(element);

}
