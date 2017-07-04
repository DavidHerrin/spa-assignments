$(document)

  .ready(() => {
    'use strict'
    let autototal = JSON.parse(window.localStorage.getItem('autototal'))
    if (autototal === null) autototal = 0
    let total = JSON.parse(window.localStorage.getItem('total'))
    if (total === null) total = 0
    let amtToSum = JSON.parse(window.localStorage.getItem('amtToSum'))
    if (amtToSum === null) amtToSum = 1
    let intervals = []
    let intervalcount = JSON.parse(window.localStorage.getItem('intervalcount'))
    if (intervalcount !== null) {
      for (let i = 0; i < intervalcount; i++) {
        intervals.push(
          setInterval(function () {
            total += amtToSum
            $.fn.chgtotal()
            $.fn.display()
          }, 1000))
      }
    }
    let resetActive = false

    $(window)
      .on('unload', function () {
        $.fn.saveData()
      })

    $.fn.saveData = function () {
      window.localStorage.setItem('autototal', JSON.stringify(autototal))
      window.localStorage.setItem('total', JSON.stringify(total))
      window.localStorage.setItem('amtToSum', JSON.stringify(amtToSum))
      window.localStorage.setItem('intervalcount', JSON.stringify(intervals.length))
    }

    $.fn.reset = function () {
      for (let i = 0; i < intervals.length; i++) {
        clearInterval(intervals[i])
      }
      intervals.length = 0
      autototal = 0
      total = 0
      amtToSum = 1
      resetActive = false
      $.fn.chgtotal()
      $.fn.display()
      window.localStorage.removeItem('autototal')
      window.localStorage.removeItem('total')
      window.localStorage.removeItem('amtToSum')
      window.localStorage.removeItem('intervalcount')
    }

    $.fn.display = function () {
      $('.total')
        .html(total)
      $('.adder')
        .html(amtToSum)
      $('.autototal')
        .html(autototal)
      resetActive = true
    }

    $.fn.click1 = function () {
      total += amtToSum
      resetActive = true
      $.fn.chgtotal()
      $.fn.display()
    }

    $.fn.chgtotal = function () {
      if (total >= 10) {
        $('.button2').css({
          "background-color": 'white'
        })
      } else {
        $('.button2').css({
          "background-color": 'gray'
        })
      }
      if (total >= 100) {
        $('.button3').css({
          "background-color": 'white'
        })
      } else {
        $('.button3').css({
          "background-color": 'gray'
        })
      }
      if (resetActive) {
        $('.resetbutton').css({
          "background-color": 'red'
        })
      } else {
        $('.resetbutton').css({
          "background-color": 'gray'
        })
      }
    }

    $('.resetbutton')
      .click(() => {
        if (resetActive) {
          $.fn.reset()
          $.fn.chgtotal()
        }
      })

    $('.button1')
      .click(() => {
        $.fn.click1()
      })

    $('.button2')
      .click(() => {
        if (total >= 10) {
          amtToSum *= 1.2
          total -= 10
          $.fn.chgtotal()
          $.fn.display()
        }
      })

    $('.button3')
      .click(() => {
        if (total >= 100) {
          autototal += 1
          total -= 100
          $.fn.chgtotal()
          $.fn.display()
          intervals.push(
            setInterval(function () {
              total += amtToSum
              $.fn.chgtotal()
              $.fn.display()
            }, 1000))
        }
      })

    $('.total')
      .html(total)

  });
