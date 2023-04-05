let autosImportados = [
    {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 1500000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 10000,
        km: 0,
        color: "Blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: false
    }
];

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

let concesionaria = {
    autos: autosImportados,

    buscarAuto: function (patente) {
        let encontrado = this.autos.find(function (el) {
            return el.patente === patente
        })
        if(!encontrado){
            return null
        } else {
            return encontrado
        }
    },

    venderAuto: function(patente){
        let encontrado = this.buscarAuto(patente);
        if (encontrado != null){
            encontrado.vendido = true
            return encontrado
        } else{
            return 'No encontrado'
        }
    },

    autosParaLaVenta: function(){
        return this.autos.filter(function(el){
            return el.vendido === false
        })
    },

    autosNuevos: function(){
        let nuevos = this.autosParaLaVenta();
        return nuevos.filter(function(el){
            return el.km < 100;
        })
    },

    listaDeVentas: function(){
        let aux = this.autos.filter(function(el){
            return el.vendido === true
        })
        return aux.map(function(el){
            return el.precio
        })
    },

    totalDeVentas: function(){
        let arrayVentas = this.listaDeVentas();
        return arrayVentas.reduce(function(suma, el){
            return suma + el
        }, 0)
    },

    puedeComprar: function(auto, persona){
        if ((persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas)) && (persona.capacidadDePagoTotal > auto.precio)){
            return true
        } else {
            return false
        }
    },

    autosQuePuedeComprar: function(persona){
        let autosVenta = this.autosParaLaVenta();
        let puedeBuy = []
        for (let i = 0; i < autosVenta.length; i++){
            let estado = this.puedeComprar(autosVenta[i], persona)
            if (estado)
                puedeBuy.push(autosVenta[i])
        }
        return puedeBuy

    }

    // autosQuePuedeComprar: function (persona) {
    //     return this.autosParaLaVenta().filter((auto) =>
    //       this.puedeComprar(auto, persona)
    //     );
}


//concesionaria.buscarAuto('APL123')
console.log(concesionaria.autosQuePuedeComprar(persona))
console.log(concesionaria.puedeComprar(autosImportados[1],persona))
console.log(concesionaria.puedeComprar(autosImportados[0],persona))
//concesionaria.buscarAuto('JA123')