class Circle{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
    }

    update(){
        this.draw()
    }

    draw(){
        var grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        grd.addColorStop(0, "rgba(0,0,0,0)");
        grd.addColorStop(1, "#01383d");
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(this.x, this.y, this.r+(this.r*2), 0, 2 * Math.PI)
        ctx.fill();
    }
}