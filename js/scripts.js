function triangleTracker() {

  var sideAB = parseInt(document.getElementById("sideAB").value);
  var sideAC = parseInt(document.getElementById("sideAC").value);
  var sideBC = parseInt(document.getElementById("sideBC").value);

  var trianglePerimeter = [sideAB+ sideAC + sideBC];

    if (sideAB===sideAC && sideAB===sideBC) {
      alert ("Equilateral triangle of " + trianglePerimeter + "cm/m");
  }
    else if (sideAB==sideAC && sideAB!==sideBC) {
      alert ("Isosceles triangle" + trianglePerimeter + "cm/m");
  }
    else if (sideAB==sideBC && sideAB!==sideAC) {
    alert ("Isosceles triangle" + trianglePerimeter + "cm/m");
  }
    else if (sideAC==sideBC && sideAC!==sideAB) {
  alert ("Isosceles triangle" + trianglePerimeter + "cm/m");
  }
    else if (sideAB!==sideAC && sideAB!==sideBC) {
      alert ("Scalene triangle" + trianglePerimeter + "cm/m");
  }
    else {
      alert ("Not a triangle!");
  }

 }
