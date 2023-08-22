#!/usr/bin/env node

"use strict";

//^ 1. printHelp();

var path = require("path");
var fs = require("fs");
var util = require("util");
var getStdin = require("get-stdin");

function printHelp() {
  console.log("ex1 usage: ");
  console.log("    ex1.js --file={FILENAME}");
  console.log("");
  console.log("--help                 print this help");
  console.log("--file={FILENAME}      process this file");
  console.log("--in, -                process stdin");
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
  boolean: ["help", "in"],
  string: ["file"],
});
// console.log(args);

if (args.help) {
  printHelp();
} else if (args.file) {
  let filePath = path.resolve(args.file);

  fs.readFile(filePath, function onContents(err, contents) {
    if (err) {
      error(err.toString());
    } else {
      processFile(contents.toString());
    }
  });
} else if (args.in || args._.includes("-")) {
  getStdin().then(processFile).catch(error);
  //~* run cat files/hello.txt | ./4-smart-runscript.js --in
} else {
  error("Incorrect usage", true);
}

//~% run -  ./4-smart-runscript.js --mode=development -c9 - foo bar (_ is for things which minimist doesn't understand)

//~? try https://yargs.js.org/ for reference - it uses minimist - is a wrapper around minimist

//**************************************** */
function processFile(contents) {
  contents = contents.toUpperCase();
  process.stdout.write(contents);
}

//# STDIN is the program that is a buffer provided from the shell
