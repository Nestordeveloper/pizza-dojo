function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    };
    return pizza;
}
// Pizza 1 al estilo chicago
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
// Pizza 2 lanzada a mano
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);

// Crea 2 pizzas adicionales con los ingredientes que quiera.
var pizza3 = pizzaOven("pan", "barbacoa", ["cheddar", "gouda"], ["pollo", "cebolla caramelizada"]);
var pizza4 = pizzaOven("delgada", "pesto", ["parmesano", "ricotta"], ["tomate cherry", "espinacas"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
