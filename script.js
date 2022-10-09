class Store {
	constructor(paymentProcessor) {
		this.paymentProcessor = paymentProcessor;

		// this.user = user;
		// this.paypal = new Paypal();
		// this.stripe = new Stripe(user);
	}

	purchaseBike(quantity) {
		this.paymentProcessor.pay(200 * quantity);

		// this.paypal.makePayment(this.user, 200 * quantity);
		// this.stripe.makePayment(200 * quantity * 100);
	}

	purchaseHelmet(quantity) {
		this.paymentProcessor.pay(15 * quantity);

		// this.paypal.makePayment(this.user, 15 * quantity);
		// this.stripe.makePayment(15 * quantity * 100);
	}
}

class StripePaymentProcessor {
	constructor(user) {
		this.stripe = new Stripe(user);
	}

	pay(amountInDollars) {
		this.stripe.makePayment(amountInDollars * 100);
	}
}

class PaypalPaymentProcessor {
	constructor(user) {
		this.user = user;
		this.paypal = new Paypal();
	}

	pay(amountInDollars) {
		this.paypal.makePayment(this.user, amountInDollars);
	}
}

class Stripe {
	constructor(user) {
		this.user = user;
	}

	makePayment(amountInCents) {
		console.log(
			`${this.user} made a payment of $${amountInCents / 100} with Stripe`
		);
	}
}

class Paypal {
	makePayment(user, amountInDollars) {
		console.log(`${user} made payment of $${amountInDollars} with Paypal`);
	}
}

const store = new Store(new PaypalPaymentProcessor('Galen'));
store.purchaseBike(2);
store.purchaseHelmet(2);
