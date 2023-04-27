
function switchButton(button_num)
{
    let button_img = document.getElementById("button_img"+button_num);
    let button_opc = document.getElementById("button"+button_num);
        //console.log("button"+button_num);
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

    let button0 = document.getElementById("button_img0");
    let button1 = document.getElementById("button_img1");
    let button2 = document.getElementById("button_img2");
    let button3 = document.getElementById("button_img3");
    let button4 = document.getElementById("button_img4");
    let button5 = document.getElementById("button_img5");
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

    document.getElementById("barre1").style.opacity = "0";
    document.getElementById("barre2").style.opacity = "0";
    document.getElementById("barre3").style.opacity = "0";
    document.getElementById("barre4").style.opacity = "0";
    document.getElementById("barre5").style.opacity = "0";
    document.getElementById("barre6").style.opacity = "0";
    document.getElementById("barre7").style.opacity = "0";

    const dropdown = document.getElementById("dropdown_barre");
    dropdown.selectedIndex = 0;
}

function exportPng()
{
    var timestamp = new Date().getTime();
    var capture = document.getElementById('capture');
    console.log(capture)

    domtoimage.toBlob(capture)
        .then(function (blob) {
            window.saveAs(blob, timestamp);
        })
}