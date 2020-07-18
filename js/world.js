class World {
    constructor() {
        this.columns = 40;
        this.rows = 22;
        this.tileSize = 70;
        this.mapHeight = this.rows * this.tileSize;
        this.mapWidth = this.columns * this.tileSize;

        this.map1 = "";
        this.map1 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map1 += "gggggggggggggggggggggggggggggggggggggggg";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g......T......gggHHHggg........c.......g";
        this.map1 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map2 = "";
        this.map2 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map2 += "gggggggggggggggggggggggggggggggggggggggg";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g.............gggg.....................g";
        this.map2 += "g.........................T............g";
        this.map2 += "g........ggg............gggggg.........g";
        this.map2 += "g......................................g";
        this.map2 += "g....ggHHHHHHHHHHHHHHHHHHHHHHHHHHHgg...g";
        this.map2 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map3 = "";
        this.map3 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map3 += "gggggggggggggggggggggggggggggggggggggggg";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g...............gggggggg...............g";
        this.map3 += "g......................................g";
        this.map3 += "g............gg........................g";
        this.map3 += "g.......ggg................gggg........g";
        this.map3 += "g.....gg...............................g";
        this.map3 += "g......................................g";
        this.map3 += "g............gggg......................g";
        this.map3 += "ggggg..................................g";
        this.map3 += "g...................................T..g";
        this.map3 += "g....ggggggg.......................ggggg";
        this.map3 += "g.........gggggggg.....................g";
        this.map3 += "g......................ggggg...........g";
        this.map3 += "g.....................gg...............g";
        this.map3 += "g....................gg................g";
        this.map3 += "g...........gggggggggggHHHHHHHHHHggg...g";
        this.map3 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map4 = "";
        this.map4 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map4 += "gggggggggggggggggggggggggggggggggggggggg";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g.........T............................g";
        this.map4 += "g......gggg............................g";
        this.map4 += "g.....gg...............................g";
        this.map4 += "gc...........gg........................g";
        this.map4 += "gg.....................................g";
        this.map4 += "g......................................g";
        this.map4 += "g..ggg.................................g";
        this.map4 += "g.......gg..ggHHgg.....................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g.....................gg...............g";
        this.map4 += "g...................gg.................g";
        this.map4 += "g..............ggggg...................g";
        this.map4 += "g.........gg.....g.....................g";
        this.map4 += "g................g.....................g";
        this.map4 += "g.....gggHHHHHHHgggHHHHHHgggHHHHggg....g";
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