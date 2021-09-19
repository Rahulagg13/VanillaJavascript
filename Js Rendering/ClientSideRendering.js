//********What is Client-Side rendering************
/*
Client-side rendering allows developers to make their websites entirely rendered in the browser with JavaScript.
Instead of having a different HTML page per route, a client-side rendered website creates each route dynamically directly
in the browser.
This approach spread once JS frameworks made it easy to take.
It serve the pages dynamically without refreshing the page.

Example = React,Angular,V
*/
/*
When you create any project and deploy it...In client side rendering the Project is fully Loaded first in the browser
and then User can interact with the app.
The initial Loading is slow as the browser has to load the full application and then user can interact with the application.
first it load a black_page and then it shows the content.
it has low SEO

*/
//Pros....
/*
1.App become more interactive and and it is easy to have user authentication.
2.less http request to the server .
3.Application is fast once it fully load.
4.Once user request for different data.It only load the changed components while non-changed components are as it is.
*/
//Cons...
/*
1.Application load slow initially.
2. It shows black_page and then Serve the content.
3.Low SEO.
*/
//***************IT HAPPENS WITHOUT REFRESHING THE PAGE****************** */
//as it not request the new page to the server. So there is no need of refreshing the page.
//At first request, Application is fully loaded and then User can interact with it.
//It change the Browser Url dynamically when user request for different page or component but not request for new page from the server.

//***********It displays black_page first****************/
//when the Js files and Application Html is loading or downloading in the Browser At that time it render a blank page first
//  ,however it change it dynamically when the application is fully loaded.
