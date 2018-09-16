function triangleTracker() {

  var sideAB = parseInt(document.getElementById("sideAB").value);
  var sideAC = parseInt(document.getElementById("sideAC").value);
  var sideBC = parseInt(document.getElementById("sideBC").value);

  var trianglePerimeter = [sideAB+ sideAC + sideBC];

    if (sideAB===sideAC && sideAB===sideBC) {
      alert ("Equilateral triangle of " + trianglePerimeter );
  }
    else if (sideAB==sideAC && sideAB!==sideBC) {
      alert ("Isosceles triangle");
  }
    else if (sideAB==sideBC && sideAB!==sideAC) {
    alert ("Isosceles triangle");
}
    else if (sideAC==sideBC && sideAC!==sideAB) {
  alert ("Isosceles triangle");
}
    else if (sideAB!==sideAC && sideAB!==sideBC) {
      alert ("Scalene triangle");
  }
    else {
      alert ("Not a triangle!");
  }

 }
