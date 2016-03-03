//If using jQuery, uncomment the following to use jQuery methods for searching the site index with lunr.js
jQuery(function() {
    // Initialize lunr with the fields to be searched, plus the boost.
    window.idx = lunr(function() {
        this.field('id');
        this.field('href');
        this.field('title');
        this.field('description', { boost: 50 });
        this.field('tags');
        this.field('categories');
        this.field('content', { boost: 20 })
    });

    // Get the generated search_data.json file so lunr.js can search it locally.
    window.data = $.getJSON('/site-index.json');

    // Wait for the data to load and add it to lunr
    window.data.then(function(loaded_data) {
        $.each(loaded_data, function(index, value) {
            window.idx.add(
                $.extend({ "id": index }, value)
            );
        });
    });

    // Run search query on keyup with focus in site search
    $("#site-search").keyup(function(event) {
        var query = $("#search-input").val(); // Get the value for the text field
        if ((query.length > 2) && (event.keyCode !== 9)) {
            var results = window.idx.search(query); // Get lunr to perform a search
            display_search_results(results); // Hand the results off to be displayed
        }
    });

    function display_search_results(results) {
        var $search_results = $("#search-results");

        // Wait for data to load
        window.data.then(function(loaded_data) {

            // Are there any results?
            if (results.length) {
                $search_results.empty(); // Clear any old results

                // Iterate over the results
                results.forEach(function(result) {
                    var item = loaded_data[result.ref];

                    // Build a snippet of HTML for this result
                    var appendString = '<li><a href="' + item.href + '">' + item.title + '</a><p>' + item.description + '</li>';

                    // Add the snippet to the collection of results.
                    $search_results.append(appendString);
                });
            } else {
                // If there are no results, let the user know.
                $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
            }
        });
    }
});
