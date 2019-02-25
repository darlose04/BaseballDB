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

## Installation

In order for this application to work locally, you will need to have Node.js and npm installed:  
[Node.js](https://nodejs.org/en/)  
[npm](https://www.npmjs.com/get-npm)

You will also need git in order to clone this repository:  
[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Cloning the repository:  
`git clone https://github.com/darlose04/BaseballDB.git`\
cd into the new directory:  
`cd BaseballDB/`

In order for the application to work, you will need to install the following packages:
bcryptjs, connect-flash, ejs, express, express-session, mongoose, passport, passport-local, and nodemon.\
This can all be done with one command:\
`npm install`

You will also need a version of MongoDB, whether it be [locally](https://docs.mongodb.com/manual/installation/#mongodb-community-edition), with [Mongo Atlas](https://www.mongodb.com/), which you will need to sign up for, or another version you may be familiar with. You may need a local version of MongoDB in order to use Atlas, I'm not sure.

If using Mongo Atlas, you will need to change the MongoURI link in the config/keys.js file to the one related to your account. This is found under the Overiew tab; click on 'Connect', then click 'Connect Your Application', then copy the link under the 'Standard connection string' and paste it into config/keys.js as the MongoURI value. Replace <PASSWORD> in the string with your user password (created when you create a read/write user).\
You will also want to head to the Security tab and set up a user with read/write access, as well as setting an IP Whitelist so you can connect to your cluster from a certain IP address. I just set mine to 0.0.0.0/0 so I can connect to it from any IP address.

Now you'll want to create a database by clicking on 'Collections'. Name the database whatever, but it will need to match at `app.js 18:55`. You may also want to create the collections here, which are detailed in the mongoose schemas in the models folder.

Once this is done, you will want to import the CSV files that are located in the statistics directory. This is done by going into the 'Collections' tab, then clicking on 'Command Line Tools'. You want to use the Data Import tool, which contains the code you want to run in your command line:

`mongoimport --host Fantasy-Baseball-shard-0/fantasy-baseball-shard-00-00-jtaa4.mongodb.net:27017,fantasy-baseball-shard-00-01-jtaa4.mongodb.net:27017,fantasy-baseball-shard-00-02-jtaa4.mongodb.net:27017 --ssl --username <ADMIN> --password <PASSWORD> --authenticationDatabase admin --db <DATABASE> --collection <COLLECTION> --type <FILETYPE> --headerline --file <FILENAME>`

Fill in the appropriate information in place of the `<>` values. Since these are CSV files, the `--headerline` flag is needed.

## License
MIT License

***
# Developer Notes

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

