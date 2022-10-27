// Write your code here
class Breakfast{
    constructor(food, drink){
    this.food = food;
    this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner{
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
    showDessert(){
         return console.log(this.#dessert)
    }
}

const rodrigo = new Dinner ('blob', 'shoob', 'doob', 'this grub')
console.log(rodrigo)

rodrigo.dessert = 'lettuce'

console.log(rodrigo)

rodrigo.showDessert()