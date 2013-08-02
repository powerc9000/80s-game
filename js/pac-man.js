headOn.canvas.create("main",224*2,288*2);

var pac_man, grid, red_ghost, blue_ghost, pink_ghost, yellow_ghost, ghost, canvas = headOn.canvas("main");
canvas.append("body")
//types of tiles
//0 un accesable
//1 accesable
map = [
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
dots = [
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
	x:88,
	y:72,
	direction: 1,
	next_direction:1,
	current_tile:{x:1, y:0},
	next_tile: {
		direction:1,
		x:4,
		y:4
	}
},ghost);
pink_ghost = headOn.entity({
	x:72,
	y:72,
	direction: 1,
	current_tile:{x:1, y:0},
	next_tile: {
		direction:1,
		x:3,
		y:4
	}
},ghost);
orange_ghost = headOn.entity({
	x:56,
	y:72,
	direction: 1,
	current_tile:{x:1, y:0},
	next_tile: {
		direction:1,
		x:2,
		y:4
	}
},ghost);
headOn.loadImages({name:"red_ghost", src:"img/red_ghost.png"},{name:"pink_ghost", src:"img/pink_ghost.png"},{name:"orange_ghost", src:"img/orange_ghost.png"})
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
var ghosts = [red_ghost, pink_ghost];
keysDown = {};
addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	setTimeout(function(){
		delete keysDown[e.keyCode];
	}, 100)
}, false);
headOn.update = function(){
	movePacMan();
	moveRedGhost();
	movePinkGhost();
	moveOrangeGhost();
	
	checkCollisions();

}
headOn.render = function(){
	for(i=0;i<map[0].length;i++){
		for(j=0;j<map.length;j++){
			if(map[j][i]===0){
				canvas.drawRect(16,16, i*16, j*16, "black", {color:"blue", width:1});
			}
			else{
				canvas.drawRect(16,16, i*16, j*16, "blue", {color:"black", width:1});
			}
		}
	}
	for(i=0; i<dots[0].length;i++){
		for(j=0;j<dots.length;j++){
			if(dots[j][i]){
				canvas.drawRect(2, 2, i*16 + 8, j*16 + 8, "yellow");
			}
		}
	}
	var current_tile = getTile(red_ghost.x, red_ghost.y)
	canvas.drawImage( headOn.images["red_ghost"], red_ghost.x - (17/2), red_ghost.y - (17/2));
	canvas.drawImage( headOn.images["pink_ghost"], pink_ghost.x - (17/2), pink_ghost.y - (17/2));
	canvas.drawImage( headOn.images["orange_ghost"], orange_ghost.x - (17/2), orange_ghost.y - (17/2));
	console.log(red_ghost)
	canvas.drawRect(16,16, red_ghost.next_tile.x*16, red_ghost.next_tile.y*16, "red")
	canvas.drawRect(16,16, pac_man.x - (16/2), pac_man.y - (16/2), "yellow");
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
		if(inCenterOfTile(pac_man, tile) || pac_man.direction === 2){
			if(type){
				pac_man.direction = 0;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 0;
				}
			}
		}

	}
	if (40 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,2)
		type = typeOfTile(next_tile)
		if(inCenterOfTile(pac_man, tile) || pac_man.direction === 0){
			if(type){
				pac_man.direction = 2;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 2;
				}
			}
		}
	}
	if (37 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,1)
		type = typeOfTile(next_tile)
		if(inCenterOfTile(pac_man, tile) || pac_man.direction === 3){
			if(type){
				pac_man.direction = 1;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 1;
				}
			}
		}
		
	}
	if (39 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,3)
		type = typeOfTile(next_tile)
		if(inCenterOfTile(pac_man, tile)|| pac_man.direction === 1){
			if(type){
				pac_man.direction = 3;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 3;
				}
			}
		}
	}
	if(inCenterOfTile(pac_man, tile)){
		if(pac_man.next_direction){
			pac_man.direction = pac_man.next_direction;
			pac_man.next_direction = false;
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
	if(tile.x === 0 && tile.y === 17 && inCenterOfTile(pac_man, tile) && pac_man.direction === 1){
		console.log("hit!")
		pac_man.x = 27 * 16 +8;
		pac_man.y = 17 * 16 +8;
	}
	if(tile.x === 27 && tile.y === 17 && inCenterOfTile(pac_man, tile) && pac_man.direction === 3){
		pac_man.x = 0 * 16 + 8;
		pac_man.y = 17 * 16 +8;
	}
	// tile = getTile(pac_man.x, pac_man.y);
	// if(pac_man.direction === 0 || pac_man.direction === 2){
		
	// 	pac_man.x = tile.x * 16 +8
	// }
	// else{
	// 	pac_man.y = tile.y * 16 + 8
	// }
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
		0:3,
		3:0,
		1:2,
		2:1
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
		console.log(red_ghost.next_tile.direction);
		var adjTiles = adjacentTiles(tile);
		var passableTiles = [];
		red_ghost.direction = red_ghost.next_tile.direction;
		target_tile = targetTile("red");
		red_ghost.next_tile.x = tile.x;
		red_ghost.next_tile.y = tile.y;
		
		adjTiles.forEach(function(t, i){
			if(t && opposites[d[i]] !== red_ghost.next_tile.direction){
				passableTiles.push(d[i]);
			}
		})
		if(passableTiles.length > 1){
			directions = {
				0:{
					x:0,
					y: -1
				},
				2:{
					x:0,
					y:1
				},
				1:{
					x:-1,
					y:0
				},
				3:{
					x:1,
					y:0
				}
			}
			passableTiles.forEach(function(t, i){
				var distance = distanceTo({x:tile.x + directions[t].x, y:tile.y + directions[t].y}, target_tile);
				if(i === 0 || distance <= previous_distance){
					previous_distance = distance;
					red_ghost.next_tile.direction = t;
				}
			
			})
		}
		else if( passableTiles[0] !== red_ghost.next_tile.direction){
			console.log("here")
			red_ghost.next_tile.direction = passableTiles[0]
		}
		else{
			red_ghost.next_tile.direction = red_ghost.direction;
		}
	}
	
	
	red_ghost.x += velocity(21, red_ghost.direction, "x") * (headOn.fps/1000);
	red_ghost.y += velocity(21, red_ghost.direction, "y") * (headOn.fps/1000);

	tile = getTile(red_ghost.x, red_ghost.y)
	if(tile.x === 0 && tile.y === 17 && inCenterOfTile(red_ghost, tile) && red_ghost.direction === 1){
		next_tile = nextTile(27, 17, 1);
		red_ghost.next_tile.direction = 1
		red_ghost.x = 27 * 16 +8;
		red_ghost.next_tile.x = next_tile.x
	}
	else if(tile.x === 27 && tile.y === 17 && inCenterOfTile(red_ghost, tile) && red_ghost.direction === 3){
		next_tile = nextTile(0, 17, 3);
		red_ghost.next_tile.direction = 3
		red_ghost.x = 0 * 16 + 8;
		red_ghost.next_tile.x = next_tile.x;
	}
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
		0:3,
		3:0,
		1:2,
		2:1
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
		adjTiles.forEach(function(t, i){
			if(t && opposites[d[i]] !== pink_ghost.next_tile.direction){
				passableTiles.push(d[i]);
			}
		})
		if(passableTiles.length > 1){
			directions = {
				0:{
					x:0,
					y: -1
				},
				2:{
					x:0,
					y:1
				},
				1:{
					x:-1,
					y:0
				},
				3:{
					x:1,
					y:0
				}
			}
			console.log("multi")
			passableTiles.forEach(function(t, i){
				console.log(t)
				var distance = distanceTo({x:tile.x + directions[t].x, y:tile.y + directions[t].y}, target_tile);
				if(i === 0 || distance <= previous_distance){
					previous_distance = distance;
					pink_ghost.next_tile.direction = t;
				}
			
			})
		}
		else if( passableTiles[0] !== pink_ghost.next_tile.direction){
			console.log("here")
			pink_ghost.next_tile.direction = passableTiles[0]
		}
		else{
			pink_ghost.next_tile.direction = pink_ghost.direction;
		}
	}
	pink_ghost.x += velocity(18, pink_ghost.direction, "x") * (headOn.fps/1000);
	pink_ghost.y += velocity(18, pink_ghost.direction, "y") * (headOn.fps/1000);

	tile = getTile(pink_ghost.x, pink_ghost.y)
	if(tile.x === 0 && tile.y === 17 && inCenterOfTile(pink_ghost, tile) && pink_ghost.direction === 1){
		next_tile = nextTile(27, 17, pink_ghost.direction);
		pink_ghost.next_tile.direction = pink_ghost.direction;
		pink_ghost.x = 27 * 16 +8;
		pink_ghost.next_tile.x = next_tile.x
	}
	if(tile.x === 27 && tile.y === 17 && inCenterOfTile(pink_ghost, tile) && pink_ghost.direction === 3){
		next_tile = nextTile(0, 17, pink_ghost.direction);
		pink_ghost.next_tile.direction = pink_ghost.direction;
		pink_ghost.x = 0 * 16 + 8;
		pink_ghost.next_tile.x = next_tile.x;
	}
	
}
function moveOrangeGhost(){
	var current_tile = getTile(orange_ghost.x, orange_ghost.y),
	tile,
	adjTiles,
	passableTiles,
	target_tile,
	directions,
	previous_distance,
	d ={
		0:3,
		3:0,
		1:2,
		2:1
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
	if(current_tile.x === orange_ghost.next_tile.x && current_tile.y === orange_ghost.next_tile.y && inCenterOfTile(orange_ghost, orange_ghost.next_tile)){
		tile = nextTile(current_tile.x, current_tile.y, orange_ghost.next_tile.direction);
		adjTiles = adjacentTiles(tile);
		passableTiles = [];
		target_tile = targetTile("orange");
		
		orange_ghost.direction = orange_ghost.next_tile.direction;
		orange_ghost.next_tile.x = tile.x;
		orange_ghost.next_tile.y = tile.y;
		adjTiles.forEach(function(t, i){
			if(t && opposites[d[i]] !== orange_ghost.next_tile.direction){
				passableTiles.push(d[i]);
			}
		})
		console.log(passableTiles)
		if(passableTiles.length > 1){
			directions = {
				0:{
					x:0,
					y: -1
				},
				2:{
					x:0,
					y:1
				},
				1:{
					x:-1,
					y:0
				},
				3:{
					x:1,
					y:0
				}
			}
			console.log("multi")
			passableTiles.forEach(function(t, i){
				console.log(t)
				var distance = distanceTo({x:tile.x + directions[t].x, y:tile.y + directions[t].y}, target_tile);
				if(i === 0 || distance <= previous_distance){
					previous_distance = distance;
					orange_ghost.next_tile.direction = t;
				}
			
			})
		}
		else if( passableTiles[0] !== orange_ghost.next_tile.direction){
			console.log("here")
			orange_ghost.next_tile.direction = passableTiles[0]
		}
		else{
			orange_ghost.next_tile.direction = orange_ghost.direction;
		}
	}
	orange_ghost.x += velocity(21, orange_ghost.direction, "x") * (headOn.fps/1000);
	orange_ghost.y += velocity(21, orange_ghost.direction, "y") * (headOn.fps/1000);

	tile = getTile(orange_ghost.x, orange_ghost.y)
	if(tile.x === 0 && tile.y === 17 && inCenterOfTile(orange_ghost, tile) && orange_ghost.direction === 1){
		next_tile = nextTile(27, 17, orange_ghost.direction);
		orange_ghost.next_tile.direction = orange_ghost.direction;
		orange_ghost.x = 27 * 16 +8;
		orange_ghost.next_tile.x = next_tile.x
	}
	if(tile.x === 27 && tile.y === 17 && inCenterOfTile(orange_ghost, tile) && orange_ghost.direction === 3){
		next_tile = nextTile(0, 17, orange_ghost.direction);
		orange_ghost.next_tile.direction = orange_ghost.direction;
		orange_ghost.x = 0 * 16 + 8;
		orange_ghost.next_tile.x = next_tile.x;
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

function inCenterOfTile(obj,tile){
	if(obj.x >= tile.x * 16 + 7.3 && obj.x <= tile.x * 16 + 8.7){
		if(obj.y >= tile.y *16 +7.3 && obj.y <= tile.y * 16 + 8.7){
			return true;
		}
	}
}
function closeEnough(obj, tile){
	if(obj.x >= tile.x * 16 + 3 && obj.x <= tile.x * 16 + 13){
		if(obj.y >= tile.y * 16 + 3 && obj.y <= tile.y * 16 + 13){
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
function orangeTargetTile(){
	var mode = gamestate.mode;
	var pac_man_tile = getTile(pac_man.x, pac_man.y);
	var orange_ghost_tile = getTile(orange_ghost.x, orange_ghost.y);
	if(!red_ghost.frightend){
		if(mode === 0){
			if(distanceTo(pac_man_tile, orange_ghost_tile) > 8){
				return pac_man_tile;
			}
			else{
				return {x:1, y:35}
			}
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
	return [
		//right
		map[tile.y][tile.x+1],
		//down
		map[tile.y+1][tile.x],
		//left
		map[tile.y][tile.x-1],
		//up
		map[tile.y-1][tile.x]
	]
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
	return Math.sqrt(Math.pow((obj1.x-obj2.x),2) + Math.pow((obj1.y-obj2.y),2));
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
function checkCollisions(){
	ghosts.forEach(function(ghost){
		ghost_tile = getTile(ghost.x, ghost.y);
		pac_man_tile = getTile(pac_man.x, pac_man.y);
		if(ghost_tile.x === pac_man_tile.x && ghost_tile.y === pac_man_tile.y){
			console.log("collision")
		}
	})
	var tile = getTile(pac_man.x, pac_man.y);
	if(dots[tile.y][tile.x]){
		dots[tile.y][tile.x] = 0;
	}
}
