class App {
    constructor (songFiles) {
        this.clickCounter = 0;
        this.screen = 0;
        this.songs1 = [];
        this.songs2 = [];
        this.currentSong = 0;
        songFiles.forEach((song, i) => {
            const newSong = new Archivo(song.name, song.artist, song.songFile, song.imgFile);
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
              this.songs1[this.currentSong].draw();
              //this.infoCurrentSong();
              break;
            case 3:
              image (screenLista2,0,0,1440,1024);
              this.songs2[this.currentSong].draw();  
              //this.infoCurrentSong();
              break;   
        }

      
    }
    
    press() {
        const currIndex = this.currentSong;
     const currSong = this.songs1[currIndex];
  const currSong2 = this.songs2[currIndex];
       
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
                if(this.screen === 2) this.songs1.forEach(song => song.stop());
                else this.songs2.forEach(song => song.stop());
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

            if (dist(mouseX, mouseY, 1008, 655 < 20) <= 25 && currSong) currSong.toggleSong();
         if(currSong) {
      if(mouseX > 235 && mouseX < 255 && mouseY > 275 && mouseY < 295) {
        currSong.song.stop();
        currSong.isSelected = false;
        this._currentSong = this._currentSong === this._songs.length - 1 ? 0 : this._currentSong + 1;
        this._songs[this._currentSong].song.play();
        this._songs[this._currentSong].isSelected = true;
      }
      if(mouseX > 120 && mouseX < 140 && mouseY > 275 && mouseY < 295) {
        currSong.song.stop();
        currSong.isSelected = false;
        this._currentSong = this._currentSong === 0 ? this._songs.length - 1 : this._currentSong - 1;
        this._songs[this._currentSong].song.play();
        this._songs[this._currentSong].isSelected = true;
      }
    }
        

    }


    changeSong(list) {
        list.forEach((song, i) => {
            if (song) song.stop();
            if(song.press(i)) this.currentSong = i;
            
        });
    }

}


        //     console.log('que si ome')
        // fill(0);
        // textStyle(BOLD);
        // text ('helo', 819, 739);
        // text(currSong.name,819,739)
        // text(currSong.name, 819,739);
        // textStyle(NORMAL);
        // text(currSong.artist,819,781);
        
        // if(currIndex === null) {
           
        // }else{
        //     console.log('que si ome')
        // fill(0);
        // textStyle(BOLD);
        // text ('helo', 819, 739);
        // text(currSong2.name, 819,739);
        // textStyle(NORMAL);
        // text(currSong2.artist,819,781);
        // }

          // infoCurrentSong() {
    //     const currIndex = this.currentSong;
    //   //  const currSong = this.songs1[currIndex];
    //    // const currSong2 = this.songs2[currIndex];
    //     if(currIndex === null) {
           
    //     }else{
    //         fill(51);

    //         if(this.songs1.isPlaying()) {
    //           rect(179, 275, 5, 20);
    //           rect(191, 275, 5, 20);
      
    //           fill(190, 49, 49);
    //         } else {
    //           triangle(182, 296, 182, 273, 197, 285);
    //         }
    //     }
        
    // }