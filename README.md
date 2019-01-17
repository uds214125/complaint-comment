# complaint-comment
A complaint and comment system using angular and node.js.

### Pre-requsite : 
   Nodejs :   8.9 or greater
   Angular-cli : latest
   Mongodb : 3.6 or greater
   
### How to use complaint-comment system ?

1. npm install in client and server folder
2. start ``server`` using : npm run start 
    You will see in console ouput :  `Node.js app is listening at http://localhost:4125`
    create one agent record :
    API : http://localhost:4125/api/agent/create
    body :  
      email:agent@gmail.com
      password:xxxxxx
      mobile:xxxxxxxxxx
    Headers : 
      Content-Type : application/x-www-form-urlencoded
      
    Output:
    {
    "code": 200,
    "status": true
    }
3. start ``client`` using : ng serve  
4. visit http://localhost:4200

