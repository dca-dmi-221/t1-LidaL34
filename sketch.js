const songsData= [
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
    name: "We Dont Talk About Bruno",
    file: "/Musica/We Dont Talk About Bruno.mp3",
    img: "/Imagenes/Encanto.jpg"
  },
  {
    name: "What Else Can I Do",
    file: "/Musica/What Else Can I Do.mp3",
    img: "/Imagenes/Encanto.jpg"
  },
  {
    name: "When Will My Life Begin",
    file: "/Musica/When Will My Life Begin.mp3",
    img: "/Imagenes/Tangle.jpg"
  }
];
let songFiles = [];
let main;
let screenInicio;
let screenPlaylist;
let screenLista;
let screenLista2;


function preload() {

  screenInicio = loadImage ("Imaganes/Inicio.png");
  screenPlaylist = loadImage ("Imaganes/Playlist.png");
  screenLista = loadImage ("Imaganes/Lista.png");
  screenLista2 = loadImage ("Imaganes/Lista_2.png");

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

  switch (screen) {

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

function mouseClick() {
  app.click();
}

function mousePress() {
  app.press();
}