$(document).ready(function () {
  scrollFromNavLinks();
  slideAboutFromRight();
  slideProjectsOnHover();
  handleContactSubmit();
});

const handleContactSubmit = () => {
  $("#contact-form").submit((e) => {
    e.preventDefault();
    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var message = $("#message-textarea").val();
    var phone = $("#phone-input").val();

    if (!name || !message || !email) {
      alert("Please fill in the required fields.");
      return;
    }

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      sendEmail(name, email, phone, message);
    } else {
      alert("You have entered an invalid email address!");
    }
  });
};

const sendEmail = (name, email, phone, message) => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pvmathew.contact@gmail.com",
    Password: "smtpsender",
    To: "pavinmathew@gmail.com",
    From: "pvmathew.contact@gmail.com",
    Subject: `Your Portfolio - A new message from ${name}`,
    Body:
      message +
      ` 
    Phone Number: ${phone} 
    Email Address: ${email}`,
  }).then(function (message) {
    alert("Thanks for contacting me! I'll be in touch shortly.");
  });
};

const scrollFromNavLinks = () => {
  $('a[href*="#"]').on("click", function (e) {
    let topPosition = $($(this).attr("href")).offset().top;
    console.log(topPosition);
    let animationDuration = topPosition > 500 ? 1000 : 500;
    $("html").animate(
      {
        scrollTop: topPosition - 20,
      },
      animationDuration,
      "swing"
    );
  });
};

const slideAboutFromRight = () => {
  $("#learn-more-button").click(() => {
    $("#about").toggleClass("show");
    $("#container").toggleClass("push-left");
    $("#container-overlay").toggleClass("activate");
    $("body").addClass("no-scroll");
  });

  $("#container-overlay").click((e) => {
    $("#about").toggleClass("show");
    $("#container").toggleClass("push-left");
    $("#container-overlay").toggleClass("activate");
    $("body").removeClass("no-scroll");
  });
};

const slideProjectsOnHover = () => {
  $("#projects").mouseleave(() => {
    $("#picrosso div").removeClass("hide");
    $("#picrosso img").removeClass("darken");
  });

  $("#picrosso").mouseover(() => {
    $("#picrosso div").removeClass("hide");
    $("#picrosso img").removeClass("darken");
  });

  $("#metube").mouseover(() => {
    $("#picrosso img").addClass("darken");
    $("#picrosso").css("clip-path", "polygon(0 0, 5% 0, 25% 100%, 0 100%)");
    $("#picrosso div").addClass("hide");
    $("#metube div").removeClass("hide");
    $("#metube img").removeClass("darken");
  });

  $("#metube").mouseleave(() => {
    $("#picrosso").css("clip-path", "polygon(0 0, 45% 0, 65% 100%, 0 100%)");
    $("#metube div").addClass("hide");
    $("#metube img").addClass("darken");
  });

  $("#trading-club").mouseover(() => {
    $("#picrosso div").addClass("hide");
    $("#picrosso img").addClass("darken");
    $("#trading-club div").removeClass("hide");
    $("#trading-club img").removeClass("darken");
    $("#picrosso").css("clip-path", "polygon(0 0, 5% 0, 25% 100%, 0 100%)");
    $("#metube").css("clip-path", "polygon(0 0, 15% 0, 35% 100%, 0 100%)");
  });

  $("#trading-club").mouseleave(() => {
    $("#trading-club div").addClass("hide");
    $("#trading-club img").addClass("darken");
    $("#picrosso").css("clip-path", "polygon(0 0, 45% 0, 65% 100%, 0 100%)");
    $("#metube").css("clip-path", "polygon(0 0, 55% 0, 75% 100%, 0 100%)");
  });

  $("#recipe").mouseover(() => {
    $("#recipe div").removeClass("hide");
    $("#recipe img").removeClass("darken");
    $("#picrosso div").addClass("hide");
    $("#picrosso img").addClass("darken");
    $("#picrosso").css("clip-path", "polygon(0 0, 5% 0, 25% 100%, 0 100%)");
    $("#metube").css("clip-path", "polygon(0 0, 15% 0, 35% 100%, 0 100%)");
    $("#trading-club").css(
      "clip-path",
      "polygon(0 0, 25% 0, 45% 100%, 0 100%)"
    );
  });

  $("#recipe").mouseleave(() => {
    $("#recipe div").addClass("hide");
    $("#recipe img").addClass("darken");
    $("#picrosso div").removeClass("hide");
    $("#picrosso img").removeClass("darken");
    $("#picrosso").css("clip-path", "polygon(0 0, 45% 0, 65% 100%, 0 100%)");
    $("#metube").css("clip-path", "polygon(0 0, 55% 0, 75% 100%, 0 100%)");
    $("#trading-club").css(
      "clip-path",
      "polygon(0 0, 65% 0, 85% 100%, 0 100%)"
    );
  });
};
