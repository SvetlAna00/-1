but.onclick = function(){
    var val = document.getElementById('input').value;
    table = document.getElementById('tab');
    val = document.getElementById('input').value;
    gridSizes = val.split(',');
    gridSizes = gridSizes.map(Number)
    // console.log(gridSizes);
    
    if(val == 2 || val == '' || val < 0){
        document.getElementById('string').innerHTML = "Such a square does not exist!";
        table.style.display = 'none';
    }
    else{
        document.getElementById('string').innerHTML = "Built a square in size: "+val;
        table.style.display = 'table';
        createTable();
    }
};

function clickPress(event) {
    table = document.getElementById('tab');
    if (event.keyCode == 13) {
        var val = document.getElementById('input').value;
    
        if(val == 2 || val == '' || val < 0){
            document.getElementById('string').innerHTML = "Such a square does not exist!";
            table.style.display = 'none';
        }
        else{
            document.getElementById('string').innerHTML = "Built a square in size: "+val;
            table.style.display = 'table';
            createTable();
        }
    }
}

var val,
    button = document.getElementById('but'),
    gridSizes = [];

function createTable() {
  if(val !== 2 || val !== '' || val > 0){
  	var gridSize = gridSizes[document.getElementById("counter").selectedIndex],
    	table = document.getElementById('tab'),
      numCount = 1,
      x = '0',
      y = Math.floor(gridSize / 2).toString(),
      numRows = document.getElementById('tab').rows.length;
    initVal = 1;
    while (numRows !== 0) {
      table.deleteRow(0);
      numRows--;
    }
    table.height = table.width = gridSize * 50;
    for (var row = 0; row < gridSize; row++) {
      var tr = document.createElement('tr');
      for (var col = 0; col < gridSize; col++) {
        var td = document.createElement('td');
        td.align = 'center';
        td.className = 'boundary';
        //td.innerHTML = col;
        td.id = row.toString() + col.toString();
        tr.appendChild(td);
      }
      document.getElementById('tab').appendChild(tr);
    }
    // starting point of magic square
    document.getElementById(x + y).innerHTML = 1;
    x_val = parseInt(x);
    y_val = parseInt(y);
    while (numCount < gridSize * gridSize) {
      y_offset = y_val - 1;
      x_offset = x_val - 1;
      if (y_offset < 0) {
        y_offset += gridSize;
      }
      if (x_offset < 0) {
        x_offset += gridSize;
      }
      gridId = x_offset.toString() + y_offset.toString();
      var grid = document.getElementById(gridId);
      if (grid.innerHTML === '') {
        grid.innerHTML = ++initVal;
        x_val = x_offset;
        y_val = y_offset;
        numCount++;
      } else {
        x_offset = x_val + 1;
        y_offset = y_val;
        gridId = x_offset.toString() + y_offset.toString();
        var grid = document.getElementById(gridId);
        grid.innerHTML = ++initVal;
        x_val = x_offset;
        y_val = y_offset;
        numCount++;
      }
    }
  }
}
