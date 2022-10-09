class GasStation {
	constructor(car) {
		this.exxon = new Exxon(car);
	}

	refuel(amount) {
		this.exxon.refuel(amount);
	}

	addAirToTires(amount) {
		this.exxon.addAirToTires(amount);
	}
}

class Exxon {
	constructor(car) {
		this.car = car;
	}

	refuel(amountInGallons) {
		console.log(`Adding ${amountInGallons} gallons of gasoline to ${this.car}`);
	}

    addAirToTires(amountInPSI) P{
        
    }
}

class Avia {
	refuel(car, amountInLiters) {}
}
