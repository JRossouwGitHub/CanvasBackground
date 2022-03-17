class Hex{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
        this.a = 2 * Math.PI / 6
    }

    update(){
        this.draw()
    }

    draw(){
        var grd = ctx.createLinearGradient(this.x, this.y-this.r, this.x,this.y+this.r);
        grd.addColorStop(0, "red");
        grd.addColorStop(0.142, "orange");
        grd.addColorStop(0.2856, "yellow");
        grd.addColorStop(0.4284, "green");
        grd.addColorStop(0.5712, "blue");
        grd.addColorStop(0.714, "indigo");
        grd.addColorStop(0.8568, "violet");
        grd.addColorStop(1, "white");
        ctx.beginPath();
        ctx.lineWidth = 3;
        for (var i = 0; i < 7; i++) {
            let index = i
            if(index >= 0){
                ctx.lineTo(this.x + this.r * Math.cos(this.a * index), this.y + this.r * Math.sin(this.a * index));
            }
        }
        ctx.strokeStyle = grd;
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,0,0,0.5)'
        for (var i = 0; i < 7; i++) {
            let index = i
            if(index >= 0){
                ctx.lineTo(this.x + this.r * Math.cos(this.a * index), this.y + this.r * Math.sin(this.a * index));
            }
        }
        ctx.stroke()
    }
}