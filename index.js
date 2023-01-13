//Створити функцію конструктор для Cattle(brand, maxVolume, minVolume)
//Властивості:
//brand
//maxVolume
//minVolume
//currentVolume = 0
//isOn = false
//Методи:
//addWater(value) //налий води
//makeTea(value)  //відлий воду
//turnOn()  //кип'яти

const amountOfWater = 50;

function CoffeeMachine (brand, maxVolume, minVolume) {
   this.brand = brand;
    this.maxVolume = maxVolume;
    this.minVolume = minVolume;
    this.currentVolume = 0;
    this.isOn = false;

    this.turnOn = function () {
        if (this.isOn === false) {
            this.isOn = true;
        }
    }

    this.addWater = function (value) {
        if ( this.currentVolume + value > this.maxVolume) {
            this.currentVolume =  this.maxVolume;
        } else {
            this.currentVolume = this.currentVolume + value;
        }
    }

    this.makeTea = function (value) {
        if (this.currentVolume - value < this.minVolume) {
            this.currentVolume = this.minVolume;
        } else {
            this.currentVolume = this.currentVolume - value;
        }
    }

}

const watter = new CoffeeMachine('Philips', 100, 0);

watter.turnOn();
console.log(watter.isOn);
watter.addWater(amountOfWater);
console.log(watter.currentVolume);
watter.makeTea(amountOfWater);
console.log(watter.currentVolume);



