// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Declare a variable, tbody
// Use d3.select to tell JS to search for the <tbody /> tags in the HTML
var tbody = d3.select("tbody");

//Building a table from data.js
function buildTable(data){
    // this line tells JS to use an empty string when creating a table; creates a blank canvas
    // standard way to clear data
    tbody.html('');

    // arrow notation forEach
    // dataRow represents each row of data iterated through the array 'data'
    // tell JS to find <tbody> tag within the HTML and add a table row <tr>
    data.forEach((dataRow) => {
    let row = tbody.append('tr');
    
    // Loop through each field in the dataRow and add each value as a table cell <td>
    // val is the argument which represents each item in the object (location, shape, duration); one object per row
    // we append each value of the object to a cell in the table <td>
    Object.values(dataRow).forEach((val) => {
        let cell = row.append('td');
        cell.text(val);
    }
    );
});
}



function handleClick(){

    // Grab the datetime value from the filter

    // select function selects the first element that matches the selector string: '#datetime'  id in the html tags
    // property function takes the 'value' from the values stored on the webpage and assigns it to the date variable
    let date = d3.select('#datetime').property('value');

    // set first filter to original data file (data.js); avoids user beginning with pre-filtered data
    let filteredData = tableData;

    //Check to see if a date was entered and filter the data using that date

    // date filter; if there is a date already set, use that date as the filter. otherwise return default data
    // .filter(row => row.datetime === date) is the line that applys a filter to the table data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the buildTable function; pass filteredData as arg
    // If no date is entered then filteredData = tableData
    buildTable(filteredData);
}


// Attach an event to detect a click on the filter button
// executes handleClick() when a button with an id of 'filter-btn' is clicked in the html
d3.selectAll('#filter-btn').on('click', handleClick)

// Creates a basic table of unfiltered data pulled directly from tableData
buildTable(tableData)