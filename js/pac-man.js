headOn.canvas(224,288)
var pac_man, grid, red_ghost, blue_ghost, pink_ghost, yellow_ghost, ghost;
//types of tiles
//0 un accesable
//1 accesable
map = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
];
ghost = {
	frightend:0;
}
red_ghost = headOn.entity({},ghost);

pac_man = {
	x: 20,
	y: 12,
	tilex: 0,
	tiley: 0,
	speed: 10,
	//up: 0 left:1 down: 2 right:3
	facing: 3
};
gamestate = {
	// 0 chase 1 scatter
	mode: 0
}
headOn.update = function(){
	moveRedGhost();
}
function moveRedGhost(){
	var tile = nextTile(red_ghost.x, red_ghost.y, red_ghost.facing),
	adjTiles = getAdjacentTiles(tile),
	passableTiles = [];

	for(t in adjTiles){
		if(adjTiles[t] !== 0){
			passableTiles.push(t);
		}
	}
	if(passableTiles.length > 2){

	}
	else{
		red_ghost.x += velocity(direction, speed, "x") * modifier;
		red_ghost.y += velocity(direction, speed, "y") * modifier;
	}

}
function targetTile(ghost){
	switch(ghost){
		case "red":
			return redTargetTile();
		case "pink":
			return pinkTargetTile();
		case "blue":
			return blueTargetTile();
		case "orange":
			return orangeTargetTile();
	}
}


function redTargetTile(){
	var mode = gamestate.mode;
	if(!red_ghost.frightend){
		if(mode === 0){
			return getTile(pac_man.x, pac_man.y);
		}
		else{
			return {x:2, y:28}
		}
	}

}
function pinkTargetTile(){
	var mode = gamestate.mode;
	if(!pink_ghost.frightend){

	}
}
function nextTile(x, y, facing){
	var currentTile = getTile(x, y);
	switch(facing){
		case 0:
			return map[currentTile.x][currentTile.y - 1];
		case 1:
			return map[currenTile.x -1][currentTile.y];
		case 2:
			return map[currentTile.x][currentTile.y + 1];
		case 3:
			return map[currentTile.x + 1][currentTile.y];
	}
}
function adjacentTiles(tile){
	return {
		up: map[tile.x][tile.y -1],
		down: map[tile.x][tile.y -1],
		left: map[tile.x - 1][tile.y],
		right: map[tile.x + 1][tile.y]
	}
}
function getTile(x, y){
	var tile_x = Math.ceil(x/8);
	var tile_y = Math.ceil(u/8);
	return {
		x: tile_x,
		y: tile_y
	};
}
function typeOfTile(tile){
	return map[tile.x][tile.y];
}

function velocity(speed, direction, axis){
	switch(axis){
		case "x":
			if(direction !== 1 || direction !== 3){
				return 0;
			}
			else{
				if(direction === 1){
					return speed * -1;
				}
				else{
					return speed;
				}
			}
		case "y":
			if(direction !== 0 || direction !== 2){
					return 0;
			}
			else{
				if(direction === 0){
					return speed * -1;
				}
				else{
					return speed;
				}
			}
	}
}