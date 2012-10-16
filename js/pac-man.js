headOn.canvas(224*2,288*2)
var pac_man, grid, red_ghost, blue_ghost, pink_ghost, yellow_ghost, ghost;
//types of tiles
//0 un accesable
//1 accesable
map = [
//   0 1 2 3 4 5 6 7 8 9 10111213151617181920
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//0
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],//3
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//4
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//5
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//6
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],//7
	[0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],//8
	[0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],//9
	[0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],//10
	[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],//11
	[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],//12
	[0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],//13
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//14
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//15
	[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],//16
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//17
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//18
	[0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],//19
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//20
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//21
	[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],//22
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//23
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//24
	[0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0],//25
	[0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],//26
	[0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
	[0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],//28
	[0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],//29
	[0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],//29
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],//29
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//29
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//29
	

];
ghost = {
	frightend:0,
	next_tile: {},
}
red_ghost = headOn.entity({
	x:40,
	y:56,
	direction: 2,
	current_tile:{x:1, y:0},
	next_tile: {
		direction:2,
		x:2,
		y:3
	}
},ghost);
pink_ghost = headOn.entity({
	x:40,
	y:72,
	direction: 2,
	current_tile:{x:1, y:0},
	next_tile: {
		direction:2,
		x:2,
		y:4
	}
},ghost);
headOn.loadImages({name:"red_ghost", src:"img/red_ghost.png"},{name:"pink_ghost", src:"img/pink_ghost.png"})
pac_man = {
	x: 184,
	y: 376,
	tilex: 0,
	tiley: 0,
	speed: 10,
	//up: 0 left:1 down: 2 right:3
	direction: 2
};
gamestate = {
	// 0 chase 1 scatter
	mode: 0
}

keysDown = {};
addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
headOn.update = function(){
	moveRedGhost();
	movePinkGhost();
	movePacMan();
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
	headOn.drawImage( headOn.images["red_ghost"], red_ghost.x - (17/2), red_ghost.y - (17/2))
	headOn.drawImage( headOn.images["pink_ghost"], pink_ghost.x - (17/2), pink_ghost.y - (17/2))
	headOn.drawRect(16,16, pac_man.x - (16/2), pac_man.y - (16/2), "yellow")
}
headOn.run();
function movePacMan(){
	var tile = getTile(pac_man.x, pac_man.y);
	var next_tile;
	var type;
	//38:up
	//40:down
	//37:left
	//39:right
	if (38 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,0)
		type = typeOfTile(next_tile)
		if(type){
			pac_man.direction = 0;
		}
	}
	if (40 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,2)
		type = typeOfTile(next_tile)
		if(type){
			pac_man.direction = 2;
		}
	}
	if (37 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,1)
		type = typeOfTile(next_tile)
		if(type){
			pac_man.direction = 1;
		}
	}
	if (39 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,3)
		type = typeOfTile(next_tile)
		if(type){
			pac_man.direction = 3;
		}
	}
	if(typeOfTile(nextTile(tile.x, tile.y, pac_man.direction))){

			pac_man.x += velocity(20, pac_man.direction, "x") * (headOn.fps/1000);
			pac_man.y += velocity(20, pac_man.direction, "y") * (headOn.fps/1000);
		
		
	}
	else{
		if(!inCenterOfTile(pac_man, tile)){
			pac_man.x += velocity(20, pac_man.direction, "x") * (headOn.fps/1000);
			pac_man.y += velocity(20, pac_man.direction, "y") * (headOn.fps/1000);
		}
	}
	tile = getTile(pac_man.x, pac_man.y);
	if(pac_man.direction === 0 || pac_man.direction === 2){
		pac_man.x = tile.x * 16 +8
	}
	else{
		pac_man.y = tile.y * 16 + 8
	}
}
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
	if(current_tile.x === red_ghost.next_tile.x && current_tile.y === red_ghost.next_tile.y && inCenterOfTile(red_ghost, red_ghost.next_tile)){
		tile = nextTile(current_tile.x, current_tile.y, red_ghost.next_tile.direction);
		adjTiles = adjacentTiles(tile);
		passableTiles = [];
		target_tile = targetTile("red");
		
		red_ghost.direction = red_ghost.next_tile.direction;
		red_ghost.next_tile.x = tile.x;
		red_ghost.next_tile.y = tile.y;
		for(t in adjTiles){
			if(adjTiles[t] !== 0 && opposites[t] !== red_ghost.next_tile.direction){
				passableTiles.push(t);
			}
		}
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
					previous_distance = distance;
					red_ghost.next_tile.direction = d[t];
				}

			})
		}
		else if( d[passableTiles[0]] !== red_ghost.next_tile.direction){
			red_ghost.next_tile.direction = d[passableTiles[0]];
		}
		else{
			red_ghost.next_tile.direction = red_ghost.direction;
		}
	}
	red_ghost.x += velocity(21, red_ghost.direction, "x") * (headOn.fps/1000);
	red_ghost.y += velocity(21, red_ghost.direction, "y") * (headOn.fps/1000);

}
function movePinkGhost(){
	var current_tile = getTile(pink_ghost.x, pink_ghost.y),
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
	if(current_tile.x === pink_ghost.next_tile.x && current_tile.y === pink_ghost.next_tile.y && inCenterOfTile(pink_ghost, pink_ghost.next_tile)){
		tile = nextTile(current_tile.x, current_tile.y, pink_ghost.next_tile.direction);
		adjTiles = adjacentTiles(tile);
		passableTiles = [];
		target_tile = targetTile("pink");
		
		pink_ghost.direction = pink_ghost.next_tile.direction;
		pink_ghost.next_tile.x = tile.x;
		pink_ghost.next_tile.y = tile.y;
		for(t in adjTiles){
			if(adjTiles[t] !== 0 && opposites[t] !== pink_ghost.next_tile.direction){
				passableTiles.push(t);
			}
		}
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
					previous_distance = distance;
					pink_ghost.next_tile.direction = d[t];
				}

			})
		}
		else if( d[passableTiles[0]] !== pink_ghost.next_tile.direction){
			pink_ghost.next_tile.direction = d[passableTiles[0]];
		}
		else{
			pink_ghost.next_tile.direction = pink_ghost.direction;
		}
	}
	pink_ghost.x += velocity(18, pink_ghost.direction, "x") * (headOn.fps/1000);
	pink_ghost.y += velocity(18, pink_ghost.direction, "y") * (headOn.fps/1000);
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

function inCenterOfTile(obj,tile){
	if(obj.x >= tile.x * 16 + 7 && obj.x <= tile.x * 16 + 9){
		if(obj.y >= tile.y *16 +7 && obj.y <= tile.y * 16 + 9){
			return true;
		}
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
	var mode = gamestate.mode,
	tile = getTile(pac_man.x, pac_man.y);
	if(!red_ghost.frightend){
		if(mode === 0){
			switch(pac_man.direction){
				case 0:
					return {x:tile.x - 4, y:tile.y - 4};
				case 1:
					return {x:tile.x - 4, y:tile.y}
				case 2:
					return {x:tile.x, y:tile.y+4}
				case 3:
					return {x:tile.x + 4, y:tile.y}
			}
		}
		else{
			return {x:2, y:28}
		}
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
	return map[tile.y][tile.x];
}
function distanceTo(obj1,obj2){
	return Math.sqrt(Math.pow((obj1.x-obj2.x),2) + Math.pow(obj1.y-obj2.y,2))
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
