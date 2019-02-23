# Baseball Database

This will be an application used to sort through relevant statistics for a fantasy baseball league.
The app will use Bootstrap 4 on the front end for the design and UI, while using Node.js and Express on the backend in addition to MongoDB.


## Possible Implementations
* Blog page for league members to post stuff
  * add comment sections
* add chat feature using something like socket.io so there's a chat window that can be clicked and opened.
  * make this for a group chat as well as private between members
* (maybe) create a password so only league members can enter the site
* make the database searchable so a user can enter a player name and get their stats
* make it so a user can search for players using specific stat lines:
  * for example, return players that have hit >20 homeruns


## To-do list
* organize the pitcher dbs so that the correct stats are all in one spreadsheet/db. Right now, I have two spreadsheets, one for basic stats and one for advanced stats, and for some reason they are different sizes. You'd think the number of pitchers would be the same.
* need to change how names are displayed in the csv so the alphabetical sorting is by last name
* **Host site with heroku or something similar. Do some research on what may work best**
* Once the site is hosted, use git branches to work on new features. Then merge commits
* create index routes
* create blog section
  * add blogs to db
* create user authentication using notes/code examples from other node app.
  * create login and register routes/views
  * add users to db
  * prevent users from accessing stats without being logged in/registered
* Learn more about the dataTables library. 
  * Figure out how to create search features that return multiple hits, such as returning players with >20 homers and an OPS >.800
* when a user logs in, return to the landing page but add a message that welcomes the user
  * display the username of who is logged in on the navbar and also edit the login or logout tabs on navbar depending on user log status
  * refer to yelpcamp code or just create dashboard page for when a user logs in

