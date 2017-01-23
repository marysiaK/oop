function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
};
Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena  + " Cena przedłużonej gwarancji  " + this.getWarranyCost() + "zł. ");
};
Telefon.prototype.getWarranyCost = function() {
    return this.cena * 0.1;
};
var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var SamsungGalaxy = new Telefon("Samsung", 3500, "gold");
var OnePlus  = new Telefon("OnePLus", 2500, "czarny");

iPhone6S.printInfo();
SamsungGalaxy.printInfo();
OnePlus.printInfo();