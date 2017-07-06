import 'app/body.styles'
import templateUrl from 'app/body.template'

const controller =
  class FtBodyController {
    constructor ($log, appService) {
      'ngInject'
      this.service = appService
      $log.log('ft-body is a go')
    }

    get amount () {
      return this.service.amount
    }

    get multiplier () {
      return this.service.multiplier
    }

    get multiplierCost () {
      return this.service.multiplierCost
    }

    get clickerCost () {
      return this.service.clickerCost
    }

    get clickerCount () {
      return this.service.clickerCount
    }

    click () {
      this.service.increment()
    }

    click2 () {
      if (this.service.canAfford(this.service.multiplierCost)) {
        this.service.charge(this.service.multiplierCost)
        this.service.multiple()
      }
    }

    click3 () {
      if (this.service.canAfford(this.service.clickerCost)) {
        this.service.charge(this.service.clickerCost)
        this.service.addClicker()
      }
    }

    click4 () {
      this.service.resetAll()
    }

    disabled () {
      return !this.service.canAfford(this.service.multiplierCost)
    }

    disabled2 () {
      return !this.service.canAfford(this.service.clickerCost)
    }
  }

export const ftBody = {
  controller,
  templateUrl,
  controllerAs: 'body'
}
