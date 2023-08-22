#!/usr/bin/env node

"use strict";

//^ 1. printHelp();

function printHelp() {
  console.log("ex1 usage: ");
  console.log("    ex1.js --file={FILENAME}");
  console.log("");
  console.log("--help                 print this help");
  console.log("--file={FILENAME}      process this file");
  console.log("");
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});
console.log(args);

if (args.help) {
  printHelp();
} else if (args.file) {
  console.log(args.file);
} else {
  error("Incorrect usage", true);
}

//~% run -  ./4-smart-runscript.js --mode=development -c9 - foo bar (_ is for things which minimist doesn't understand)

//~? try https://yargs.js.org/ for reference - it uses minimist - is a wrapper around minimist
