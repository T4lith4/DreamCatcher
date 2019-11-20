# The follwoing technologies were utilized to build this app



Redux
React
Mongo DB
Node
Express
JSON Web Tokens


JSON Web Tokens (https://jwt.io/) will be set up for user authentication.

# How to install, and run the app

Open the project folder from your terminal (assuming you already have node installed
, if not please go to https://nodejs.org/en/download/)

Now you need to open the project directory root from your terminal,
(copy the path and then paste it next to cd, so cd/<pasted folder path>))
and run the following from the command line:


npm install

Change directory into the client folder 
(cd/<root folder>/client) and then run 

npm install

Before you can go ahead, you need to create your own MongoDB Atlas
Cluster so that you can insert your own Mongo URI into the project.

Should you not have Mongo set up, please follow the instructions below:

1.Visit https://www.mongodb.com/download-center#atlas
2.Select the free Community Server option
3.Download the latest release of MongoDB for either Windows, Linux or OSX
4.Once the download is complete, follow the installation instructions for installing
MongoDB as a service for your specific operating system:

 macOS:
 https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
 Windows:
 https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
 Linux:
 https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/

Now that MongoDB has been installed, the mongo executable needs to be added to path:

1.Search for your MongoDb installation bin folder 
2.Copy the path (e.g.: C:\Program Files\MongoDB\bin). Right click My Computer >
  Properties > Advanced system settings > Environment Variables > System
  variables > Look for "Path" > Edit > New > Paste in the path to your Mongodb
  bin folder > Restart your terminal. 
3.Check that the Mongo shell has been correctly installed by typing
  “mongo --version” in your command line interface.

Now you need to create a cluster. Follow this link and see this tutorial
for instructions : https://www.youtube.com/watch?v=KKyag6t98g8

Once you have your Mongo Connection URI and you have inserted your
unique username and password, open the project folder and navigate to the
root of the project and search for:

config/default.json

Inside the default.json, insert your Mongo URI in place of mine:
{
    "mongoURI":"INSERT URI HERE",
    "jwtSecret" : "sl_secret"
}

You can also set the jwtSecret to anything you like.

Now you may go ahead from your terminal and access the root folder and run 

npm run dev


# Deployment link

https://peaceful-bastion-44849.herokuapp.com/

# A description of where and how the app was deployed

I deployed my application through Heroku. In order to 
deploy with Heroku there are 4 things that you need;
The Heroku CLI, Git, and a Heroku account (which is free.)

I have deployed the frontend and backend together as I believe it
is simpler.

Install Git - https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
Install Heroku CLI - https://devcenter.heroku.com/articles/heroku-cli#download-and-install
Create a Heroku Account - https://signup.heroku.com/

To make sure that all has been installed correctly, type the following commands:

Node -v
Heroku -v
git --version

Once you have all of the above up and running, open up your terminal and navigate (cd) into
the root folder of the project. In your terminal, type the following commands:

heroku login (Enter your Heroku credentials)
git init
git add .
git commit -m “initial commit”
heroku create (You should see two links after running this command. Copy the second one)
git remote add heroku PASTE THE LINK YOU JUST COPIED
git push heroku master
heroku open

The app should then be opened in your browser.




