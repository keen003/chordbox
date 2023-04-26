
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
    let bare2 = document.getElementById("bare2");
    let bare3 = document.getElementById("bare3");
    let bare4 = document.getElementById("bare4");
    let bare5 = document.getElementById("bare5");
    let bare6 = document.getElementById("bare6");
    
    
    var bare;

    if (button0.src.match('images/button1.png') && button1.src.match('images/button1.png')
    && button2.src.match('images/button1.png') && button3.src.match('images/button1.png')
    && button4.src.match('images/button1.png') && button5.src.match('images/button1.png'))
    {
        bare6.style.opacity = "1";

        bare2.style.opacity = "0";
        bare3.style.opacity = "0";
        bare4.style.opacity = "0";
        bare5.style.opacity = "0";
    }
    else if (button0.src.match('images/button1.png') && button1.src.match('images/button1.png')
    && button2.src.match('images/button1.png') && button3.src.match('images/button1.png')
    && button4.src.match('images/button1.png'))
    {
        bare5.style.opacity = "1";

        bare2.style.opacity = "0";
        bare3.style.opacity = "0";
        bare4.style.opacity = "0";
        bare6.style.opacity = "0";
    }
    else if (button0.src.match('images/button1.png') && button1.src.match('images/button1.png')
    && button2.src.match('images/button1.png') && button3.src.match('images/button1.png'))
    {
        bare4.style.opacity = "1";

        bare2.style.opacity = "0";
        bare3.style.opacity = "0";
        bare6.style.opacity = "0";
        bare5.style.opacity = "0";
    }
    else if (button0.src.match('images/button1.png') && button1.src.match('images/button1.png')
    && button2.src.match('images/button1.png'))
    {
        bare3.style.opacity = "1";

        bare2.style.opacity = "0";
        bare6.style.opacity = "0";
        bare4.style.opacity = "0";
        bare5.style.opacity = "0";
    }
    else if (button0.src.match('images/button1.png') && button1.src.match('images/button1.png'))
    {
        bare2.style.opacity = "1";

        bare6.style.opacity = "0";
        bare3.style.opacity = "0";
        bare4.style.opacity = "0";
        bare5.style.opacity = "0";
    }
    else
    {
        bare2.style.opacity = "0";
        bare3.style.opacity = "0";
        bare4.style.opacity = "0";
        bare5.style.opacity = "0";
        bare6.style.opacity = "0";
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

    let bare2 = document.getElementById("bare2");
    let bare3 = document.getElementById("bare3");
    let bare4 = document.getElementById("bare4");
    let bare5 = document.getElementById("bare5");
    let bare6 = document.getElementById("bare6");
    bare2.style.opacity = "0";
    bare3.style.opacity = "0";
    bare4.style.opacity = "0";
    bare5.style.opacity = "0";
    bare6.style.opacity = "0";
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