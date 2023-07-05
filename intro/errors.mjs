import { readFile } from "fs/promises";

// Async Version
/**
readFile(new URL("inde.mjs", import.meta.url), "utf-8", (error, data)=>{
  if(error){
    //~! handle error here
    console.error(error)
    //~! deliberately want to throw an error here
    throw error
  }else{
    
  }
})
 */

// Sync Version - app doesnt crashes and you handle errors
// try {
//   const result = await readFile(new URL("inde.mjs", import.meta.url), "utf-8");
// } catch (error) {
//   console.error(error);
// }

//~! Third way 
process.on("uncaughtException", (error) => {
  console.log("error logged");
  console.log(error, "error");
});

const result = await readFile(new URL("inde.mjs", import.meta.url), "utf-8");

