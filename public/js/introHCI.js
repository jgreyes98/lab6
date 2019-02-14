'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var url = "/project/"+idNumber;
	var request = $.get(url, addProject);

	console.log("Url is " + url);
}

function addProject(res){
	//print out response
	console.log(res);
	
	//get projectid
	var id = "project"+res.id;
	console.log("Project div id: "+id);

	//create string to insert
	var title = '<p>'+res.title+'</p>';
	var date = '<p>'+res.date+'</p>';
	var image = '<img src="'+res.image+'" class="detailsImage">';
	var summary = '<p>'+res.summary+'</p>';
	var message = title+date+image+summary;
	$('div#' + id + " div.details").html(message);
}
