#!/usr/bin/env node

"use strict";

//> Shabang, or hashbang to tell shell environment that when it starts to execute it, it knows that which program to hand that script to. Instead of trying to interpret it as a bash script, it will be handed off to something else

//> -rw-r--r--@  is not -rwxr--r--@ . To change it, we have to execute
// > chmod u+x ex1.js
//~> now this -rwxr--r--@ is turned into an executable script

//^ console.log("This is an executable");
//^ 1. printHelp();

//****************************************************** */
// * Always write some help output for your scripts
//****************************************************** */
function printHelp() {
  console.log("ex1 usage: ");
  console.log("    ex1.js --help");
  console.log("");
  console.log("--help                 print this help");
  console.log("");
}

//^ 2. taking inputs from terminal
// console.log(process.argv); //% returns array of strings, 1st is node path, 2nd is file path
//> run ./file.js --mode=production -hello=world
console.log(process.argv.slice(2));
