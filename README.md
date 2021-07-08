# google-places-spike

## Description

We need to be able to pull data from a source or sources to return relevant results for our application.  In our case, we're potentially looking for results with:

* Location name (restaurants, parks, etc.)
* Event name
* Any pricing information
* Location address

These results must be relevant to user defined criteria:  city/state and/or zip code, and potentially an activity they're interested in.  

In order to reduce a number of APIs to comb through, we'd like to try to use Google Places, which provides a lot of location and event related data that we could use for our application.

## How to use (so far)

1. [Fork or clone repo](https://github.com/monstertruckdog/google-places-spike)
2. Execute the `npm` packages installation
   
    ```
    npm i
    ```

3. Start server (on port 3000 by default)
   
    ```
    node google_test_server.js
    ```

4. Enter data in "City," "State" and "Activity" fields
5. Click "Submit"

## Completed Items and To Do

* ✅ Setup Google Cloud project and turn on APIs
* ✅ Understand and construct a simple Places search
    - ✅ *Executes successfully in Postman*
* ✅ Build quick, simple UI for user entry to test
* ✅ Run frontside JS Places API call from local (without server)
  * ❎ Call to Google is made but fails due to a CORS error
    * _Through research, thought that maybe the issue was related to call being made from local machine and not a server
* ✅ Run frontside JS Places API call from local server
  * ✅ Created ExpressJS server and successfully execute Places call from UI
  * ❎ Call to Google is made but fails due to a CORS error
* 🔲 Get Google Places API call response data into console
* 🔲 Get Google Places response data onto UI
