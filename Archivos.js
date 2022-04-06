class Archivo  {
    constructor(name, song, img) {
        this._name = name;
        this._song = song;
        this._img = img;
    }

    press(i) {
        const offY = 150 * i;
        if(mouseX > 50 && mouseX < 770 && mouseY > 310 + offY && mouseY < 440 + offY) {
            this._song.play();
        }
    }

    stop() {
        this._song.stop();
    }
}