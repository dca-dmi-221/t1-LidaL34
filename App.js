class App {
    constructor(songFiles) {
        this.clickCounter = 0;
        this.screen =0;
        this.songs1 = [];
        this.songs2 = [];
        this.currentSong = 0;
        songFiles.forEach((song, i) => {
            const newSong = new Archivo(song.name, song.artist, song.songFile, song.imgFile);
            if (i >= 4) this.songs1.push(newSong);
            else this.songs2.push(newSong);
        })
    }

    draw() {
        switch (this.screen) {
            case 0:
                image(screenInicio, 0, 0, 1440, 1024)
                break;
            case 1:
                image(screenPlaylist, 0, 0, 1440, 1024)
                break;
            case 2:
                image(screenLista, 0, 0, 1440, 1024)
                this.songs1[this.currentSong].draw();
              
                break;
            case 3:
                image(screenLista2, 0, 0, 1440, 1024);
                this.songs2[this.currentSong].draw();
                break;
        }




    }

    press() {

// En esta parte Intente crear la funcion de los botones de pausa y play

        // const currIndex = this.currentSong;
        // const currSong = this.songs1[currIndex];
        // const currSong2 = this.songs2[currIndex];

        // // Para cambiar entre el play y el stop
        // if (dist(mouseX, mouseY, 1097, 650) < 40) {
        //    this.infoCurrentSong();

        // }
        // if (this.clickCounter <= frameCount && this.screen === 3) {
        // if (mouseX < 1097-40 && mouseX> 1097+40){
        //     if(mouseY < 650-40 && mouseY> 650+40){
        //         this.infoCurrentSong();
        //     }
        // }} else

        if (this.clickCounter <= frameCount && this.screen === 0) {
            if (mouseX > 112 && mouseX < 486 && mouseY > 654 && mouseY < 744) {
                this.screen = 1;
                this.clickCounter = frameCount + 10;
            }
        } else
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
                if (this.screen === 2) 
                this.songs1.forEach(song => song.stop());
                else this.songs2.forEach(song => song.stop());
                this.currentSong = 0;
                this.screen = 1;
            } else
            if (this.clickCounter <= frameCount) {
                if (this.screen === 2) {
                    this.changeSong(this.songs1);
                } else {
                    this.changeSong(this.songs2);
                }
            }
        } 

    }


    changeSong(list) {
        list.forEach((song, i) => {
            if (song) song.stop();
            if (song.press(i)) {this.currentSong = i;
                song.play()
            }

        });
    }

}

// Intente crear los botones para hacer el pause y play

// infoCurrentSong() {

    //     const currIndex = this.currentSong;
    //     const currSong = this.songs1[currIndex];
    //     const currSong2 = this.songs2[currIndex];

    //     console.log("infocurrentsong")
    //     if (currIndex === null) {

    //     } else {
    //         fill(51);
    //         if (this.screen === 3) {
    //             if (currSong.isPlaying()) {

    //                 rect(1086, 637, 5, 20);
    //                 rect(1115, 637, 5, 20);
    //                 fill(190, 49, 49);
    //             }
    //         } else {
    //             triangle(1090, 637, 1090, 670, 1116, 652);
    //         }
    //     }

    // }
