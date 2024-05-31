button = document.getElementById("addFile")
button.style = "display: none"
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      document.getElementById("fileInput").style = "opacity: 0"
      button.style = "display: block"
      const contents = e.target.result;
      const lines = contents.split('\n');
      const headers = lines[0].split(',');
  
      // Clear existing table
      const tableHead = document.querySelector('#dataTable thead tr');
      tableHead.innerHTML = '';
      const tableBody = document.querySelector('#dataTable tbody');
      tableBody.innerHTML = '';
  
      // Create table headers
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHead.appendChild(th);
      });
  
      // Populate table with data
      for (let i = 1; i < lines.length; i++) {
        const rowData = lines[i].split(',');
        if (rowData.length === headers.length) {
          const row = document.createElement('tr');
          rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            row.appendChild(td);
          });
          tableBody.appendChild(row);
        }
      }
    };
  
    reader.readAsText(file);
  });
  

function addFileButton(){
    document.getElementById("fileInput").style = "opacity: 100"
}


function changeTheme(){
  let main = document.getElementById("main");
  main.style = "background-color: rgba(0, 0 , 0, .5);"
      
}