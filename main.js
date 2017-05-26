$(document).ready(function() {
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

  front_img = "images/logo.png"

  console.log(skills)

  for (var i = 0; i < skills.length; i++) {
    var this_div = ".card" + i
    var front_card = "<img src='"+ front_img +"' class='face front'></img>"
    var back_card = "<img src='"+ skills[i] +"' class='face back'></img>"
    $(front_card).appendTo(this_div)
    $(back_card).appendTo(this_div)
      // $('<img>').attr("src", front_img).appendTo(this_div);
      // $('<img>').attr("src", skills[i]).appendTo(this_div);
     }

  $('img').on('click', function(e) {
      $(this).parent().toggleClass("flip");
  })

  // $('img.back').on('click', function(e) {
  //     $(this).toggleClass("return");
  // })
});
