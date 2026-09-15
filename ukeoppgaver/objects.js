const circle = {
    radius: 1,
    isVisible : true, 
    location: {
        x:1,
        y:1
    }
}

let radius = circle.radius;

let book = { 
    "author": {
        firstname: "David",
        surname: "Attenborough",
    }
};

let author = book.author;
let lastmame = book.author.surname;

console.log("bok " + author + " " + lastname); //


//Factory function Camel notation
function createCircle(radius, location){
    return {
        radius: radius,
        location: location,
        isVisible: true,
    };
}

const myCircle = createCircle(1, 2);

// Constructor functions: Pascal notation

function Sirkel(radius){
    this.radius = radius;
    this.location = 3;
}

const minSirkel = new Sirkel(3);
const empty = {};

