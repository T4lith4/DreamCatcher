# SOFTWARE REQUIREMENTS AND ARCHITECTURE DOCUMENTATION FOR DREAM CATCHER

# System Architecture

Stack:

Redux
React
Mongo DB
Node
Express

The web stack I plan to use will be the MERN Stack, as well as Redux and JWT
(JSON Web Tokens https://jwt.io/) will be set up for user authentication.

I have chosen this architecture as it is the one I have most experience with,
and it is renowned for it's efficiency and performance. Express will set up
a server, whereas node will allow users to perform actions (create, read and
delete )
allow me to integrate with the mongo database and the modular use of react
components will deliver the results I need.

Redux has the functionality will allow me to integrate a store for all of my users.


# System Requirements

How it will work?

The interface of the application presents a login or register button in the navigation
of the application which the user will see as soon as they navigate to the hosted site.

Should they not be authorized as a registered user, by clicking the "register" button, they will
be able to enter their username, email address and password into a modal. The data entered into the 
modal will be saved inside the Mongo Database. The user password will be hashed and a token will be allocated
to the user which will allow them authorized access to the site where they can perform actions.

Should a user be authorized as a registered user, by clicking on the "login" button, they will be able to
enter their email address and password into a modal. The data entered into the modal will be checked against
the existing users and should the credentials be correct, the user will be welcomed by their username to the
site in the navbar. A token will be allocated to the user which will allow them authorized access to the
site where they can perform actions.

Authorized access to the site permits the user to add, view and delete their dreams. There is a 
"add dream" button beneath the navbar which when clicked will present the user with a modal. The
modal accepts the data entered as the dream, this gets allocated to the database, as well as the 
date of the dream entry, which then is presented in the form of a card on the homepage for the user to see.

The dream data has two headings "Dream Entry" which has the allocated date of entry beneath it, and "Dream Summary"
which has the dream the user entered beneath it. On the card itself is a delete button, which will delete the
dream from the user interface as well as from the database.

Should a user wish to logout, there will be a logout button displayed in place of the log in button. This will
log the user out and redirect them to the visitor page where they can log in again is they so wish to.

# Who will use it?

My app is directed at anyone interested in recalling and documenting their dreams.
I can imagine that my users range from elderly people or even younger scholars.
I believe my app can be used by ages 10 and above.

# How will they benefit from it?

The concept of my appp is derived from a strategy that is proven to help improve memory inspired by Jim Kwik.
Dream Recall and documenting engages the part of the brain which allows you to not only retain details but also process them.
In addition to the memory benefits of the app, the user experience is tailored to be easy and fast.

# Styling:

I have chosen to implement react-strap features such as Modals, Navigation and
buttons. The rest of the styling is either done with inline css or css from an 
external stylesheet.

# How does my app stand apart? 

DreamCatcher stands apart from similar dream recording apps like Shadow because it remains private to the user. Shadow might 
potentially share their data with scientists who study dreams while DreamCatcher will keep user information and dreams private.

# Wireframes

Log in User: 
https://drive.google.com/file/d/1UxMBcuUDixOR8f1e6NfE2etkCDOkzf-8/view?usp=sharing

Register User:
https://drive.google.com/file/d/11BP8z9NTRUs51X8OFc-bGWP2R80pnQyS/view?usp=sharing

User Dream:
https://drive.google.com/file/d/1PZE7B6WzRS80ZF2ZA9vjYtgk5v81Z-kY/view?usp=sharing

Flow Charts:
https://drive.google.com/file/d/1S0ZXf6Is-DlRrYAJs4Pqyck9Pd5BTatK/view?usp=sharing
https://drive.google.com/file/d/1z6WWWKu8b3_c5DYPQPhxNozsuC3q1QA2/view?usp=sharing

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

# How to use the app

Register for DreamCatcher by entering in your email address, name and password.
You should then be directed to a user interface where you see a heading
"What is your subconcious telling you?"

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

Your app should then be opened in your browser.




