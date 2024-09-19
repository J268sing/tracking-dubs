
const customfavIcon = "https://res.cloudinary.com/dphleqb5t/image/upload/v1713724442/jc-develop/favicon-c_qlvrpv.png";      //adding our favicon to swagger

const customCss = `
    .topbar{
        animation: navanimation linear both;
        animation-range: 0 300px;
        animation-timeline: scroll(root);
        position: sticky;
        top: 0px;
        z-index: 1
    }
    .topbar-wrapper {
        content: Prueba; color: white;
    }  
    .topbar-wrapper a {
        content:url(https://res.cloudinary.com/dphleqb5t/image/upload/v1713730346/rest-api-template/Logo-Swagger_ukcytn.png); width:200px; height:auto;
    }
    .swagger-ui .opblock .opblock-summary-description { 
        font-weight: 900 
    }
    .description .renderedMarkdown p {
        font-size: 1rem;
    }
    @keyframes navanimation {
        to {
            opacity: 0.9;
            backdrop-filter: blur(10px);
        }
    }
`

const customSiteTitle = "TrackingDubs API Documentation";  //added site title to swagger for nice SEO

const customJs = "script url";                  //uncomment this line to add a custom script file
const customJsStr = "alert('prueba')";          //uncomment this line to add a custom script


const swaggerOptions = {
    customfavIcon,
    customCss,
    customSiteTitle,
    // customJs,   //uncomment this line to add a custom script file
    // customJsStr,  //uncomment this line to add a custom script
    swaggerOptions: {
        persistAuthorization: true, // this helps to retain the token even after refreshing the (swagger UI web page)
        // defaultModelsExpandDepth: -1 //uncomment this line to stop seeing the schema on swagger ui

    },
}

const swaggerTitle = "TrackingDubs - Betting Insights Tracker API Documentation";

const swaggerDescription = `
  <p>TrackingDubs is a platform for bettors to track their betting history, providing insights into past bets, patterns, and strategies. This API supports the creation and management of user data, bet tracking, and real-time updates.</p>
  <p>Key features of this API include:</p>
  <ul>
    <li>User Registration and Management</li>
    <li>JWT Token-based Authentication</li>
    <li>Real-time updates via WebSockets</li>
    <li>CRUD Operations for User and Bet Entities</li>
  </ul>
`;

export {
    swaggerOptions,
    swaggerTitle,
    swaggerDescription
}