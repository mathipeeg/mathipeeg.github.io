color = 'black';
size = 3;
clear = false;

window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.mooveTo(e.clientX, e.clientY);
    }
    //eventlisteners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});

function colorchange(string) {
    color = string;
}

function sizechange(string) {
    size = string;
}