const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

let flowers = [];

class Flower {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.petalSize = 0;
    }

    grow() {
        if (this.petalSize < this.size) {
            this.petalSize += 0.5;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        for (let i = 0; i < 5; i++) {
            let angle = (Math.PI * 2 * i) / 5;
            let petalX = this.x + Math.cos(angle) * this.petalSize;
            let petalY = this.y + Math.sin(angle) * this.petalSize;
            ctx.beginPath();
            ctx.arc(petalX, petalY, this.petalSize / 3, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.petalSize / 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createFlowers() {
    flowers.push(new Flower(200, 300, 40, "red"));
    flowers.push(new Flower(100, 300, 40, "dark pink"));
    flowers.push(new Flower(300, 300, 40, "purple"));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach(flower => {
        flower.grow();
        flower.draw();
    });
    requestAnimationFrame(animate);
}

createFlowers();
animate();
