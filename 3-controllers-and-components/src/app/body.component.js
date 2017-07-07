import 'app/body.styles'
import templateUrl from 'app/body.template'

const controller =
  class FtBodyController {
    constructor ($log, appService) {
      'ngInject'
      this.service = appService
      this.service.getUser()
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

    get resetDisabled () {
      return this.service.resetDisabled
    }

    get userName () {
      return this.service.userName
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
      if (!this.service.resetDisabled) {
        this.service.resetAll()
      }
    }

    click5 () {
      this.service.clearUser()
    }

    disabled () {
      return !this.service.canAfford(this.service.multiplierCost)
    }

    disabled2 () {
      return !this.service.canAfford(this.service.clickerCost)
    }

    disabled3 () {
      return this.service.resetDisabled
    }

    signedOn () {
      return !(this.service.userName === '')
    }

    submitClick (user) {
      this.service.userName = user
      this.service.loadstorage()
      this.service.saveUser()
    }
  }

export const ftBody = {
  controller,
  templateUrl,
  controllerAs: 'body'
}
