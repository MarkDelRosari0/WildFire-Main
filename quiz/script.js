$(document).ready(function(){
  /* store questions and answers */
  var q = [
    "Which of the following best describe a wildfire?",
    "How many biological sons and daughters does Jaime Lannister have?",
    "What does Samwell stab a White Walker with that causes it to shatter like ice?",
    "What is the name of Ned Stark's executioner?",
    "What does Tyrion Lannister get his squire Podrick in thanks for saving his life?",
    
  ];
  var a = [
    "a. A natural disaster caused by lightning strikes ", "    b. A human-caused fire in a forested area", "    c. A controlled burn for ecological management","d. A large, uncontrolled fire in a forested area",
    "0", "  1", "3", "2",
    "A dagger", "Valyrian steel", "An arrow", "Dragonglass",
    "The Hound", "Ser Llyn Payne", "Jamie Lannister", "Ser Barristan Selmy",
    "A bag of gold", "3 Whores", "A sword", "Wine",
   
          ];
  var qCount = 0;
  var aCount = 0;
  var score = 0;
  var clickCount = 0;
  /* store quotes and images */
  var quote = ["You know nothing.", "My little birds are everywhere, they whisper to me the strangest stories.", "An honorable effort.", "I understand the way this game is played."];
  var pic = ["url('https://static1.purebreak.com.br/articles/8/18/45/8/@/92633-em-game-of-thrones-jon-snow-kit-200x200-1.jpg')", "url('http://s1.r29static.com//bin/entry/678/x,80/1630506/image.jpg')", "url('http://www.quirkbooks.com/sites/default/files/u1227/Brienneoftarth%20-%20Wikipedia.jpg')", "url('http://st1.bollywoodlife.com/wp-content/uploads/photos/tyrion-lannister-in-a-still-from-game-of-thrones-season-6-201602-666603.jpg')"];
  /* hide main quiz and quiz result */
  $('#question').hide();
  $('.answer').hide();
  $('#tabContainer').hide();
  $('#quizEnd').hide();
  /* Start Quiz click */
  $('#welcome').click(function(){
    $(this).fadeOut(500, function(){
      $('#question').fadeIn(500);
      $('.answer').fadeIn(500);
      $('#tabContainer').fadeIn(500);
    })
  })
  /* display questions and answers and score*/
  $('#question').text(q[qCount]);
  $('#answer1').text(a[aCount]);
  $('#answer2').text(a[aCount + 1]);
  $('#answer3').text(a[aCount + 2]);
  $('#answer4').text(a[aCount + 3]);
  $('#scoreNum').text(score);
  /* answering questions & update score */
  $('.answer').click(function(){
    clickCount++;
    if ($(this).text() === a[3] || $(this).text() === a[7] || $(this).text() === a[9] || $(this).text() === a[12] || $(this).text() === a[19] || $(this).text() === a[20] || $(this).text() === a[27] || $(this).text() === a[31] || $(this).text() === a[32] || $(this).text() === a[38] || $(this).text() === a[41] || $(this).text() === a[44] || $(this).text() === a[51] || $(this).text() === a[52] || $(this).text() === a[57] || $(this).text() === a[63] || $(this).text() === a[65] || $(this).text() === a[68] || $(this).text() === a[72] || $(this).text() === a[79]) {
      $(this).css("background", "#337147");
      if (clickCount === 1) {
        score++;
        $('#scoreNum').text(score);
      }
    } else {
      $(this).css("background", "#BE2625");
    }
  })
  /* iterateing through questions */
  $('#next').click(function(){
    clickCount = 0;
    $('.answer').css("background", "linear-gradient(120deg, burlywood, peru, tan, burlywood, peru)");
    if (qCount < q.length - 1) {
      qCount++;
      aCount+=4;
      $('#question').text(q[qCount]);
      $('#answer1').text(a[aCount]);
      $('#answer2').text(a[aCount + 1]);
      $('#answer3').text(a[aCount + 2]);
      $('#answer4').text(a[aCount + 3]);
      if (qCount === q.length - 1) {
        $('#next').text("See Result!")
        /* end of quiz final score and start over */
  switch(score) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      $('#charQuote').text(quote[0]);
      $('#charPic').css("background-image", pic[0]);
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      $('#charQuote').text(quote[1]);
      $('#charPic').css("background-image", pic[1]);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      $('#charQuote').text(quote[2]);
      $('#charPic').css("background-image", pic[2]);
      break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      $('#charQuote').text(quote[3]);
      $('#charPic').css("background-image", pic[3]);
      break;
  }
      }
    } else {
      $('#question').fadeOut(500);
      $('.answer').fadeOut(500);
      $('#tabContainer').fadeOut(500);
      $('#quizEnd').delay(500).fadeIn(500);
    }
  })
  $('#startOver').click(function(){
    $('#welcome').delay(500).fadeIn(500);
    $('#quizEnd').fadeOut(500);
    /* reset counters and displays */
    qCount -= qCount;
    aCount -= aCount;
    score -= score;
    $('#question').text(q[qCount]);
    $('#answer1').text(a[aCount]);
    $('#answer2').text(a[aCount + 1]);
    $('#answer3').text(a[aCount + 2]);
    $('#answer4').text(a[aCount + 3]);
    $('#next').text("Next");
  })
})