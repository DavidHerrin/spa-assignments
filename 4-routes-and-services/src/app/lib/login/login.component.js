import 'login/login.styles'
import templateUrl from 'login/login.template'

const controller =
  class LoginController {
    constructor ($log, loginService, $state) {
      'ngInject'
      this.service = loginService
      this.$state = $state
      $log.log('ft-login is a go')
    }

    get userName () {
      return this.service.userName
    }

    submitClick (user) {
      if (user !== '') {
        this.service.login
        this.$state.go('game')
      }
    }
  }

export const ftLogin = {
  controller,
  templateUrl,
  controllerAs: 'login'
}
