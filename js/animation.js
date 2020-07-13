class Animation{
    constructor(sprite, delay){
        this.count = 0;
        this.delay = delay;
        this.frame = 0;
        this.frameIndex = 0;
        this.sprite = sprite
        this.frameSet = sprite.value;        
        this.frame = this.frameSet[this.frameIndex];
    }

    changeFrameSet(sprite, delay){
        if (sprite != this.sprite){
            this.count = 0;
            this.delay = delay;
            this.frameIndex = 0;
            this.sprite = sprite
            this.frameSet = sprite.value;        
            this.frame = this.frameSet[this.frameIndex];
            // console.log('frame change');
        }
    }

    update(){
        this.count++;

        if(this.count >= this.delay){
            this.count = 0;
            this.frameIndex = (this.frameIndex === this.frameSet.length - 1) ? 0 : this.frameIndex +1;
            this.frame = this.frameSet[this.frameIndex];
        }
    }
}