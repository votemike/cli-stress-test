export class Property {

    constructor(
        public id: number,
        public name: string,
        public mortgage: number,
        public baseRate: number,
        public monthsLeft: number,
        public interestOnly: boolean,
        public teaserRate?: number,
    ) {  }

    // Rental income
    // Outgoings (repairs, maintenance fee, etc...)
    // Or just net income

    getCurrentMonthlyCost(): number {
        if (typeof this.teaserRate === 'undefined') {
            return this.getMonthlyCost(this.baseRate);
        } else {
            return this.getMonthlyCost(this.teaserRate);
        }
    }

    getFullMonthlyCost(): number {
        return this.getMonthlyCost(this.baseRate);
    }

    getMonthlyCost(rate: number): number {
        const monthlyInterestRate = rate / 12 / 100;
        if (this.interestOnly) {
            return +(this.mortgage * monthlyInterestRate).toFixed(2);
        }
        // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
        const pow = Math.pow((monthlyInterestRate + 1), this.monthsLeft);
        return +(this.mortgage * ((monthlyInterestRate * pow) / (pow - 1))).toFixed(2);
    }
}
