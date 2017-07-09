import 'settings/settings.styles'
import templateUrl from 'settings/settings.template'

const controller =
  class SettingsController {
    constructor ($log, settingsService, $state) {
      'ngInject'
      this.service = settingsService
      this.$state = $state
      this.checkPlayer()
      $log.log('ft-settings is a go')
    }

    get userName () {
      return this.service.userName
    }

    checkPlayer () {
      if (this.service.userName === '' || this.service.userName === undefined) {
        this.$state.go('login')
      }
    }
  }

export const ftSettings = {
  controller,
  templateUrl,
  controllerAs: 'settings'
}
