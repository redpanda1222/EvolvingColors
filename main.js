const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	var automata = new Automata();

	gameEngine.addEntity(automata);

	document.getElementById("addPlant").addEventListener("click", () => {
		automata.addPlant();
	});

	document.getElementById("addAnimat").addEventListener("click", () => {
		automata.addAnimat();
	});

	document.getElementById("killPlants").addEventListener("click", () => {
		automata.clearPlants();
	});

	document.getElementById("killAnimats").addEventListener("click", () => {
		automata.clearAnimats();
	});

	document.getElementById("killAll").addEventListener("click", () => {
		automata.clearPlants();
		automata.clearAnimats();
	});

	gameEngine.init(ctx);

	gameEngine.start();
});
