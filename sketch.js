const songsData= [
  {
    name: "Cancion 1",
    file: "/songs/file.mp3",
    img: "/img/imagen.jpg"
  },
  {
    name: "Cancion 1",
    file: "/songs/file.mp3",
    img: "/img/imagen.jpg"
  },
  {
    name: "Cancion 1",
    file: "/songs/file.mp3",
    img: "/img/imagen.jpg"
  }
];
let songFiles = [];
let main;

function preload() {
  songFiles = songsData.map(data => {
    return {
      songFile: loadSound(data.file),
      imgFile: loadImage(data.img)
    }
  })
}

function setup() {
  createCanvas(400, 400);
  main = new Main(songsData, songFiles);
}

function draw() {
  background(220);
}
