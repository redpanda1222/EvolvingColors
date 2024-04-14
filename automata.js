class Automata {

    constructor() {
        this.dimension = 100;
        this.size = 8;
        this.plants = [];
        this.animats = [];
        for (var i = 0; i < this.dimension; i++) {
            this.plants.push([]);
            for (var j = 0; j < this.dimension; j++) {
                this.plants[i].push(null);
            }
        }
        this.x = randomInt(100);
        this.y = randomInt(100);
    };

    addAnimat() {
        this.animats.push(new Animat({hue: randomInt(360), x: randomInt(100), y: randomInt(100)}, this));
    };

    clearPlants() {
        for (var i = 0; i < this.dimension; i++) {
            for (var j = 0; j < this.dimension; j++) {
                this.plants[i][j] = null;
            }
        }
    };

    clearAnimats() {
        this.animats.length = 0;
    };

    addPlant() {
        this.plants[this.x][this.y] = new Plant({hue: randomInt(360), x: this.x, y: this.y}, this);
    };

    update() {
        for(var i = 0; i < this.dimension; i++) {
			for(var j = 0; j < this.dimension; j++) {
				this.plants[i][j]?.update();
				if(Math.random() < 0.001) this.plants[i][j] = null;
			}
		}
        for (var i = 0; i < this.animats.length; i++) {
            this.animats[i]?.update();
            if(Math.random() < 0.001) this.animats[i] = null;
        }
    };

    draw(ctx) {
        for(var i = 0; i < this.dimension; i++) {
			for(var j = 0; j < this.dimension; j++) {
				this.plants[i][j]?.draw(ctx);
			}
		}
        for (var i = 0; i < this.animats.length; i++) {
            this.animats[i]?.draw(ctx);
        }
    };
}
