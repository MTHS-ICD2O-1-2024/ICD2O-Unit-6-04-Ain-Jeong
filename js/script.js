// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

window.onload = function () {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')

  console.log(radius)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(r, 3)
  const dimension = '<ul>\n<li>a base = ' + radius
  // output
  document.getElementById('dimension').innerHTML = dimension
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' mm²'
}
