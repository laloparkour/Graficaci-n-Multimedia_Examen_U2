class Circulo {
    
    constructor(x1, y1, radio) {
        this.x1 = x1
        this.y1 = y1
        this.radio = radio
    }

    puntoMedioCirculo() {
    
        let x = r;
        let y = 0;
        let err = 0;
    
        while (x >= y) {
            point(this.x1 + x, this.y1 + y);
            point(this.x1 + y, this.y1 + x);
            point(this.x1 - y, this.y1 + x);
            point(this.x1 - x, this.y1 + y);
            point(this.x1 - x, this.y1 - y);
            point(this.x1 - y, this.y1 - x);
            point(this.x1 + y, this.y1 - x);
            point(this.x1 + x, this.y1 - y);
    
            if (err <= 0) {
                y += 1;
                err += 2 * y + 1;
            }
    
            if (err > 0) {
                x -= 1;
                err -= 2 * x + 1;
            }
        }
    
    }

    partirPuntoPendiente(partes) {
        const angulo = (2 * Math.PI) / partes;
        let x2, y2;
    
        for (let i = 0; i < partes; i++) {
            x2 = this.x1 + this.radio * Math.cos(angulo * i);
            y2 = this.y1 + this.radio * Math.sin(angulo * i);
            this.puntoPendiente(this.x1, this.y1, x2, y2);
        }
    }

    partirDDA(partes) {
        const angulo = (2 * Math.PI) / partes;
        let x2, y2;
    
        for (let i = 0; i < partes; i++) {
            x2 = this.x1 + this.radio * Math.cos(angulo * i);
            y2 = this.y1 + this.radio * Math.sin(angulo * i);
            this.DDA(this.x1, this.y1, x2, y2);
        }
    }

    partirBresenham(partes) {
        const angulo = (2 * Math.PI) / partes;
        let x2, y2;
    
        for (let i = 0; i < partes; i++) {
            x2 = this.x1 + this.radio * Math.cos(angulo * i);
            y2 = this.y1 + this.radio * Math.sin(angulo * i);
            this.Bresenham(this.x1, this.y1, x2, y2);
        }
    }

    puntoPendiente(x1, y1, x2, y2) {
      
        if (x1 === x2) {
            
            let yInicio = y1 < y2 ? y1 : y2
            let yFin = y1 > y2 ? y1 : y2
            
            for (let y = yInicio; y <= yFin; y++) {
                point(x1, y)
            }

        } else {

            let m = (y2 - y1) / (x2 - x1)
            let b = y1 - m * x1
            let xInicio = x1 < x2 ? x1 : x2
            let xFin = x1 > x2 ? x1 : x2

            for (let x = xInicio; x <= xFin; x++) {
                let y = m * x + b;
                point(x, y);
            }

        }
    }

    DDA(x1, y1, x2, y2) {
        let intervalos, xIncremento, yIncremento
    
        let dx = x2 - x1;
        let dy = y2 - y1;
    
        if (Math.abs(dx) > Math.abs(dy)) {
            intervalos = Math.abs(dx)
        } else {
            intervalos = Math.abs(dy)
        }
    
        xIncremento = dx/intervalos
        yIncremento = dy/intervalos
    
        for (let i = 0; i <= intervalos; i++) {
            point(Math.round(x1), Math.round(y1)); 
            
            x1 += xIncremento
            y1 += yIncremento
        }
    
    }

    Bresenham(x1, y1, x2, y2) {
    
        let error, dx, dy, a, s1, s2, cambio, i, x, y
    
        x = x1
        y = y1
        dx = Math.abs(x2 - x1)
        dy = Math.abs(y2 - y1)
        s1 = Math.sign(x2 - x1)
        s2 = Math.sign(y2 - y1)

        if(dy > dx) {
            a = dx
            dx = dy
            dy = a
            cambio = 1
        } else {
            cambio = 0
        }

        error = (12 * dy) - dx

        for(i = 1; i <= dx; i++) {

            point(x, y)

            if(error >= 0) {
                if (cambio == 1) {
                    x = x + s1
                } else {
                    y = y + s2
                }
                error = error - (2 * dx)
            }

            if (cambio == 1) {
                y = y + s2
            } else {
                x = x + s1
            }
            error = error + 2 * dy;
       }
       
    }
    
}
