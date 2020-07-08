class World {
    constructor() {
        this.columns = 10;
        this.rows = 6;
        this.tileSize = 40;
        this.mapHeight = this.rows * this.tileSize;
        this.mapWidth = this.columns * this.tileSize;
        this.map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    }


}