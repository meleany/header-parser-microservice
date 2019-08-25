FCC API & Microservices
=======================
Project 02: Request Header Parser Microservice
==============================================


User Story:
-----------

1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.


#### Example usage:
* [base_url]/api/whoami

#### Example output:
* `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`


The Project:
------------

On the front-end:
1. Edit `public/client.js`, `public/style.css` and `views/index.html`
2. Drag in `assets`, like images or music, to add them to your project  
On the back-end:
3. Your app starts at `server.js`
4. Add frameworks and packages in `package.json`
5. Safely store app secrets in `.env` (nobody can see this but you and people you invite)