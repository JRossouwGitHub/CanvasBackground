let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const scrollbarWidth = window.innerWidth - document.body.offsetWidth
let mouse = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
}
const content = document.getElementById('content')
content.style.marginLeft = scrollbarWidth + 'px'
content.style.marginRight = scrollbarWidth + 'px'
content.onmousemove = function(event){
    mouse.x = event.pageX - (content.getBoundingClientRect().left) + 25
    mouse.y = event.clientY - (content.getBoundingClientRect().top) + 12
}
let mouseCircle = new Circle(0,0,300)
let circles = new Array()
let init = () =>{
    canvas.width = window.innerWidth-scrollbarWidth;
    canvas.height = content.scrollHeight;
    let size = 50
    let xMove = 50
    let yMove = 0
    for(let i = 0; i < (canvas.height/size); i++){
        for(let j = 0; j < (canvas.width/size); j++){
            circles.push(new Hex(xMove, yMove, size))
            xMove += size * 1.6
            if(j % 2 == 0){
                yMove += (size - 3)
            } else {
                yMove -= (size - 3)
            }
        }
        xMove = size
        yMove = size * i * 1.85
    }
}

let animation = () => {
    requestAnimationFrame(animation)
    update()
}

let update = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    draw()   
}

let draw = () => {
    for(circle in circles){
        if(distance(circles[circle], mouseCircle) < 1){
            circles[circle].draw()
        }
    }
    mouseCircle.x = mouse.x
    mouseCircle.y = mouse.y
    mouseCircle.draw()
}

let distance = (a, b) => {
    return Math.sqrt(Math.pow(b.x-a.x, 2) + Math.pow(b.y-a.y,2)) - (b.r + a.r)
}

let start = () => {
    init()
    animation()
}

start()