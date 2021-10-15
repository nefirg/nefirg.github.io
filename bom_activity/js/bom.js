document.getElementById("lastmodified").innerHTML = document.lastModified;

const input = document.querySelector('input');


const button = document.querySelector('button');


const list = document.querySelector('ul');


button.addEventListener('click', function() {
	let mychap = input.value;
	input.value = '';
	
	const listItem = document.createElement('li');
        
	const listText = document.createElement('span');
        
	const listBtn = document.createElement('button');

 listItem.appendChild(listText);
 listText.textContent = mychap;
 listItem.appendChild(listBtn);
 listBtn.textContent = 'Delete';
 list.appendChild(listItem);

 listBtn.onclick = function(e) {
   list.removeChild(listItem);
 }

 input.focus(); 
})

