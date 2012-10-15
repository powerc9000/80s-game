headOn.canvas(224*5,288*4)
var pac_man, grid, red_ghost, blue_ghost, pink_ghost, yellow_ghost, ghost;
//types of tiles
//0 un accesable
//1 accesable
map = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//0
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],//2
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//3
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//4
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//5
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//6
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//7
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//8
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//9
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//10
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//11
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//12
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//13
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//14
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//15
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//16
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//17
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//18
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//19
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//20
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//21
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//22
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//23
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//24
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//25
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],//26
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],//27
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//28
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//29
];
ghost = {
	frightend:0,
	next_tile: {},
}
red_ghost = headOn.entity({
	x:48,
	y:64,
	direction: 2,
	current_tile:{x:1, y:0},
	next_tile: {
		direction:2,
		x:2,
		y:3
	}
},ghost);
headOn.loadImages({name:"red_ghost", src:"img/red_ghost.png"})
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
headOn.render = function(){
	for(i=0;i<map[0].length;i++){
		for(j=0;j<map.length;j++){
			if(map[j][i]===0){
				headOn.drawRect(16,16, i*16, j*16, "black");
			}
			else{
				headOn.drawRect(16,16, i*16, j*16, "blue");
			}
		}
	}
	var current_tile = getTile(red_ghost.x, red_ghost.y)
	headOn.drawRect(16, 16, current_tile.x*16, current_tile.y*16, "green")
}
headOn.run();
function moveRedGhost(){
	var current_tile = getTile(red_ghost.x, red_ghost.y),
	tile,
	adjTiles,
	passableTiles,
	target_tile,
	directions,
	previous_distance,
	d ={
		up:0,
		right:3,
		down:2,
		left:1
	},
	opposites = {
		up:2,
		right:1,
		down:0,
		left:3,
		0: 2,
		1: 3,
		2: 0,
		3: 1,
	};
	console.log(current_tile.x, current_tile.y, red_ghost.next_tile.direction)
	//tile = nextTile(current_tile.x, current_tile.y, red_ghost.next_tile.direction);
	//console.log(tile.x, tile.y)
	if(current_tile.x === red_ghost.next_tile.x && current_tile.y === red_ghost.next_tile.y){
		tile = nextTile(current_tile.x, current_tile.y, red_ghost.next_tile.direction);
		adjTiles = adjacentTiles(tile);
		passableTiles = [];
		target_tile = targetTile("red");
		
		red_ghost.direction = red_ghost.next_tile.direction;
		red_ghost.next_tile.x = tile.x;
		red_ghost.next_tile.y = tile.y;
		console.log(adjTiles, tile.x, tile.y)
		for(t in adjTiles){
			if(adjTiles[t] !== 0 && opposites[t] !== red_ghost.next_tile.direction){
				passableTiles.push(t);
			}
		}
		console.log(passableTiles)
		if(passableTiles.length > 1){
			directions = {
				up:{
					x:0,
					y: -1
				},
				down:{
					x:0,
					y:1
				},
				left:{
					x:-1,
					y:0
				},
				right:{
					x:1,
					y:0
				}
			}
			
			passableTiles.forEach(function(t, i){
				var distance = distanceTo({x:tile.x + directions[t].x, y:tile.y + directions[t].y}, target_tile);
				if(i === 0 || distance < previous_distance){
					red_ghost.next_tile.direction = d[t];
				}
			})
		}
		else if( d[passableTiles[0]] !== red_ghost.next_tile.direction){
			red_ghost.next_tile.direction = d[passableTiles[0]];
		}
		else{
			console.log("here")
			red_ghost.next_tile.direction = red_ghost.direction;
		}
	}
	//console.log(velocity(5, red_ghost.direction, "x"), velocity(5, red_ghost.direction, "y"))
	red_ghost.x += velocity(10, red_ghost.direction, "x") * (headOn.fps/1000);
	red_ghost.y += velocity(10, red_ghost.direction, "y") * (headOn.fps/1000);

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
	
	switch(facing){
		case 0:
			return {y:y -1, x: x};
		case 1:
			return {y:y, x:x - 1};
		case 2:
			return {y:y+1, x:x}
		case 3:
			return {y:y, x:x+1};
	}
}
function adjacentTiles(tile){
	return {
		up: map[tile.y-1][tile.x],
		down: map[tile.y+1][tile.x],
		left: map[tile.y][tile.x-1],
		right: map[tile.y][tile.x+1]
	}
}
function getTile(x, y){
	var tile_x = Math.ceil(x/16) -1;
	var tile_y = Math.ceil(y/16) -1;
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
			if(direction !== 1 && direction !== 3){
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
			if(direction !== 0 && direction !== 2){
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