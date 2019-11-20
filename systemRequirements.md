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

# Deployment:

I will be deploying my app with Heroku as it is free and there is good
documentation and support.

# Styling:

I have chosen to implement react-strap features such as Modals, Navigation and
buttons. The rest of the styling is either done with inline css or css from an 
external stylesheet.

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



