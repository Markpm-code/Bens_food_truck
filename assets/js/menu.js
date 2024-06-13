function showAllergens(foodItem) {
  const allergensDiv = document.getElementById(`allergens-${foodItem}`);
  allergensDiv.style.display = allergensDiv.style.display === 'none' ? 'block' : 'none';
}

$(".logo").on("mouseover", function () {
  var $this = $(this); // Store $(this) in a variable to be used inside setTimeout, it will not work if not inside a variable
  var imagePath = "assets/images/foodtruck_galway.jpg";

  setTimeout(function () {
    $this.attr("src", imagePath);
  }, 300);
});

// When mouse leaves the logo, revert back to the previous image
$(".logo").on("mouseleave", function () {
  var $this = $(this);
  var previousImagePath = "assets/images/bens_logo.jpg";
  setTimeout(function () {
    $this.attr("src", previousImagePath);
  }, 10000); // the delay time 
});

// menu-list
$(".fr-chicken, .rb-meal-item, .spring-rolls, .s-meal-items, .noodles-items, .soft-rice-item").hide();
// $(".spring-rolls").hide();
// $(".chips-items").hide();
// $(".noodles-items").hide();


// burger menu items
$(".burger").click(function () {
  $(this).addClass("active");
  $(".fchicken").removeClass("active");
  $(".spr_rolls").removeClass("active");
  $(".noodles").removeClass("active");
  $(".s-meal").removeClass("active");
  $(".rb-meal").removeClass("active");
  $(".rice").removeClass("active");
  $(".fr-chicken").hide();
  $(".spring-rolls").hide();
  $(".noodles-items").hide();
  $(".s-meal-items").hide();
  $(".rb-meal-item").hide();
  $(".soft-rice-item").hide();
  // animation
  $(".burger-items").fadeIn("slow", function () {

  });
});

// Rice Box menu item
$(".rb-meal").click(function () {
  // var $this = $(this);left for future implementation
  $(this).addClass("active");
  $(".burger").removeClass("active");
  $(".fchicken").removeClass("active");
  $(".spr_rolls").removeClass("active");
  $(".noodles").removeClass("active");
  $(".s-meal").removeClass("active");
  $(".rice").removeClass("active");
  $(".burger-items").hide();
  $(".fr-chicken").hide();
  $(".spring-rolls").hide();
  $(".noodles-items").hide();
  $(".s-meal-items").hide();
  $(".soft-rice-item").hide();
  // animation
  $(".rb-meal-item").fadeIn("slow", function () {
    // if ($(window).width() <= 600) {
      // feature that can be implemented later
      // $(".rb-meal-item").insertAfter($this);
    // }
  });
  // feature that can be implemented later
  // Reset style when when resizing back to a larger screen
  // $(window).on('resize', function () {
  //   if ($(window).width() > 600) {
  //     $('.rb-meal-item').removeAttr('style'); // Reset any inline styles
  //     $('.menu-container').append($('.rb-meal-item'));
  //   }
  // });
});


// fried chicken menu items
$(".fchicken").click(function () {
  $(this).addClass("active");
  $(".burger").removeClass("active");
  $(".spr_rolls").removeClass("active");
  $(".noodles").removeClass("active");
  $(".s-meal").removeClass("active");
  $(".rb-meal").removeClass("active");
  $(".rice").removeClass("active");
  $(".burger-items").hide();
  $(".fr-chicken").hide();
  $(".spring-rolls").hide();
  $(".noodles-items").hide();
  $(".s-meal-items").hide();
  $(".rb-meal-item").hide();
  $(".soft-rice-item").hide();
  // animation
  $(".fr-chicken").fadeIn("slow", function () {
   
  });
});


// spring rolls menu items
$(".spr_rolls").click(function () {
  $(this).addClass("active");
  $(".burger").removeClass("active");
  $(".fchicken").removeClass("active");
  $(".noodles").removeClass("active");
  $(".s-meal").removeClass("active");
  $(".rb-meal").removeClass("active");
  $(".rice").removeClass("active");
  $(".fr-chicken").hide();
  $(".burger-items").hide();
  $(".noodles-items").hide();
  $(".s-meal-items").hide();
  $(".rb-meal-item").hide();
  $(".soft-rice-item").hide();
  // animation
  $(".spring-rolls").fadeIn("slow", function () {

  });
});

// noodles items
$(".noodles").click(function () {
  $(this).addClass("active");
  $(".burger").removeClass("active");
  $(".fchicken").removeClass("active");
  $(".spr_rolls").removeClass("active");
  $(".s-meal").removeClass("active");
  $(".rb-meal").removeClass("active");
  $(".rice").removeClass("active");
  $(".fr-chicken").hide();
  $(".burger-items").hide();
  $(".s-meal-items").hide();
  $(".spring-rolls").hide();
  $(".rb-meal-item").hide();
  $(".soft-rice-item").hide();
  // animation
  $(".noodles-items").fadeIn("slow", function () {

  });
});

// chips items
$(".s-meal").click(function () {
  $(this).addClass("active");
  $(".burger").removeClass("active");
  $(".fchicken").removeClass("active");
  $(".spr_rolls").removeClass("active");
  $(".noodles").removeClass("active");
  $(".rb-meal").removeClass("active");
  $(".rice").removeClass("active");
  $(".fr-chicken").hide();
  $(".burger-items").hide();
  $(".spring-rolls").hide();
  $(".noodles-items").hide();
  $(".rb-meal-item").hide();
  $(".soft-rice-item").hide();
  // animation
  $(".s-meal-items").fadeIn("slow", function () {

  });
});

// Rice item
$(".rice").click(function () {
  $(this).addClass("active");
  $(".burger").removeClass("active");
  $(".fchicken").removeClass("active");
  $(".spr_rolls").removeClass("active");
  $(".noodles").removeClass("active");
  $(".rb-meal").removeClass("active");
  $(".s-meal").removeClass("active");
  $(".fr-chicken").hide();
  $(".burger-items").hide();
  $(".spring-rolls").hide();
  $(".noodles-items").hide();
  $(".rb-meal-item").hide();
  $(".s-meal-items").hide();
  // animation
  $(".soft-rice-item").fadeIn("slow", function () {

  });
});

$(".rm-btn").click(function () {
  $(".read-more").show();
  $(".rm-btn").hide();
});