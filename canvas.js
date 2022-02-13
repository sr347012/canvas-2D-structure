var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillRect(100,100,100,100)



function circle(x,y,dx,dy,r) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI * 2, false);
        ctx.strokeStyle='blue';
        ctx.stroke();
        ctx.fill();
    
    }
    this.update = function () {
        this.x += this.dx ;
        this.y += this.dy ;
    
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        this.draw();
    }
}

//Creating a circle array
let numberOfCircles = 1000;
let circleArray = [];

for (let i = 0; i < numberOfCircles; i++) {
    var x = Math.random()* innerWidth;
    var y = Math.random() * innerHeight;
    var r = 2;

    var dx = Math.round(Math.random()*10) ;
    var dy = Math.round(Math.random()*2);

    circleArray.push(new circle(x,y,dx,dy,r));
    
}


c1 = new circle(x,y,dx,dy,r);

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);

    // c1.update();
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        
    }

}

animate();

