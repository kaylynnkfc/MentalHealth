function getBenefits() {

  var benefits = [
    {"x": "Yes", "total" : 0},
    {"x" : "No", "total":  0},
    {"x": "I don't know", "total" : 0},
    {"x":"Not eligible for coverage / N/A", "total":0}
  ];

  for (var i = 0; i<data.length; i++) {

    var val = data[i]['Benefits'];

    if (val != "") {
      for (var j = 0; j < 4; j++) {
        if (benefits[j]["x"] == val) {
          benefits[j]["total"]++;
        }
      }
    }
  }

  return benefits;
}
