export const dataservice = class {
  constructor ($http) {
    'ngInject'
    this.$http = $http
    this.ipAddress = 'localhost:8090'
  }
  // --------------------------------------------------user services
  getUsers () {
    return this.$http.get(`http://${this.ipAddress}/api/users`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  getUserExists (username) {
    return this.$http.get(`http://${this.ipAddress}/userents/validate/username/exists/@${username}`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  getUserByName (username) {
    return this.$http.get(`http://${this.ipAddress}/userents/@${username}`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  postUser (userObject) {
    return this.$http.post(`http://${this.ipAddress}/api/users`, userObject)
    .then((response) => {
      console.log('success postTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed postTweet', error.data)
    })
  }

  deleteUser (username) {
    return this.$http.delete(`http://${this.ipAddress}/api/users/@${username}`)
    .then((response) => {
      console.log('success deleteUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed deleteUser', error.data)
    })
  }
}
