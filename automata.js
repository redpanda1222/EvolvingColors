class Automata {

    constructor() {
        this.dimension = 100;
        this.size = 8;
        this.plants = [];
        for (var i = 0; i < this.dimension; i++) {
            this.plants.push([]);
            for (var j = 0; j < this.dimension; j++) {
                this.plants[i].push(null);
            }
        }
        this.x = randomInt(100);
        this.y = randomInt(100);
    };

    clearPlants() {
        for (var i = 0; i < this.dimension; i++) {
            for (var j = 0; j < this.dimension; j++) {
                this.plants[i][j] = null;
            }
        }
    };

    start() {
        this.plants[this.x][this.y] = new Plant({hue: randomInt(360), x: this.x, y: this.y}, this);
    }

    update() {
        for(var i = 0; i < this.dimension; i++) {
			for(var j = 0; j < this.dimension; j++) {
				this.plants[i][j]?.update();
				if(Math.random() < 0.001) this.plants[i][j] = null;
			}
		}
    };

    draw(ctx) {
        for(var i = 0; i < this.dimension; i++) {
			for(var j = 0; j < this.dimension; j++) {
				this.plants[i][j]?.draw(ctx);
			}
		}
    }
}
