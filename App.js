class App {
    constructor (songFiles) {
        this.clickCounter = 0;
        this.screen = 0;
        this.songs1 = [];
        this.songs2 = [];
        this.currentSong = 0;
        songFiles.forEach((song, i) => {
            const newSong = new Archivo(song.name, song.songFile, song.imgFile);
            if(i >= 4) this.songs1.push(newSong);
            else this.songs2.push(newSong);
        })
    }

    draw() {
        switch (this.screen) {
            case 0:
              image (screenInicio,0,0,1440,1024)
              break;
            case 1:
              image (screenPlaylist,0,0,1440,1024)
              break;
            case 2:
              image (screenLista,0,0,1440,1024)
              break;
            case 3:
              image (screenLista2,0,0,1440,1024)
              break;   
        }
    }

    press() {
        if (this.clickCounter <= frameCount && this.screen === 0) {
            if (mouseX > 112 && mouseX < 486 && mouseY > 654 && mouseY < 744) {
                this.screen = 1;
                this.clickCounter = frameCount + 10;
            }
        }
        if (this.clickCounter <= frameCount && this.screen === 1) {
            if (mouseX > 157 && mouseX < 490 && mouseY > 288 && mouseY < 725) {
                this.screen = 2;
                this.clickCounter = frameCount + 10;
            } else if (mouseX > 552 && mouseX < 884 && mouseY > 288 && mouseY < 725) {
                this.screen = 3;
                this.clickCounter = frameCount + 10;
            }
        } else {
            if (dist(mouseX, mouseY, 30, 26) < 20) {
                if(this.screen === 2) this.songs1[this.currentSong].stop();
                else this.songs2[this.currentSong].stop();
                this.currentSong = 0;
                this.screen = 1;
            }
            if(this.clickCounter <= frameCount) {
                if(this.screen === 2) {
                    this.changeSong(this.songs1);
                } else {
                    this.changeSong(this.songs2);
                }
            }
        }  
    }

    changeSong(list) {
        list[this.currentSong].stop();
        list.forEach((song, i) => {
            song.press(i);
            this.currentSong = i;
        });
    }
}