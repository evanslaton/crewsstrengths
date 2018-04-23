$(document).ready(function() {

  let num1;
  let num2;

  var davidR = {
    name: 'David R. ',
    src: "img/testimonials/david-r.png",
    src2: "../img/testimonials/david-r.png",
    testimonial: " After working with Donald, I recognize behaviors I used to identify as character faults, as expressions of the gifts with which I am created and wired. This has proved extremely valuable because I have leveraged those gifts to create real results.  I\'ve experienced a change in my marriage, my relationship with my son, and especially things around building my business and working with clients."
  };

  var jimA = {
    name: 'Jim A. ',
    src: "img/testimonials/jim-a.png",
    src2: "../img/testimonials/jim-a.png",
    testimonial: " I strongly recommend Donald\'s coaching. Donald helped me identify the working dynamics of my StrengthFinder 2.0 assessment results. In only a few weeks, I had several job interviews and at least one offer. I credit Donald\'s great work for this turnaround and would recommend his coaching to any individual or organization seeking to get maximum yield from the Strengths assessment."
  };

  var justinR = {
    name: 'Justin R. ',
    src: "img/testimonials/justin-r.png",
    src2: "../img/testimonials/justin-r.png",
    testimonial: " It wasn\'t until meeting with Donald for 1\-on\-1 coaching that I began to internalize what my StrengthsFinder assessment results really meant.  Becoming more self\-aware has been truly powerful. If you\'re looking to tap into your strengths, I\'d highly recommend working with Donald I. Crews."
  };

  var deniseT = {
  name: 'Denise T. ',
  src: "img/testimonials/denise-t.png",
  src2: "../img/testimonials/denise-t.png",
  testimonial: " In working with Donald, I\'ve learned \(and continue to learn\) how to \'name, claim, and aim\' my strengths.  If you\'ve been spinning your wheels trying to figure\-out what you want to be when you grow up, you\'ll want to reach\-out to Donald ASAP\!"
  };

  var cynthiaD = {
  name: 'Cynthia D. ',
  src: "img/testimonials/cynthia-d.png",
  src2: "../img/testimonials/cynthia-d.png",
  testimonial: " I think we should bottle Donald\'s enthusiasm and sip on it throughout our days."
  };

  var dedraP = {
  name: 'Dedra P. ',
  src: "img/testimonials/dedra-p.png",
  src2: "../img/testimonials/dedra-p.png",
  testimonial: " Donald is not only an expert in his field, but a \'top\-notch\' presenter. I\'ve had the opportunity to attend several of Donald\'s presentations and continue to be overwhelmed by his level of knowledge as well as engagement. He is a true resource that provides expertise and dedication to his craft."
  };

  var annR = {
  name: 'Ann R. ',
  src: "img/testimonials/ann-r.png",
  src2: "../img/testimonials/ann-r.png",
  testimonial: " Donald is a wonderful presenter. He brings his subject matter to life by sharing real world examples audiences can relate to and understand. I have heard numerous positive comments after his presentations. Participants appreciate his depth of knowledge and personable delivery."
  };

  let testimonials = [davidR, jimA, justinR, deniseT, cynthiaD, dedraP, annR];


  //Generates two random number that are NOT the same
  var randomIntFromInterval = (min, max) => {
      num1 = Math.floor(Math.random()*(max-min+1)+min);
      num2 =  Math.floor(Math.random()*(max-min+1)+min);

      if (num1 === num2) {
        randomIntFromInterval(0, testimonials.length - 1);
      }
  };

  randomIntFromInterval(0, testimonials.length - 1);


  //Testimonial 1
  $('#testimonial-img1').attr('src', testimonials[num1].src);
  $('#testimonial1').text(testimonials[num1].testimonial)
  $('#testimonial1').prepend(`<span class="name">${testimonials[num1].name} -</span>`);


  //Testimonial 2
  $('#testimonial-img2').attr('src', testimonials[num2].src);
  $('#testimonial2').text(testimonials[num2].testimonial)
  $('#testimonial2').prepend(`<span class="name">${testimonials[num2].name} -</span>`);

  //Testimonial 3
  $('#testimonial-img3').attr('src', testimonials[num1].src2);
  $('#testimonial1').text(testimonials[num1].testimonial)
  $('#testimonial1').prepend(`<span class="name">${testimonials[num1].name} -</span>`);


  //Testimonial 4
  $('#testimonial-img4').attr('src', testimonials[num2].src2);
  $('#testimonial2').text(testimonials[num2].testimonial)
  $('#testimonial2').prepend(`<span class="name">${testimonials[num2].name} -</span>`);

  let i = -1;

  var showText = () => {
    const evilForce = $(".evil-force");
    i++;

    if (i > 2) {
      i = 0;
    }

    $(evilForce[i]).fadeIn(1300).delay(800).fadeOut(1300, showText);
  }

  showText();

});