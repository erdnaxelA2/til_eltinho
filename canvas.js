//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rects) {
    for(rect of rects) {
        if (pos.x > rect.x && pos.x < rect.x+280 && pos.y < rect.y+110 && pos.y > rect.y) {
            return rect;
        }
    }
    return null;
}

function load_img(canvas, ctx, images, first, name) {
    var img = new Image();
    img.src = name;
    var imgX=(canvas.width/2)-(img.width/2);
    var imgY=(canvas.height/2)-(img.height/2);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, imgX, imgY);

    return images[name.slice(0,3)]
}

var images = {
    "amp": [
        {job: "amp.png", name: ".", x: 530, y: 360},
        {job: "emp.png", name: "plano", x: 200, y: 485},
        {job: "fmp.png", name: "circun", x: 757, y: 511},
        {job: "bmp.png", name: "poligonos", x: 860, y: 260},
        {job: "cmp.png", name: "gplana", x: 515, y: 130},
        {job: "dmp.png", name: "gespacial", x: 157, y: 237}
    ],
    "bmp": [
        {job: "amp.png", name: ".", x: 260, y: 560},                         // 280 x 110
        {job: ".png", name: "regular", x: 470, y: 400},
        {job: ".png", name: "aexternos", x: 330, y: 210},
        {job: ".png", name: "ainternos", x: 820, y: 260},
        {job: ".png", name: "irregular", x: 700, y: 570},
    ],
    "cmp": [
        {job: "amp.png", name: ".", x: 50, y: 580},
        {job: ".png", name: "area", x: 20, y: 200},
        {job: ".png", name: "perimetro", x: 300, y: 330},
        {job: ".png", name: "figurag", x: 470, y: 520},
        {job: ".png", name: "circun", x: 990, y: 580},
        {job: ".png", name: "inscri", x: 870, y: 360},
        {job: ".png", name: "apotoma", x: 630, y: 200},
    ],
    "dmp": [
        {job: "amp.png", name: ".", x: 800, y: 530},
        {job: ".png", name: "3d", x: 680, y: 290},
        {job: ".png", name: "volume", x: 330, y: 460},
    ],
    "emp": [
        {job: "amp.png", name: ".", x: 890, y: 100},
        {title: "Angulos", text:"", up: true, job: ".png", name: "angulo", x: 480, y: 110},
        {title: "< Complementares", text: "Denominan-se de complementares, pois, dois, ou mais, angulos complementam-se para formar um angulo RETO.", up: true, job: ".png", name: "comp", x: 110, y: 20},
        {title: "< Suplementares", text: "Denominan-se de suplementares, pois, dois, ou mais, angulos constituem um angulo raso.", up: true, job: ".png", name: "sup", x: 30, y: 160},
        {title: "< Replementares", text: "Denominan-se de replementares, pois, dois, ou mais, angulos constituem um angulo, deve haver algum outro termo, mas se resume a 270°.", up: true, job: ".png", name: "rep", x: 230, y: 290},
        {title: "Retas", text: "A representacao de infinitos pontos sobre o plano, podendo ser um prolongamento infinito, reta, ou limitada em uma de suas extremidades, semi-reta, ou limitada por ambas as extremidades, sendo um segmento de reta.", up: true, job: ".png", name: "reta", x: 670, y: 330},
        {title: "Retas paralelas", text: "Retas de mesmo coeficiente angulas, mas coeficientes lineares distintos, por tanto, ate hoje ainda não se encontraram.", up: true, job: ".png", name: "paralela", x: 340, y: 470},
        {title: "Retas perpendiculares", text: "", up: true, job: ".png", name: "perpen", x: 650, y: 580},
        {title: "Pontos", text: "", up: true, job: ".png", name: "ponto", x: 980, y: 470},
    ],
    "fmp": [
        {title: "Circunferencia", text: "De forma simples, como nao ha nenhuma outra forma, conforme discutimos, a circunferencia pode ser vista como em um anel, logo que representa um contorno, entretanto nao e um circulo.", up: true, job: "amp.png", name: ".", x: 90, y: 130},
    ]
}

document.addEventListener("DOMContentLoaded", (ev) => {
    var canvas = document.getElementById("display");
    var ctx = canvas.getContext("2d");

    var rects = load_img(canvas, ctx, images, true, "amp.png");

    //Binding the click event on the canvas
    canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var tmp = isInside(mousePos, rects);
        if (tmp != null) {
            if (tmp["up"]) {
                localStorage.setItem("title", tmp["title"]);
                localStorage.setItem("text", tmp["text"]);
                window.location.href = "./content.html"
            }
            rects = load_img(canvas, ctx, images, false, tmp["job"]);
        }
    }, false);
});
