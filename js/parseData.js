function getData() {

  var leave = [
    {"x" : "Very easy", "total":  0},
    {"x" : "Somewhat easy", "total" : 0},
    {"x" : "Neither easy nor difficult", "total":0},
    {"x" : "Somewhat difficult", "total":0},
    {"x" : "Very difficult", "total" : 0},
    {"x" : "I don't know", "total":0}
  ];

  var benefits = [
    {"x": "Yes", "total" : 0},
    {"x" : "No", "total":  0},
    {"x": "I don't know", "total" : 0},
    {"x":"Not eligible for coverage / N/A", "total":0}
  ];

  var productivity = [
    {"x": "Yes", "total" : 0},
    {"x" : "No", "total":  0},
    {"x": "Unsure", "total" : 0},
    {"x":"Not applicable to me", "total":0}
  ];

  var currentDisorder = [
    {"x": "Yes", "total" : 0},
    {"x": "No", "total" : 0},
    {"x": "Maybe", "total" : 0}
  ]


  for (var i = 0; i<data.length; i++) {

    var leaveVal = data[i]['MentalLeave'];
    var benefitsVal = data[i]['Benefits'];
    var prodVal = data[i]['Prod'];
    var disorderVal = data[i]['CurMental'];

    if (leaveVal != "") {
      for (var j = 0; j < leave.length; j++) {
        if (leave[j]["x"] == leaveVal) {
          leave[j]["total"]++;
        }
      }
    }

    if (benefitsVal != "") {
      for (var j = 0; j < benefits.length; j++) {
        if (benefits[j]["x"] == benefitsVal) {
          benefits[j]["total"]++;
        }
      }
    }

    if (prodVal != "") {
      for (var j = 0; j < productivity.length; j++) {
        if (productivity[j]["x"] == prodVal) {
          productivity[j]["total"]++;
        }
      }
    }

    if (disorderVal != "") {
      for (var j = 0; j < currentDisorder.length; j++) {
        if (currentDisorder[j]["x"] == disorderVal) {
          currentDisorder[j]["total"]++;
        }
      }
    }

  }

  return [benefits, leave, productivity, currentDisorder];
}
