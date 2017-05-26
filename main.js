$(document).ready(function() {
  var clicks = 0; //keep track of number of clicks
  var firstChoice; //first card clicked - will store the index
  var secondChoice; //second card clicked - will store the index

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

  console.log(skills)

  for (var i = 0; i < 20; i++) {
    if (i > 9) {
      var this_div = ".card" + i;
      var front_card = "<img src='"+ front_img +"' class='face front'></img>";
      var back_card = "<img src='"+ skills[i - 10] +"' class='face back'></img>";
      $(front_card).appendTo(this_div);
      $(back_card).appendTo(this_div);
    } else {
    var this_div = ".card" + i;
    var front_card = "<img src='"+ front_img +"' class='face front'></img>";
    var back_card = "<img src='"+ skills[i] +"' class='face back'></img>";
    $(front_card).appendTo(this_div);
    $(back_card).appendTo(this_div); }
     }

  // for (var i = 10; i < skills.length; i++) {
  //  var this_div = ".card" + i;
  //  var front_card = "<img src='"+ front_img +"' class='face front'></img>";
  //  var back_card = "<img src='"+ skills[i - 10] +"' class='face back'></img>";
  //  $(front_card).appendTo(this_div);
  //  $(back_card).appendTo(this_div);
  //   }

  $('img').on('click', function(e) {
      if (clicks === 2) {
        flipCards(firstChoice, secondChoice);
        clicks = 0
        return;
      } else if (clicks === 0) {
          $(this).parent().toggleClass("flip");
          clicks++;
          var div = $(this).parent()
          var divClass = $(div).attr("class")
          divClass = divClass.split(" ")
          divClass = divClass[0]
          var imageFind = "div." + divClass + " img.back"
          imageFind = $(imageFind).attr("src")
          firstChoice = skills.indexOf(imageFind)
      } else {
          $(this).parent().toggleClass("flip");
          secondChoice = skills.indexOf($(this).attr("src"));
          clicks++;
          var div = $(this).parent()
          var divClass = $(div).attr("class")
          divClass = divClass.split(" ")
          divClass = divClass[0]
          var imageFind = "div." + divClass + " img.back"
          imageFind = $(imageFind).attr("src")
          secondChoice = skills.indexOf(imageFind)
          // setInterval(checkMatch(firstChoice, secondChoice), 1000);
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

  function flipCards(firstChoice, secondChoice) {
    var divClassFirst = ".card" + firstChoice
    console.log(divClassFirst)
    var divClassSecond = ".card" + secondChoice
    console.log(divClassSecond)
    $(divClassFirst).toggleClass("flip");
    $(divClassSecond).toggleClass("flip");
  }

});
