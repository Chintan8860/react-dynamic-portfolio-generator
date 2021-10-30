import React from "react";
import ReactDOMServer from 'react-dom/server'
import ReactTemp1 from '../ReactTemp1/ReactTemp1';

const Temp2 = () => {
  const body = ReactDOMServer.renderToStaticMarkup(<ReactTemp1 />);

  const htmls = `<!DOCTYPE html>
  <html>
    <title>Dynamic Portfolio genration</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./style.css">
    <body class="w3-light-grey">
      <!-- Page Container -->
      ${body} 
    </body>
  </html>
  `;
  return <div dangerouslySetInnerHTML={{ __html: htmls }}></div>;
};

export default Temp2;
