class World {
    constructor() {
        this.columns = 40;
        this.rows = 22;
        this.tileSize = 70;
        this.mapHeight = this.rows * this.tileSize;
        this.mapWidth = this.columns * this.tileSize;
        this.map1 = "";
        this.map1 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map1 += "g..ggggggggggggggggggggggggggggggggggggg";
        this.map1 += "g.................g....................g";
        this.map1 += "g.................g....................g";
        this.map1 += "gggg..............g....................g";
        this.map1 += "g......c..................ccccc........g";
        this.map1 += "g......................................g";
        this.map1 += "ggggggggggg...H...2....gggggggggggg....g";
        this.map1 += "g.........g.......2...g.g..............g";
        this.map1 += "g.........ggggggggg.....ggggggg........g";
        this.map1 += "g.................g....................g";
        this.map1 += "g.................gg...................g";
        this.map1 += "g.................gggggggggggggg.......g";
        this.map1 += "g...............................g......g";
        this.map1 += "g................................g.....g";
        this.map1 += "g.................................g....g";
        this.map1 += "g..................................g...g";
        this.map1 += "g...cccccccccccccccc................gg.g";
        this.map1 += "g...cccccccccccccccc..................gg";
        this.map1 += "g...cccccccccccccccc..................1g";
        this.map1 += "g.......................H.............1g";
        this.map1 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map2 = "";
        this.map2 += "........................................";
        this.map2 += "........................................";
        this.map2 += "........................................";
        this.map2 += "........................................";
        this.map2 += ".......ccccc............................";
        this.map2 += ".......ccccc..............ccccc.........";
        this.map2 += "........................................";
        this.map2 += "ggggggggggg..........gg.ggggggggggg.....";
        this.map2 += "..........g...........g.g...............";
        this.map2 += "..........ggg..gggg.....ggggggg.........";
        this.map2 += "...............g..g.....................";
        this.map2 += "...............g..gg....................";
        this.map2 += "..........gggggg..gggggggggggggg........";
        this.map2 += "........................................";
        this.map2 += "........................................";
        this.map2 += "g...gggg...............................g";
        this.map2 += "g......................................g";
        this.map2 += "g...cccccccccccccccc...................g";
        this.map2 += "g...cccccccccccccccc...gggggggg........g";
        this.map2 += "g2..cccccccccccccccc..gcgggggggg.......g";
        this.map2 += "g2...................ggcggggggggg......g";
        this.map2 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map3 = "";
        this.map3 += "gggggggggggggggggggggggggggggggggggggggg";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g2.....................................g";
        this.map3 += "g2.....................................g";
        this.map3 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map4 = "";
        this.map4 += "gggggggggggggggggggggggggggggggggggggggg";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g2.....................................g";
        this.map4 += "g2.....................................g";
        this.map4 += "gggggggggggggggggggggggggggggggggggggggg";
    }

    getTile(map, playerX, playerY){
        return this[map][Math.floor(playerY / this.tileSize) * this.columns + Math.floor(playerX / this.tileSize)];
    }

    setTile(map, playerX, playerY, newTile){
        let index = Math.floor(playerY / this.tileSize) * this.columns + Math.floor(playerX / this.tileSize);
        this[map] = this[map].substr(0, index) + newTile + this[map].substr(index + 1);
    }


}