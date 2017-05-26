$(document).ready(function() {
  var clicks = 0; //keep track of number of clicks
  var firstChoice; //first card clicked - will store the index
  var secondChoice; //second card clicked - will store the index
  var firstChoiceDiv; //first card clicked - will store the parent div
  var secondChoiceDiv; //second card clicked - will store the parent div

  skills = []
  skills[0] = "images/ruby.png"
  skills[1] = "images/html.png"
  skills[2] = "images/ai.png"
  skills[3] = "images/js.png"
  skills[4] = "images/git.png"
  skills[5] = "images/css.png"
  skills[6] = "images/jquery.png"
  skills[7] = "images/ps.png"
  skills[8] = "images/sql.png"
  skills[9] = "images/rails.png"

  var front_img = "images/logo.png"

  for (var i = 0; i < 20; i++) {
    if (i > 9) { //for the second set of cards
      var this_div = ".card" + i;
      var front_card = "<img src='"+ front_img +"' class='face front'></img>";
      var back_card = "<img src='"+ skills[i - 10] +"' class='face back'></img>";
      $(front_card).appendTo(this_div);
      $(back_card).appendTo(this_div);
    } else { //for the first set of cards
    var this_div = ".card" + i;
    var front_card = "<img src='"+ front_img +"' class='face front'></img>";
    var back_card = "<img src='"+ skills[i] +"' class='face back'></img>";
    $(front_card).appendTo(this_div);
    $(back_card).appendTo(this_div); }
     }

  $('img').on('click', function(e) {
      if (clicks === 2) {
        flipCards(firstChoiceDiv, secondChoiceDiv);
        clicks = 0
        return;
      } else if (clicks === 0) {
          $(this).parent().toggleClass("flip");
          clicks++;
          firstChoice = findChoiceIndex($(this).parent());
          // console.log(firstChoice);
          firstChoiceDiv = findDivClass($(this).parent());
          // console.log(firstChoiceDiv);
      } else {
          $(this).parent().toggleClass("flip");
          secondChoice = skills.indexOf($(this).attr("src"));
          clicks++;
          secondChoice = findChoiceIndex($(this).parent());
          // console.log(secondChoice);
          secondChoiceDiv = findDivClass($(this).parent());
          // console.log(secondChoiceDiv);
      }
  })

  function checkMatch(firstChoice, secondChoice) {
    if (firstChoice === secondChoice) {

      //match
    } else {
      //reset
      clicks = 0;
    }
  }

  function findChoiceIndex(div) {
    var divClass = $(div).attr("class");
    divClass = divClass.split(" ");
    divClass = divClass[0];
    var imageFind = "div." + divClass + " img.back";
    imageFind = $(imageFind).attr("src");
    var choice = skills.indexOf(imageFind);
    return choice;
  }

  function findDivClass(divClicked) {
    var divClass = $(divClicked).attr("class");
    divClass = divClass.split(" ");
    divClass = divClass[0];
    return divClass
  }

  function flipCards(firstChoiceDiv, secondChoiceDiv) {
    // var divClassFirst = ".card" + firstChoice
    console.log(firstChoiceDiv)
    // var divClassSecond = ".card" + secondChoice
    console.log(secondChoiceDiv)
    $("." + firstChoiceDiv).toggleClass("flip");
    $("." + secondChoiceDiv).toggleClass("flip");
  }

});
