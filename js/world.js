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
        this.map1 += "g......T....gggHHHggg..........c.......g";
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
        this.map3 += "g.................g....................g";
        this.map3 += "g.................g....................g";
        this.map3 += "g.................g....................g";
        this.map3 += "g......c...............................g";
        this.map3 += "g.............H...........cccc.........g";
        this.map3 += "g.............H........gggggggggggg....g";
        this.map3 += "ggggg.........H........................g";
        this.map3 += "g.........ggggggggg....................g";
        this.map3 += "g.................g....................g";
        this.map3 += "g.................gg...................g";
        this.map3 += "g.................gggggggggggggg.......g";
        this.map3 += "g......................................g";
        this.map3 += "g......................................g";
        this.map3 += "g.................................gg...g";
        this.map3 += "g......................................g";
        this.map3 += "g..gggggg......T.......................g";
        this.map3 += "g.............gggg.....................g";
        this.map3 += "g......................................g";
        this.map3 += "g.........c.............H..............g";
        this.map3 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map4 = "";
        this.map4 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map4 += "gggggggggggggggggggggggggggggggggggggggg";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g..........................c...........g";
        this.map4 += "ggggggggggg............gggggggggggg....g";
        this.map4 += "g.........g............................g";
        this.map4 += "g.........ggg..gggg....................g";
        this.map4 += "g..............g..g....................g";
        this.map4 += "g..............g..gg...................g";
        this.map4 += "g.........gggggg..gggggggggggggg.......g";
        this.map4 += "g......................................g";
        this.map4 += "g......................................g";
        this.map4 += "g...gggg...............................g";
        this.map4 += "g......................................g";
        this.map4 += "g..........................T...........g";
        this.map4 += "g......................gggHHggg........g";
        this.map4 += "g.....................gggggggggg.......g";
        this.map4 += "g........c...........gggggggggggg......g";
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