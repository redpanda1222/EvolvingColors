class Plant {
    constructor(other, automata) {
        this.hue = other.hue;
        this.x = other.x;
        this.y = other.y;
        this.growth = 0;

        this.automata = automata;
    };

    normalize(value, max) { 
		// return value >= max ? max-1 : value < 0 ? 0 : value; // no wrap
		return (value + max) % max; // wrap
	}

    mutate() {
        // to avoid selecting itslef
        var randomX = randomInt(3);
        var randomY = randomInt(3);
        if (randomX == 1 && randomY == 1) {
            randomY = randomInt(2) == 0 ? randomY + 1 : randomY - 1;
        }

        const newX = this.normalize(this.x - 1 + randomX, this.automata.dimension);
		const newY = this.normalize(this.y - 1 + randomY, this.automata.dimension);
		const hue = this.normalize(this.hue - 10 + randomInt(21), 360);
		return{hue:hue,x:newX,y:newY};
    };

    update() {
        const growthrate = 30;

		if(this.growth < 100) this.growth += 100/growthrate;
		if(this.growth >= 100){
			
			const other = this.mutate();

			if(!this.automata.plants[other.x][other.y]) {
				this.automata.plants[other.x][other.y] = new Plant (other, this.automata)
				this.growth -= 100;
			} 
		}
    };

    draw(ctx) {
        ctx.fillStyle = hsl(this.hue, 10 + this.growth, 50);
        ctx.strokeStyle = "dark gray";
        ctx.fillRect(this.x * this.automata.size, this.y * this.automata.size, this.automata.size, this.automata.size);
        ctx.strokeRect(this.x * this.automata.size, this.y * this.automata.size, this.automata.size, this.automata.size);
    };
}