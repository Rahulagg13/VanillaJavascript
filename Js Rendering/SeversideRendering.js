//ServerSideRendering...
/*
Server-side rendering allows developers to pre-populate a web page with custom user data directly on the server.
It is generally faster to make all the requests within a server than making extra browser-to-server round-trips for them.
This is what developers used to do before client-side rendering.
*/
//Pros...
/*
1.Good for SEO Bots in the application
2.It generally load fast as compared to the client side rendering application
3.It display the fully populated page ,not the black_page first
*/
// Cons...
/*
1. Less User interactive
2. when Application is Big , A lot of AJAX / http request to the server.
*/
//**********Generally it is good to use Server side rendering in small applications*********** */

//****************** Difference  Between Client Side and server side *************************/
/*
Client-side rendering manages the routing dynamically without refreshing the page every time a user requests a different route.
But server-side rendering is able to display a fully populated page on the first load for any route of the website,
whereas client-side rendering displays a blank page first.
*/

//What is Universal App...
/*
A universal app sends to the browser a page populated with data.
Then the app loads its JavaScript and reHydrates the page to get a fully client-side rendered app.
This approach combines the advantages of the latest techniques available today.
*/
