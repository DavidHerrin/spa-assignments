$(document)
  .ready(() => {
    'use strict'
    let autototal = 0
    let total = 0
    let amtToSum = 1

    $.fn.display = function () {
      $('.total')
        .html(total)
    }

    $.fn.click1 = function () {
      total += amtToSum
      $.fn.chgtotal()
      $.fn.display()
    }

    $.fn.chgtotal = function () {
      if (total >= 10) {
        $('.button2').css({
          "background-color": 'white'
        });
      } else {
        $('.button2').css({
          "background-color": 'gray'
        });
      }
      if (total >= 100) {
        $('.button3').css({
          "background-color": 'white'
        });
      } else {
        $('.button3').css({
          "background-color": 'gray'
        });
      }
    }

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
          $('.adder')
            .html(amtToSum)
        }
      })

    $('.button3')
      .click(() => {
        if (total >= 100) {
          autototal += 1
          total -= 100
          $.fn.chgtotal()
          $.fn.display()
          $('.autototal')
            .html(autototal)
          setInterval(function () {
            total += amtToSum
            $.fn.chgtotal()
            $.fn.display()
          }, 1000)
        }
      })

    $('.total')
      .html(total)
  });
