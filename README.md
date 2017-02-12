https://novakw267.github.io/tic-tac-toe/

# List of technologies
- my computer
- google
- previous repos
- javascript
- html
- css
- bootstrap
- jquery
- ajax

# Planing
To start off I began with a rough wireframe in order to dictate what I wanted to attempt to contain. It ended up at least for the moment looking nothing like I had imagined. I plan to style it more in the future.

After which I focused on designing the engine and testing that in node. I knew the visual structure would take less time, and I am glad I went in that route. The engine proved to be difficult, but once I had some basic structure it became easier to decide my next move.
I started off designing the game board as an array, and basing the winning and tie game conditions based around set parameters in the array. With that I then wrote a function to determine by looking at the array and seeing what has changed in the array.
With that I was able to call the board in node, assign spaces to be taken, and test my win conditions to see if they could recognize when they were reached. Once that was working I created something to allow X, and O to alternate, and that allowed me to add in a if space is taken don't allow it to be written over.

Once I had this constructed I was able to go forward building an actual board to test my functionality. After I had a working game board, it was onto the api and building my user interface. I made a lot adjustments to this as I went. My goals were to make sure there was a clear display for all the actions a user can make on the site, as well as if an error occurred I wanted the user to know something didn't work. For the functionality I attained in this time period I would say I was successful in achieving the display I wanted.

After I had just about everything in place that I had time to include, there was definitely some bug fixing, and reimagining of how parts talked to each other and came together. The api, recording the games, and displaying the games definitely gave me the hardest time. It took a lot of trial and error as well as guidance and learning on the go to understand it.

All and all I would say I feel good about this project and it really helped to solidify the ideas and structures we were learning prior to starting the game.

# Unsolved Problems
- Expanding on the display game feature
- Styling
- I would love to have dove into the chat system
- As well as the multiplayer

# User stories
- 1. As a user I wanted an interactive game board
- 2. As a user I want to record my game stats
- 3. As a user I want to log in to see those stats
- 4. As a user I want to be able to share those stats
- 5. As a user I want to talk to other users

# Wire Frame
http://imgur.com/a/RSNAy

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
