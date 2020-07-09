class Controller {
    constructor() {
        this.left = false;
        this.right = false;
        this.up = false;
    }
    keyDown(event) {
        switch (event.keyCode) {
            case 37:
                this.left = true;
                break;
            case 38:
                this.up = true;
                break;
            case 39:
                this.right = true;
                break;
        }
    }
    keyUp(event) {
        switch (event.keyCode) {
            case 37:
                this.left = false;
                break;
            case 38:
                this.up = false;
                break;
            case 39:
                this.right = false;
                break;
        }
    }

}