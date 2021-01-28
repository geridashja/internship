class Kari {
    constructor(gjatsia,trashsia){
        this.gjatsia = gjatsia;
        this.trashsia = trashsia;
    }
    print(){
        console.log("Kari jot eshte " + this.gjatsia + " i gjate dhe " + this.trashsia + " i trashe!");
    }
}
let mykar = new Kari(15,12);
let mykar1 = new Kari(16,14);
mykar.print();
mykar1.print();
