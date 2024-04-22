document.addEventListener("DOMContentLoaded", function() {
// Creating the text area
const textArea = document.createElement('textarea');
textArea.id = 'textInput';
textArea.placeholder = 'Enter text here...';
textArea.style.width = 'calc(100% - 20px)';
textArea.style.padding = '10px';
textArea.style.marginBottom = '10px';

document.getElementById('root').appendChild(textArea);

// Creating the button
const submitButton = document.createElement('button');

// Adding the button styles
submitButton.id = 'submitButton';
submitButton.textContent = 'Submit';
submitButton.style.width = '100%';
submitButton.style.padding = '10px';
submitButton.style.backgroundColor = 'green';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '4px';
submitButton.style.marginBottom = '20px';

document.getElementById('root').appendChild(submitButton);

// Creating the table
const table = document.createElement('table');
table.id = 'resultTable';
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
table.style.border = '1px solid #ddd';

// Creating the table header
const tableHead = document.createElement('thead');
const tableHeadRow = document.createElement('tr');
const wordNameHeader = document.createElement('th');

wordNameHeader.textContent = 'word_name';
wordNameHeader.style.padding = '10px';
wordNameHeader.style.border = '1px solid #ddd';

const wordFrequencyHeader = document.createElement('th');
wordFrequencyHeader.textContent = 'word_frequency';
wordFrequencyHeader.style.padding = '10px';
wordFrequencyHeader.style.border = '1px solid #ddd';

tableHeadRow.appendChild(wordNameHeader);
tableHeadRow.appendChild(wordFrequencyHeader);
tableHead.appendChild(tableHeadRow);
table.appendChild(tableHead);

// Creating the table's body
const tableBody = document.createElement('tbody');
tableBody.id = 'tableBody';
table.appendChild(tableBody);

// Append table to root
document.getElementById('root').appendChild(table);

// Adding button functionality
document.getElementById('submitButton').addEventListener('click', function() {

	// Get text from the user
  let userText = document.getElementById('textInput').value;
  
  // Tokenized input text + creation of frequency table
  const words = userText.split(/\s+/);
  const frequencyTable = {};
  
	words.forEach(function(word) {
  	if (frequencyTable[word]) {
      frequencyTable[word]++;
    } else {
    	frequencyTable[word] = 1;
    }
  });
  
  const wordRanking = Object.keys(frequencyTable).sort(function(a,b) {
  	return frequencyTable[b] - frequencyTable[a];
  });
  
  tableBody.innerHTML = '';
  
  for (let i = 0; i < Math.min(wordRanking.length, 5); i++) {
  	const word = wordRanking[i];
    const frequency = frequencyTable[word];
    const tableRow = document.createElement('tr');
    
    const wordCell = document.createElement('td');
    wordCell.textContent = word;
    wordCell.style.padding = '10px';
    wordCell.style.border = '1px solid #ddd';
    
    const frequencyCell = document.createElement('td');
    frequencyCell.textContent = frequency;
    frequencyCell.style.padding = '10px';
    frequencyCell.style.border = '1px solid #ddd';
    
    tableRow.appendChild(wordCell);
    tableRow.appendChild(frequencyCell);
    tableBody.appendChild(tableRow);
  }
  
 // Log the frequency table to the console
  console.log(frequencyTable);
});
})
