export class SettingsService {
  constructor (defaultSettings, loginService) {
    'ngInject'
    Object.assign(this, defaultSettings)
    this.login = loginService
  }

  get userName () {
    return this.login.userName
  }
}
