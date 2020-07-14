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
        this.map1 += "g.................g....................g";
        this.map1 += "g......c...............................g";
        this.map1 += "g.............H...........cccc.........g";
        this.map1 += "g.............H...2....gggggggggggg....g";
        this.map1 += "ggggg.........H...2....................g";
        this.map1 += "g.........ggggggggg....................g";
        this.map1 += "g.................g....................g";
        this.map1 += "g.................gg...................g";
        this.map1 += "g.................gggggggggggggg.......g";
        this.map1 += "g......................................g";
        this.map1 += "g......................................g";
        this.map1 += "g.................................gg...g";
        this.map1 += "g......................................g";
        this.map1 += "g..gggggg..............................g";
        this.map1 += "g.............gggg.....................g";
        this.map1 += "g.....................................1g";
        this.map1 += "g.........c.............H.............1g";
        this.map1 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map2 = "";
        this.map2 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......ccccc...........................g";
        this.map2 += "g......ccccc...........................g";
        this.map2 += "g..........................cc..........g";
        this.map2 += "ggggggggggg............gggggggggggg....g";
        this.map2 += "g.........g............................g";
        this.map2 += "g.........ggg..gggg....................g";
        this.map2 += "g..............g..g....................g";
        this.map2 += "g..............g..gg...................g";
        this.map2 += "g.........gggggg..gggggggggggggg.......g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g...gggg...............................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................................g";
        this.map2 += "g......................gggggggg........g";
        this.map2 += "g2....................gcgggggggg.......g";
        this.map2 += "g2....cc.c...........ggcggggggggg......g";
        this.map2 += "gggggggggggggggggggggggggggggggggggggggg";

        this.map3 = "";
        this.map3 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map3 += "g..ggggggggggggggggggggggggggggggggggggg";
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
        this.map4 += "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        this.map4 += "g..ggggggggggggggggggggggggggggggggggggg";
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