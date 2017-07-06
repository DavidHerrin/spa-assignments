export class AppService {

  total = 0
  amount = 1
  multiplier = 1.2
  multiplierCost = 10
  clickerCost = 100
  clickerCount = 0
  clickerArray = []
  resetDisabled = true
  saveArray = []

  constructor ($interval, localStorageService) {
    'ngInject'
    this.$interval = $interval
    this.localStorageService = localStorageService
  }

  loadstorage () {
    this.saveArray.length = 0
    this.saveArray = JSON.parse(this.localStorageService.get('total'))
    if (this.saveArray.length === 0) {
      this.resetAll()
    } else {
      this.total = this.saveArray[0]
      this.amount = this.saveArray[1]
      this.multiplier = this.saveArray[2]
      this.multiplierCost = this.saveArray[3]
      let clickers = this.saveArray[4]
      this.clickerCount = 0
      this.clickerArray.length = 0
      for (let i = 0; i < clickers; i++) {
        this.addClicker()
      }
    }
  }

  savestorage () {
    this.saveArray.length = 0
    this.saveArray.push(this.total)
    this.saveArray.push(this.amount)
    this.saveArray.push(this.multiplier)
    this.saveArray.push(this.multiplierCost)
    this.saveArray.push(this.clickerCount)
    this.localStorageService.set('total', JSON.stringify(this.saveArray))
  }

  increment() {
    this.total += this.amount
    this.resetDisabled = false
    this.savestorage()
  }

  multiple() {
    this.amount *= this.multiplier
    this.multiplier *= 1.5
    this.multiplierCost *= 2.0
    this.savestorage()
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
    this.resetDisabled = true
    this.amount = 1
    this.total = 0
    this.multiplier = 1.2
    this.multiplierCost = 10
    this.clickerCost = 100
    this.clickerCount = 0
    for (let i = 0; i < this.clickerArray.length; i++) {
      this.$interval.cancel(this.clickerArray[i])
    }
    this.saveArray.length = 0
    this.localStorageService.set('total', JSON.stringify(this.saveArray))
  }

}
