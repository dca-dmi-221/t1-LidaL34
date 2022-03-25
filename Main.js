class Main {
    constructor(songsData, songsFiles) {
        this._songs = [];

        songsData.forEach((data, index) => {
            const files = songsFiles[index];
            this._songs.push(new Archivo(data.name, files.songFile, files.imgFile));
        })
    }
}