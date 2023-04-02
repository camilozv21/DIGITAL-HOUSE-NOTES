const importarObjeto = require('./collectibles');

let hotToys = importarObjeto('./datos/figuras1.json');
let bandai = importarObjeto('./datos/figuras2.json');
let starWars = importarObjeto('./datos/figuras3.json');

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles,

    listFigures: function(){
        for(let el of this.figuras){
            console.log(`Marca: ${el.marca}\nNombre: ${el.nombre}\nPrecio: ${el.precio}\nStock: ${el.stock}`);
            console.log("\n")
        }
    },

    figuresByBrand: function(marcaFigura){
        console.log(typeof(this.figuras));
        return this.figuras.filter(el => el.marca == marcaFigura)
    }
}

collectibles.listFigures();
console.log(collectibles.figuresByBrand('Hot Toys'));