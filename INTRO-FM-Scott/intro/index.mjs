import { readFile, writeFile } from "fs/promises";
import path from "path";

// console.log(fs);
//> File system APIs are async by default - goes to event loop

//~# reading file
//~* in commonJS
// const template = await readFile(path.join(__dirname, "template.html"));
//~* in moduleJS - relative path to file in URL constructor
let template = await readFile(
  new URL("template.htl", import.meta.url),
  "utf-8" // no need of .toString() here
);
// console.log(template, "template");
// console.log(import.meta, "import");

const data = {
  title: "Title",
  body: "This is the final body of the html",
};

for (const [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}

console.log(template, "template");

//~> creation of file
await writeFile(new URL("index.html", import.meta.url), template);


//~* Error handling
// > process.exit(1) - exit with success
// > process.exit(1) - exit with error - not recommended to exit as we want to handle errors