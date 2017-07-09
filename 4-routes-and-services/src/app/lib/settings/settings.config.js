export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'settings',
      url: '/settings',
      component: 'ftSettings'
    })
  }
