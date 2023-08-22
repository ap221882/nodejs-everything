#!/usr/bin/env node

"use strict";

//^ 1. printHelp();

var path = require("path");
var fs = require("fs");

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
// console.log(args);

if (args.help) {
  printHelp();
} else if (args.file) {
  let filePath = path.resolve(args.file);
  processFile(filePath);
  // console.log(filePath); //> converts relative to absolute path using __dirname ---> try this `./4-smart-runscript.js --file=../hello`
  // console.log(__dirname); //> current dirname
} else {
  error("Incorrect usage", true);
}

//~% run -  ./4-smart-runscript.js --mode=development -c9 - foo bar (_ is for things which minimist doesn't understand)

//~? try https://yargs.js.org/ for reference - it uses minimist - is a wrapper around minimist

//**************************************** */
function processFile(filePath) {
  var contents = fs.readFileSync(filePath);
  // console.log(contents);
  //~* reason is, by the time the characters reached the shell, console.log has already stringified into the characters we saw.___

  //~* by using below method, we let the shell understand the contents and print them on the terminal
  process.stdout.write(contents);
}
