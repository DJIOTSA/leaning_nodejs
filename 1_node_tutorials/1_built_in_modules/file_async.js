// ****************************** Asynchronous read/write file ******************************

const { readFile, writeFile } = require('fs')

console.log("\n\n\n#################### ASYNCHRONOUS READ/WRITE FILE ####################")

/* 
if the encoding is not specify: this will return something like this:
<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 20 28 66 69 72 73 74 2e 74 78 74 29>
*/
readFile('./content/first.txt', (err, result) => {
    if (err) {
        console.log("An error occurs:", err)
        return err
    }
    const first = result;
    console.log("\n\nResult(read) without encoding:\n")
    console.log(result)
})

/* While dealing with file always indicate the encoding "utf8" */
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log("An error occurs:", err)
        return err
    }
    const first = result;
    console.log("\n\nResult(read) with encoding:\n")
    console.log("First text file:", first);
    readFile("./content/subFolder/test.txt", "utf8", (err, result) => {
        if (err) {
            console.log("An error occurs:", err)
            return;
        }
        const second = result;
        console.log("Second text file:", second);

        // write a new file or overwrite a an existing file
        writeFile(
            "./content/result-async.txt",
            `${first}!\n${second}!\n`,
            (err, result) => {
                if (err) {
                    console.log("An error occurs:", err)
                    return;
                }
                console.log(result)
                console.log("Overwrite/create the file 'result-async.txt' completed")

                // write a new file 
                writeFile(
                    "./content/result-async.txt",
                    "The inserted text!\n",
                    { flag: "a" },
                    (err, result) => {
                        if (err) {
                            console.log("An error occurs:", err)
                            return;
                        }
                        console.log(result)
                        console.log("Open the file 'result-async.txt' and insert text completed!")
                    }

                )
            }

        )

    })
})

