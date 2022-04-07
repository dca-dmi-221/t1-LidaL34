const WIDTH =  1440;
const HEIGHT = 1025;

const songsData= [
  {
    name: "Gotta Go My Own Way",
    artist: "High School Musical",
    file: "/Musica/Gotta Go My Own Way.mp3",
    img: "/Imagenes/HSM.png"
  },
  {
    name: "How Far Ill Go",
    artist: "High School Moana",
    file: "/Musica/How Far Ill Go.mp3",
    img: "/Imagenes/Moana.png"
  },
  {
    name: "Rewrite The Stars",
    artist: "The Greatest Showman",
    file: "/Musica/Rewrite The Stars.mp3",
    img: "/Imagenes/TGSM.png"
  },
  {
    name: "When Will My Life Begin",
    artist: "Tangle",
    file: "/Musica/When Will My Life Begin.mp3",
    img: "/Imagenes/Tangle.png"
  },
  {
    name: "The Family Madrigal",
    artist: "Encanto",
    file: "/Musica/The Family Madrigal.mp3",
    img: "/Imagenes/Encanto.png"
  },
  {
    name: "Waiting On A Miracle",
    artist: "Encanto",
    file: "/Musica/Waiting On A Miracle.mp3",
    img: "/Imagenes/Encanto_2.png"
  },
  {
    name: "What Else Can I Do",
    artist: "Encanto",
    file: "/Musica/What Else Can I Do.mp3",
    img: "/Imagenes/Encanto_3.png"
  },
  {
    name: "We Dont Talk About Bruno",
    artist: "Encanto",
    file: "/Musica/We Dont Talk About Bruno.mp3",
    img: "/Imagenes/Encanto_4.png"
  },
];
let songFiles = [];
let app;
let main;
let screenInicio;
let screenPlaylist;
let screenLista;
let screenLista2;
let clickCounter = 0;


function preload() {

  screenInicio = loadImage ("Imagenes/Inicio.png");
  screenPlaylist = loadImage ("Imagenes/Playlist.png");
  screenLista = loadImage ("Imagenes/Lista.png");
  screenLista2 = loadImage ("Imagenes/Lista_2.png");

  songFiles = songsData.map(data => {
    return {
      name: data.name,
      artist: data.artist,
      songFile: loadSound(data.file),
      imgFile: loadImage(data.img)
    }
  })
}

function setup() {
  screen = 0;
  createCanvas(WIDTH, HEIGHT);
  app = new App(songFiles);

  //main = new Main(songsData, songFiles);
}

function draw() {
  background(220);
  app.draw();
  text("x:" + mouseX + " y: " + mouseY, mouseX, mouseY);
}


function mousePressed() {
  app.press();
}
