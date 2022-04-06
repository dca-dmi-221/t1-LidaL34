const WIDTH =  1440;
const HEIGHT = 1025;

const songsData= [
  {
    name: "When Will My Life Begin",
    file: "/Musica/When Will My Life Begin.mp3",
    img: "/Imagenes/Tangle.jpg"
  },
  {
    name: "Gotta Go My Own Way",
    file: "/Musica/Gotta Go My Own Way.mp3",
    img: "/Imagenes/HSM.jpg"
  },
  {
    name: "How Far Ill Go",
    file: "/Musica/How Far Ill Go.mp3",
    img: "/Imagenes/Moana.jpg"
  },
  {
    name: "Rewrite The Stars",
    file: "/Musica/Rewrite The Stars.mp3",
    img: "/Imagenes/TGSM.jpg"
  },
  {
    name: "The Family Madrigal",
    file: "/Musica/The Family Madrigal.mp3",
    img: "/Imagenes/Encanto.jpg"
  },
  {
    name: "Waiting On A Miracle",
    file: "/Musica/Waiting On A Miracle.mp3",
    img: "/Imagenes/Encanto.jpg"
  },
  {
    name: "What Else Can I Do",
    file: "/Musica/What Else Can I Do.mp3",
    img: "/Imagenes/Encanto.jpg"
  },
  {
    name: "We Dont Talk About Bruno",
    file: "/Musica/We Dont Talk About Bruno.mp3",
    img: "/Imagenes/Encanto.jpg"
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
