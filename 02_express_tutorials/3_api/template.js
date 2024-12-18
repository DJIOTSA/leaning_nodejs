const htmlTemplate = (name)=>{
    
    let template = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home Page</title>
        <style>
            body {
                margin: 3rem;
                display: flex;
                justify-content: center;
                background-color: orange;
                color: navy;
                text-transform: capitalize;
                
            }
    
            h1 {
                font-weight: 900;
                font-family: "Montserrat", sans-serif;
                /* font-size: 5rem; */
                text-align: center;
            }
    
            h1:hover {
                transform: scale(1.05);
                transition-duration: 1s;
                cursor: pointer;
            }
    
            p{
                font-weight: 600;
                /* font-size: 1.5rem; */
                color: white;
                line-height: 2rem;
                text-align: center;
            }
            span{
                text-transform: lowercase;
            }
    
            @media (max-with: 900px){
                h1{
                    font-size: 1.2rem !important;
                }
    
                p{
                    font-size: 1rem !important;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="">
            <h1>Welcome ${name}!</h1>
            <p>You successfully logging using express '<span>urlencoded</span>' middleware.</p>
        </div>
    
    </body>
    
    </html>
    `
    return template
    
}

module.exports= htmlTemplate;