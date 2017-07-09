export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'game',
      url: '/game',
      component: 'ftGame'
    })
  }
