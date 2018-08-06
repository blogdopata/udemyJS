/* Para Favs de Twitter Customizado   */

var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};

someLink =document.querySelectorAll('.HeartAnimation');
someLink = Array.prototype.slice.call(someLink, 0);

someLink.forEach(function(element) {
    simulateClick(element)
  })