import { LoginService } from 'login/login.service'
import { ftLogin } from 'login/login.component'
import { defaultSettings } from 'settings/settings.constants'
import { config } from 'login/login.config'

export default ng
  .module('ft.login', [])
  .service('loginService', LoginService)
  .component('ftLogin', ftLogin)
  .constant('defaultSettings', defaultSettings)
  .config(config)
  .name
