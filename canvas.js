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
    return images[name.slice(0,3)];
}

var images = {
    "amp": [
        {job: "amp.png", name: ".", x: 530, y: 360},
        {title:, text:, up: true, job: "emp.png", name: "plano", x: 200, y: 485},
        {title:, text:, up: true, job: "fmp.png", name: "circun", x: 757, y: 511},
        {title:, text:, up: true, job: "bmp.png", name: "poligonos", x: 860, y: 260},
        {title:, text:, up: true, job: "cmp.png", name: "gplana", x: 515, y: 130},
        {title:, text:, up: true, job: "dmp.png", name: "gespacial", x: 157, y: 237}
    ],
    "bmp": [
        {job: "amp.png", name: ".", x: 260, y: 560},                         // 280 x 110
        {title: "P. regulares", text: "Lados iguais e angulos iguais? Pode ser, e e o mais marcante.", up: true, job: "bmp.png", name: "regular", x: 470, y: 400},
        {title: "< Externos", text: "Some todos, em qualquer que seja seu poligono teremos 360°.", up: true, job: "bmp.png", name: "aexternos", x: 330, y: 210},
        {title: "< Internos", text: "Sao suplementares aos angulos extermos, portanto, podem ser encontrados com minimo exforço, entretanto, busque por triangulos, logo, 180(n-2) sao os angulos internos.", up: true, job: "bmp.png", name: "ainternos", x: 820, y: 260},
        {title: "P. Irregulares", text: "Sao complexos.", up: true, job: "bmp.png", name: "irregular", x: 700, y: 570},
    ],
    "cmp": [
        {job: "amp.png", name: ".", x: 50, y: 580},
        {title: "Area\n(it's english)", text: "Em poucas palavras, um termo ao quadrado.", up: true, job: "cmp.png", name: "area", x: 20, y: 200},
        {title: "Perimetro", text: "Pode ser confundido com a circunferencia, mas nao sao o mesmo?", up: true, job: "cmp.png", name: "perimetro", x: 300, y: 330},
        {title: "Figuras geometricas", text: "Possuem vertices e arestas, logo que sao a compostas do encontro de retas, que produz regioes, que chamamos de figuras.", up: true, job: "cmp.png", name: "figurag", x: 470, y: 520},
        {title: "Circunscrito", text: "Em vista de um poligono regular, sao feitas analises dentro e fora da circunferencia, pra que? Poligonos circunscritos sao aquelas os quais contem uma circunferencia dentre seu perimetro, de tal forma que nos possibilita analises como as de angulos externos e internos de poligonos regulares.", up: true, job: "cmp.png", name: "circun", x: 990, y: 580},
        {title: "Inscrito", text: "Assim como no caso circunscrito, ha um poligono e uma circunferencia, entretanto, neste caso ha um poligono dentre uma circunferencia e nao o contrario, nao se pode confundir, 6 nao e igual a nove nem de ponta cabeça. Por fim, e um conceito que extendesse assim como a sua antitese circunscrita.", up: true, job: "cmp.png", name: "inscri", x: 870, y: 360},
        {title: "Apotoma", text:, up: true, job: "cmp.png", name: "apotoma", x: 630, y: 200},
    ],
    "dmp": [
        {job: "amp.png", name: ".", x: 800, y: 530},
        {title: "(x, y, z)", text: "(Indisponivel), mas e a revolucao de figuras planas.", up: true, job: "dmp.png", name: "3d", x: 680, y: 290},
        {title: "Volume", text: "Um conceito ja muito bem conhecido, o volume. Qual e mais pesado 1kg de gelo ou de agua?", up: true, job: "dmp.png", name: "volume", x: 330, y: 460},
    ],
    "emp": [
        {job: "amp.png", name: ".", x: 890, y: 100},
        {title: "Angulos", text:"Tratamos de pontos, e retas, e já foi mencionado a respeito do coeficiente angular, portanto a o relacionamento entre esses elementos mede angulos, os quais dizem respeito a rotação de retas, sendo um componente de suma importancia para o estudo de graficos, pois mede a inclinacao.", up: true, job: "emp.png", name: "angulo", x: 480, y: 110},
        {title: "< Complementares", text: "Denominan-se de complementares, pois, dois, ou mais, angulos complementam-se para formar um angulo RETO.", up: true, job: "emp.png", name: "comp", x: 110, y: 20},
        {title: "< Suplementares", text: "Denominan-se de suplementares, pois, dois, ou mais, angulos constituem um angulo raso.", up: true, job: "emp.png", name: "sup", x: 30, y: 160},
        {title: "< Replementares", text: "Denominan-se de replementares, pois, dois, ou mais, angulos constituem um angulo, deve haver algum outro termo, mas se resume a 270°.", up: true, job: "emp.png", name: "rep", x: 230, y: 290},
        {title: "Retas", text: "A representacao de infinitos pontos sobre o plano, podendo ser um prolongamento infinito, reta, ou limitada em uma de suas extremidades, semi-reta, ou limitada por ambas as extremidades, sendo um segmento de reta.", up: true, job: "emp.png", name: "reta", x: 670, y: 330},
        {title: "Retas paralelas", text: "Retas de mesmo coeficiente angular, mas coeficientes lineares distintos, por tanto, ate hoje ainda não se encontraram.", up: true, job: "emp.png", name: "paralela", x: 340, y: 470},
        {title: "Retas perpendiculares", text: "Um conceito simples, duas retas que se cruzam e formam 90°. Vemos-as nas chamadas retas tangentes.", up: true, job: "emp.png", name: "perpen", x: 650, y: 580},
        {title: "Pontos", text: "Um ponto, insignificante. Nao e esse o ponto, os pontos sao pontos importantissimos, os quais se deve pontuar e refletir o ponto que o ponto tem, imgaina como iniciar se nao por um ponto, portanto, esses sao os pontos.", up: true, job: "emp.png", name: "ponto", x: 980, y: 470},
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
