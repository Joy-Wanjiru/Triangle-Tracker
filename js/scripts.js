function triangleTracker() {

  var sideAB = parseInt(document.getElementById("sideAB").value);
  var sideAC = parseInt(document.getElementById("sideAC").value);
  var sideBC = parseInt(document.getElementById("sideBC").value);

    if (sideAB===sideAC && sideAB===sideBC) {
      alert ("Equilateral triangle");
  }
    else if (sideAB==sideAC!==sideBC) {
      alert ("Isosceles triangle");
  }
    else if (sideAB==sideBC!==sideAC) {
    alert ("Isosceles triangle");
}
    else if (sideAC==sideBC!==sideAB) {
  alert ("Isosceles triangle");
}
    else if (sideAB!==sideAC!==sideBC) {
      alert ("Scalene triangle");
  }
    else {
      alert ("Not a triangle!");
  }

 }
