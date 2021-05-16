const Pizza = require('./pizza');


const maxIngredientReached = () => {
    console.log(" Max ingredient reached ....");
}
const ingridentAdd = (ingredient) => {
    console.log(" Ingredient Added .... ",ingredient);
}

const createSmallPiza = () => {

    const smallPizza = new Pizza(1);
    smallPizza
        .on('ingridentAdd',(ing)=>{ ingridentAdd(ing) })
        .on('cookStarted',()=>{ console.log("cooked started ...")})
        .on('cookFinished',()=>{ console.log("cooked finished ...")})
        .add('totato')
        .cook();       

}


createSmallPiza();