export class AppService {
  amount = 1
  total = 0
  multiplier = 1.2
  multiplierCost = 10
  clickerCost = 100
  clickerCount = 0
  clickerArray = []

  constructor ($interval) {
    'ngInject'
    this.$interval = $interval
  }

  increment() {
    this.total += this.amount
  }

  multiple() {
    this.amount *= this.multiplier
    this.multiplier *= 1.5
    this.multiplierCost *= 2.0
  }

  charge(amt) {
    this.total -= amt
  }

  canAfford (amt) {
    return Boolean(this.total >= amt)
  }

  addClicker() {
    this.clickerArray.push(this.$interval(() => {this.increment()}, 1000))
    this.clickerCount++
    this.clickerCost *= 2
  }

  resetAll() {
    this.amount = 1
    this.total = 0
    this.multiplier = 1.2
    this.multiplierCost = 10
    this.clickerCost = 100
    this.clickerCount = 0
    for (let i = 0; i < this.clickerArray.length; i++) {
      this.$interval.cancel(this.clickerArray[i])
    }
  }

}
