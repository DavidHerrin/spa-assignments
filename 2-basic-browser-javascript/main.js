$(document)
  .ready(() => {
    'use strict'
    let total = 0
    let amtToSum = 1

    $('.button1')
      .click(() => {
        total += amtToSum
        $('.total')
          .html(total)
      })

      $('.button2')
        .click(() => {
          amtToSum *= 1.2
          $('.adder')
            .html(amtToSum)
        })

    $('.total')
      .html(total)
  });
