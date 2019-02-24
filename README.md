# Baseball Database
[Site link](https://log-baseball-stats.herokuapp.com/)

A Node.js application hosted on Heroku. Contains statistics specific to a fantasy baseball league, The League of Ordinary Gentlmen.

## Features

#### Landing Page
![Landing Page](https://github.com/darlose04/BaseballDB/blob/master/screengrabs/landingPage.png "Landing Page")

#### Register and Login

In order to access the stats and blog, a user will need to register with a username and password

![Register Page](https://github.com/darlose04/BaseballDB/blob/master/screengrabs/register.png "Register")

![Login Page](https://github.com/darlose04/BaseballDB/blob/master/screengrabs/login.png "Login")

#### Blog
* Yet to be implemented
* Will allow users to post anything they deem interesting or relevant

#### Chat feature
* Yet to be implemented
* Will probably use socket.io
* There will be a group chat, as well as the option for private chats between users

#### Batting

![2019 Batting Projections](https://github.com/darlose04/BaseballDB/blob/master/screengrabs/battingProjections.png "Batting Projections")

![2018 Batting Stats](https://github.com/darlose04/BaseballDB/blob/master/screengrabs/batting2018.png "2018 Batting Stats")

![2017 Batting Stats](https://github.com/darlose04/BaseballDB/blob/master/screengrabs/batting2017.png "2017 Batting Stats")

#### Pitching

![2019 Pitching Projections](https://github.com/darlose04/BaseballDB/blob/master/screengrabs/pitchingProjections.png "Pitching Projections")

* Stats for 2017 and 2018 pitching still need to be organized properly and added to database












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
* create blog section
  * add blogs to db
* Learn more about the dataTables library. 
  * Figure out how to create search features that return multiple hits, such as returning players with >20 homers and an OPS >.800
* when a user logs in, return to the landing page but add a message that welcomes the user
  * display the username of who is logged in on the navbar and also edit the login or logout tabs on navbar depending on user log status
  * refer to yelpcamp code or just create dashboard page for when a user logs in

