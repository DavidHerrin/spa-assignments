import 'login/login.styles'
import templateUrl from 'login/login.template'

const controller =
  class LoginController {
    constructor ($log, dataservice, loginService, $state) {
      'ngInject'
      this.dataservice = dataservice
      this.service = loginService
      this.$state = $state
      $log.log('ft-login is a go')
    }

    get userName () {
      return this.service.userName
    }

    submitClick (user) {
//      if (user !== '') {
      this.validateUser(user)
//        this.service.login
    }

    validateUser (user) {
      this.dataservice.getUserExists(user)
      .then((response) => {
        if (response === true) {
          alert('here3')
          this.$state.go('game')
        } else {
          console.log('returned false, failed login')
          return false
        }
      }, (error) => {
        console.log(error)
      })
    }
  }

export const ftLogin = {
  controller,
  templateUrl,
  controllerAs: 'login'
}
