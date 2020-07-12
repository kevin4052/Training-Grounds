class Controller {
    constructor() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.shoot = false;
    }
    keyDown(event) {
        switch (event.keyCode) {
            case 37:
            case 65:
                this.left = true;
                break;
            case 38:
            case 87:
                this.up = true;
                break;
            case 39:
            case 68:
                this.right = true;
                break;
            case 16:
                this.shoot = true;
                break;
                case 40:
            case 83:
                this.down = true;
                break;
        }
    }
    keyUp(event) {
        switch (event.keyCode) {
            case 37:
            case 65:
                this.left = false;
                break;
            case 38:
            case 87:
                this.up = false;
                break;
            case 39:
            case 68:
                this.right = false;
                break;
            case 40:
            case 83:
                this.down = false;
                break;
            case 16:
                this.shoot = false;
                break;
        }
    }

    keyPress(event){
        switch (event.keyCode) {
            case 40:
            case 83:
                this.down = true;
                break;
        }
    }

}