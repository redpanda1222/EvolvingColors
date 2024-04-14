const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	var automata = new Automata();

	gameEngine.addEntity(automata);

	document.getElementById("start").addEventListener("click", () => {
		automata.start();
	});

	document.getElementById("killPlants").addEventListener("click", () => {
		automata.clearPlants();
	});

	gameEngine.init(ctx);

	gameEngine.start();
});
