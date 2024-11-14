// Import required modules
const { readFileSync } = require('fs');  // Synchronous file read (not used in this example)
const fs = require('fs');  // File system module for file operations
const http = require('http');  // Module for creating an HTTP server

// Create an HTTP server
http.createServer((req, res) => {
    // Using readFileSync is not recommended for serving large files as it reads the entire file into memory first.
    // This can lead to performance issues and slower response times for large files.
    // let big_file_text = readFileSync('./big_file.txt', 'utf8');
    // res.end(big_file_text);

    // More efficient way to handle large files:
    // Create a readable stream for the file
    const fileStream = fs.createReadStream('./big.txt', {"highWaterMark":100000, "encoding": 'utf8'});
    
    // When the file stream is opened, pipe its data to the response object
    fileStream.on('open', () => {
        fileStream.pipe(res);  // Stream the file content to the HTTP response
    });

    // Handle any errors that occur during the file reading process
    fileStream.on('error', (err) => {
        res.statusCode = 500;  // Set HTTP status code to 500 for server errors
        res.end(`Error: ${err.message}`);  // Send the error message as the response
    });
})
.listen(5000, () => console.log("Server running on port 5000"));  // Start the server and log a message
