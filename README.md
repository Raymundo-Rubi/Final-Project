#FEWD - Final Project Portfolio


##Challenges

the first challenge I stumbled upon was getting an __img__ tag to zoom on hover, without exceeding the borders of div that surrounded it. I had added the :hover pseudo css selector to the outside div, but everytime I hovered over it, the Img within it would stretch out past it. I fixed this by adding a "wrapper" class to the div and then setting that wrappers overflow to hidden.

##Proud Breakthrough Moment

###Fullscreen Overlay

Getting the Fullscreen Overlay Nav to work was a big one. It was combination of CSS and Jquery that eventually got it to work the way I envisioned. Basically I set on Aside with all my nav contents inside it to visibility: hidden and opacity: 0. I then created an .open class and .close class that would be toggled with Jquery using a img(logo) as the event object.

###Media Queries

Another cool breakthrough moment was learning how to make my site responsive with Media Query. Basically it sets a "block" of css to be active only when a certain breakpoint is reached such as max-width and min-width.

Although I have a combination of Bootstrap and Media Queries to make my site responsive and wish I were a bit cleaner by sticking to one. possibly Media Query to not reliant on a framework and have more fundamental tech down.

Overall, everything was a breakthrough moment, just constant stumbles that I had to work my way through.

##One Thing I'd do Different

Percentages versus pixels. Theres all these different ways to represent size of elements and towards the end of building my project I realized that percentages is the most responsive and intuitive way to size everything. In the future I'll learn to implement percentages or if I learn more, em's within my projects.


##Tech Used

HTML, CSS, Bootstrap, JQuery, Media Queries, Semantic Elements