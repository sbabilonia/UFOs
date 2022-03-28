# UFOs
Module 11
he written analysis has the following:

Overview of the analysis:

The purpose is well defined (2 pt)
Results:

There is a description of how to perform a search, with images. (4 pt)
Summary:

The summary addresses one drawback of this webpage (2 pt)
The summary addresses two additional recommendations for further development (4 pt)

The purpose of this analysis was to demonstrate the use of JavaScript and HTML primarily (with a few lines of CSS) to build a small local website containing information about UFO sightings. The use of JavaScript in this project was implemented to code functions which apply tables and formatting to the website featuring BootStrap to enhance the html layout. JS was also used to create filters for user input to search for the date, city, state, country, and shape of each UFO sighting. 

HTML code made use of Bootstrap library to format the website
![image](https://user-images.githubusercontent.com/99628763/160309773-82b50c21-c13a-4534-9379-64f449edb60b.png)

Each filter takes an input from the user in HTML and JS filters the input and sends an output based on the filter back to the user. This is done by linking the "id" attribute in the HTML to a filterId that creates a new table based on the input by the user

The following shows the list of inputs for each filter: Date, City, State, Country, and Shape
![image](https://user-images.githubusercontent.com/99628763/160310584-954835e9-7b22-4675-b4d8-6a606aaa89ce.png)
![image](https://user-images.githubusercontent.com/99628763/160310753-30644267-809d-466f-8179-1ced601d3303.png)

Website with all data shown when there is no user input
![image](https://user-images.githubusercontent.com/99628763/160310953-a2ebc5c7-7594-4a79-8d7d-b05cf8af3eca.png)

Website response to user input. In order to perform a search, type into any filter box the criteria and press enter. An output showing the results based on search criteria will appear.
![image](https://user-images.githubusercontent.com/99628763/160311063-462cc7b8-c52c-4f3d-9da9-a1b2e890d550.png)

 If there are no results that fit the criteria no results are displayed
![image](https://user-images.githubusercontent.com/99628763/160311803-e4ffd988-e9f9-4f57-8407-01f2f7d3cd44.png)

In summary a website using html-bootstrap and JS functions to filtered tables of data based on user input provides a quick and easy way to access headliners in a UFO sightings list. One drawback of the filters is the input of the search criteria must be an exact match to the key-value pairs in the data.js. For example, using the state filter 'fl' will yield all articles with the state 'fl' only. Any other common inputs for Florida, such as FL, Fl, or Florida itself do not yield search results. This drawback applies to each filter. Two recommendations to improve this website: include alternative and common search criteria for each filter (ex. country: us, US, USA, United States, etc.) and inclusion of multiple criteria per filter such as the ability to search for multiple dates, states, or countries at once.



