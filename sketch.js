const songsData= [
  {
    name: "All Of You",
    file: "/Musica/All Of You.mp3",
    img: "/Imagenes/Encanto.jpg"
  },
  {
    name: "Dos Orugitas",
    file: "/Musica/Dos Orugitas.mp3",
    img: "/Imagenes/Encanto.jpg"
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
    name: "Let It Go",
    file: "/Musica/Let It Go.mp3",
    img: "/Imagenes/HSM.jpg"
  },
  {
    name: "Rewrite The Stars",
    file: "/Musica/Rewrite The Stars.mp3",
    img: "/Imagenes/TGSM.jpg"
  },
  {
    name: "Surface Pressure",
    file: "/Musica/Surface Pressure.mp3",
    img: "/Imagenes/Encanto.jpg"
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

function mouseClick() {
  app.click();
}

function mousePress() {
  app.press();
}