class Animat {

    constructor(other, automata) {
        this.hue = other.hue;
        this.x = other.x;
        this.y = other.y;

        this.automata = automata;
        this.energy = 20;
        this.move = 0;

        this.slider = document.getElementById("speedSlider");
        this.speed = parseFloat(this.slider.value);
    };


    update() {
        this.speed = parseFloat(this.slider.value);
        if (this.move < 1) this.move += this.speed;
        if (this.move >= 1) {
            if (randomInt(2) == 0) {
                this.x = (this.x + 1) % this.automata.dimension;
            } else {
                this.y = (this.y + 1) % this.automata.dimension;
            }
            this.move = 0;
        }
    };

    draw(ctx) {
        ctx.fillStyle = hsl(this.hue, 100, 50);
        ctx.strokeStyle = "light gray";
        ctx.beginPath();
        ctx.arc(this.x * this.automata.size + this.automata.size / 2, this.y * this.automata.size + this.automata.size / 2, this.automata.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };
}