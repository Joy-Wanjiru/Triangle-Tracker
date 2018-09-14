function (triangletracker);
var sideAB = parseInt(document.getElementbyId("AB").value);
var sideAC = parseInt(document.getElementbyId(AC).value);
var sideBC = parseInt(document.getElementbyId(BC).value);

var triangle= ["sideAB", "sideAC", "sideBC"]

  if sideAB==sideAC && sideAB==sideBC && sideAC==sideBC;  {
    document.write ("Equilateral triangle");
    answer.textContext
}
  else if sideAB==sideAC && sideAB==sideBC && sideBC!==sideAB; {
    document.write ("Isosceles triangle.");
    answer.textContext
  }
  else if sideBC==sideAB && sideBC=sideAC && sideAB!==sideAC; {
    document.write ("Isosceles triangle");
    answer.textContext
  }

  else if sideAB!==sideAC!==sideBC; {
    document.write ("Scalene triangle");
    answer.textContext
  }

  else {
    document.write (Not a triangle!);
    answer.textContext
}
