function buildCylinder(height, radius, symbol) {
    var cylinder = '';
    var space = ' ';
    var empty = ' ';
    
    for (var h = 0; h < height; h++) {
      for (var r = 0; r <= radius; r++) {
        if (r === 0 || r === radius) {
          cylinder += symbol;
        } else {
          if (h === 0 || h === height - 1) {
            cylinder += symbol;
          } else {
            cylinder += empty;
          }
        }
      }
      cylinder += '\n';
    }
    
    return cylinder;
  }
  
  var height = 6;
  var radius = 5;
  var symbol = '*';
  
  var cylinderPattern = buildCylinder(height, radius, symbol);
  document.getElementById('cylinder').innerText = cylinderPattern;