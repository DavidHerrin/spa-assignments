export class LoginService {
  constructor (defaultSettings) {
    'ngInject'
    Object.assign(this, defaultSettings)
  }

  login () {
    this.loggedIn = true
  }

}
