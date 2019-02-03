// Interactivity demo 2

// zoom in and out of the moon
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
        body.id = 'zoom'
	} else {
		body.id = ''
	}

}


// Hover Text

var item = document.getElementById(".me");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{   
   document.getElementById("text").setAttribute("style", "display:block;")
}

function func1()
{  
    document.getElementById("text").setAttribute("style", "display:none;")
}


