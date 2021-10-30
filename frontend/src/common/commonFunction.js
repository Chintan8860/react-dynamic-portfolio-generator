import ReactDOMServer from 'react-dom/server'
import ReactTemp1 from '../Screens/Templates/ReactTemp1/ReactTemp1';

const fileDownloader = (fileDownloadUrl, fileName) => {
    let a = document.createElement('a');
    a.href = fileDownloadUrl;
    a.download = fileName;
    a.click();
}

export const portfolioFilesGenerator = () => {
    const body = ReactDOMServer.renderToStaticMarkup(<ReactTemp1 />);

    const html= `<!DOCTYPE html>
    <html>
        <title>Dynamic Portfolio generation</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./style.css">
        <body class="w3-light-grey">
            <!-- Page Container start here -->
            ${body} 
        </body>
    </html>`;

    const blob = new Blob([html]);
    let fileDownloadUrl = URL.createObjectURL(blob);
    fileDownloader(fileDownloadUrl, "index.html")
    
    const style = `@import "https://www.w3schools.com/w3css/4/w3.css";
@import "https://fonts.googleapis.com/css?family=Roboto";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

body, h1,h2,h3,h4,h5,h6 {
  font-family: "Roboto", sans-serif !important;
}`;
    
    const blobCss = new Blob([style]);
    fileDownloadUrl = URL.createObjectURL(blobCss);
    fileDownloader(fileDownloadUrl, "style.css");
} 