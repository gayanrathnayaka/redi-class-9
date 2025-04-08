start JSON SERVER 

https://github.com/typicode/json-server

go inside the api folder , open a terminal from there
run the following line 
json-server --watch data.json --port 3001  


If there are any errors thrown from google chrome try the following

// Go to chrome://net-internals in the Chrome and switch to the Domain Security Policy tab.

// In the "Delete domain security policies" section at the bottom, write "localhost" in Domain field and press the "Delete" button.