function triangleTracker() {

  var sideAB = parseInt(document.getElementById("sideAB").value);
  var sideAC = parseInt(document.getElementById("sideAC").value);
  var sideBC = parseInt(document.getElementById("sideBC").value);

  var trianglePerimeter = [sideAB + sideAC + sideBC];

  var twoSides1 = sideAB+sideAC
  var twoSides2 = sideAB+sideBC
  var twoSides3 = sideAC+sideBC

    if (sideAB===sideAC && sideAB===sideBC) {
      alert ("Great job! You've created an Equilateral triangle of " + trianglePerimeter + "cm/m");
  }
    else if (twoSides1<=sideBC || twoSides2<=sideAC || twoSides3<=sideAB ) {
      alert ("Sorry! Not a triangle. Try again.");
  }
    else if (sideAB==sideAC && sideAB!==sideBC) {
      alert ("Kudos! You've created an Isosceles triangle of " + trianglePerimeter + "cm/m");
  }
    else if (sideAB==sideBC && sideAB!==sideAC) {
      alert ("Kudos! You've created an Isosceles triangle of " + trianglePerimeter + "cm/m");
  }
    else if (sideAC==sideBC && sideAC!==sideAB) {
      alert ("Kudos! You've created an Isosceles triangle of " + trianglePerimeter + "cm/m");
  }

    else if (sideAB!==sideAC && sideAB!==sideBC) {
      alert ("Amazing work! You've created a Scalene triangle of " + trianglePerimeter + "cm/m");
  }
    else {
      alert ("Sorry! Not a triangle. Try again.");
  }
}
