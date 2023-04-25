let input, partes, r

function setup() {
    createCanvas(windowWidth, windowHeight);

    let span = createElement("h1", "¿Cuantas partes, quieres partir las pizzas?")
    span.position((width / 2) - (100 / 2) - 300 , 100)
    input = createInput()
    input.position((width / 2) - (100 / 2) - input.width / 2, 180)
    input.changed(num)

}

function draw() {

    background(255)
    r = 100

    let p1 = new Circulo(((width / 2) - (100 / 2)) - r*2 - 20, (height / 2) - (100 / 2), r)
    let p2 = new Circulo((width / 2) - (100 / 2), (height / 2) - (100 / 2), 100)
    let p3 = new Circulo(((width / 2) - (100 / 2)) + r*2 + 20, (height / 2) - (100 / 2), r)

    p1.puntoMedioCirculo()
    p2.puntoMedioCirculo()
    p3.puntoMedioCirculo()

    p1.partirPuntoPendiente(num())
    p2.partirDDA(num())
    p3.partirBresenham(num())
    
}

function num() {

    partes = input.value()

    if (partes <= 1) {
        return
    }
    
    return partes 

}