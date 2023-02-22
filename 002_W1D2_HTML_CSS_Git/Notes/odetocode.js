

var temp = JSON.parse(localStorage["reflections"]);
$(".journalNumber").after(
    `<p>${Object.keys(temp).length+}</p>`
);



  // function getJournalNumber() {
  //   var tempJournalNum = JSON.parse(localStorage["reflexions"]);
  //   $(".journalNumber").after(
  //     `<p>${Object.keys(tempJournalNum).length}</p>`
  //   );
  // }

// getJournalNumber();
//   function getJournalNumber() {
//     var tempJournalNum = localStorage["reflexions"];
//     $(".journalNumber").after(
//       `<p>${Object.keys(tempJournalNum).length}</p>`
//     );
//   }

// getJournalNumber();

function getJournalNumber() {
    var tempJournalNum = localStorage.getItem("reflexions");
    var numObjects = Object.keys(tempJournalNum).length;
    $(".journalNumber").after(`${numObjects}`);
  }
  
  getJournalNumber();
  
  // tempJournalNum[Object.keys(tempJournalNum).length+1] = "test";
  // localStorage["reflections"] = JSON.stringify(temp);
  