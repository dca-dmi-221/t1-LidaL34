class Archivo  {
    constructor(name, artist, song, img) {
        this._name = name;
        this._artist = artist;
        this._song = song;
        this._img = img;
        this._isSelected = false;
    }

    press(i) {
        const offY = 150 * i;
        return (mouseX > 50 && mouseX < 770 && mouseY > 310 + offY && mouseY < 440 + offY)
    }

    play(){
      this._song.play();
    }

    stop() {
        this._song.stop();
    }

    toggleSong() {
        if(this._song.isPlaying()) this._song.pause();
        else this._song.play();
      }

    draw() {
        image(this._img, 819, 302);

    }

    get song(){
      return this._song;
    }

  get isSelected() {
    return this._isSelected;
  }
  set isSelected(val) {
    this._isSelected = val;
  } 
}