
function switchButton(button_num)
{
    let button_img = document.getElementById("button_img"+button_num);
    let button_opc = document.getElementById("button"+button_num);
        console.log("button"+button_num);
        if (button_img.src.match('images/hover_button.png'))
        {
            button_img.src = "images/button1.png";
            button_opc.style.opacity = "1";
        }

        else if (button_img.src.match('images/button1.png'))
            button_img.src = "images/button2.png";
        else if (button_img.src.match('images/button2.png'))
            button_img.src = "images/button3.png";
        else if (button_img.src.match('images/button3.png'))
            button_img.src = "images/button4.png";
        else if (button_img.src.match('images/button4.png'))
        {
            button_img.src = "images/hover_button.png";
            button_opc.style.opacity = "";
        }

}

function resetFret()
{
    let container = document.getElementById("container");
    let buttons = container.getElementsByTagName("img");
    for (let i=0; i<18; i++)
    {
        let buttons_opc = document.getElementById("button"+i);
        buttons[i].src = "images/hover_button.png";
        buttons_opc.style.opacity = "";
    }
}

function exportPng()
{

    domtoimage.toBlob(document.getElementById('container'))
        .then(function (blob) {
            window.saveAs(blob, 'chord_box.png');
        })
}
