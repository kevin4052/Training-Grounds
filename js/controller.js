class Controller {
    constructor(event) {

        this.left = false;
        this.right = false;
        this.up = false;
        this.event = (event) => {
            let keyState = event.type === "keydown";

            switch (event.Keycode) {
                case 37:
                    this.left = keyState;
                    break;
                case 38:
                    this.up = keyState;
                    break;
                case 39:
                    this.right = keyState;
                    break;
            }
        };
    }

    loop() {
        
    }

}