import 'game/game.styles'
import templateUrl from 'game/game.template'

const controller =
  class FtGameController {
    constructor ($log, gameService, $state) {
      'ngInject'
      this.service = gameService
      this.$state = $state
      this.checkPlayer()
      $log.log('ft-game is a go')
    }

    get baseModifier () {
      return this.service.baseModifier
    }

    get totalModifier () {
      return this.service.totalModifier
    }

    get canAffordModifier () {
      return this.service.canAffordModifier
    }

    get totalIncrement () {
      return this.service.totalIncrement
    }

    get totalAutoclickers () {
      return this.service.totalAutoclickers
    }

    get canAffordAutoclicker () {
      return this.service.canAffordAutoclicker
    }

    get userName () {
      return this.service.userName
    }

    checkPlayer () {
      if (this.service.userName === '' || this.service.userName === undefined) {
        this.$state.go('login')
      }
    }

    buyModifier () {
      this.service.buyModifier()
    }

    increment () {
      this.service.increment()
    }

    buyAutoclicker () {
      this.service.buyAutoclicker()
    }
  }

export const ftGame = {
  controller,
  templateUrl,
  controllerAs: 'game'
}
