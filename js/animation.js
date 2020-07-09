class Animation{
    constructor(frameSet, delay){
        this.count = 0;
        this.delay = delay;
        this.frame = 0;
        this.frameIndex = 0;
        this.frameSet = frameSet;
    }

    changeFrameSet(frameSet, delay, frameIndex){
        if (frameSet != this.frameSet){
            this.count = 0;
            this.delay = delay;
            this.frameIndex = 0;
            this.frameSet = frameSet;
            this.frame = this.frameSet[this.frameIndex];
        }
    }

    update(){
        this.count++;

        if(this.count >= this.delay){
            this.count = 0;
            this.frameIndex = (this.frameIndex === this.frameSet.length - 1) ? 0 : this.frameIndex +1;
        }
    }
}