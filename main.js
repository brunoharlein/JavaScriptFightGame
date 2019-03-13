function Guerrier(nom, attaque, defense, sante) {

    this.nom = nom,
    this.attaque = attaque,
    this.defense = defense,
    this.sante = sante,

    this.combat = function(guerrier) {
      alert(this.nom + " attaque zizigatamé " + guerrier.nom);
      guerrier.sante = guerrier.sante - this.attaque;
      alert(guerrier.nom + " a " + guerrier.sante + " points de vie");
    };
}

var bruno = new Guerrier("Bruno", 50, 50, 500);
var sandrine = new Guerrier("Sandrine", 30, 40, 500);

bruno.combat(sandrine);
sandrine.combat(bruno);


function Magicien(nom, attaque, defense, sante, mana) {
    this.nom = nom,
    this.attaque = attaque,
    this.defense = defense,
    this.sante = sante,
    this.mana = mana,

    this.combat = function(magicien) {
      alert(this.nom + " Vous ne passerez pas !! " + magicien.nom);
      magicien.sante = magicien.sante - this.attaque;
      alert(magicien.nom + " a " + magicien.sante + " points de vie");
    };

    this.soigner = function() {
      // si le mana est sup à 10
      if (this.mana > 10) {
        alert(this.nom + " + 10 points de vie ");
        // ajoute 10 points de vie
        this.sante += 10;
        // enleve 10 points de mana
        this.mana -= 10;
      }
      else {
        alert("plus de mana");
      }
    };
}

var gandalf = new Magicien("Gandalf", 50, 50, 500, 20);
var saruman = new Magicien("Saruman", 50, 50, 500, 20);

gandalf.combat(saruman);
gandalf.soigner();
saruman.combat(gandalf);
saruman.combat();
