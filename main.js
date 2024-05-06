
//LAZY LOAD


//----------------------------------------------
//3D LOAD
  window.addEventListener('load', function() {
      var element = document.getElementById('3d-phone');
      element.classList.add('visible'); // добавляем класс visible
  });

//CASE TABS

  // Get all tab links and tab content
  const tabLinks = document.querySelectorAll('.case-tab-link');
  const tabContents = document.querySelectorAll('.case-pink-box-content');

  // Add click event handler to each tab link
  tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      // Remove the 'active' class from all tab links and tab contents
      tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
      tabContents.forEach(tabContent => tabContent.classList.remove('active'));

      // Add the 'active' class only to the selected tab link and its corresponding tab content
      link.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });

//-----------------------------------------------------
//FAQ TABS

$(".faq-tab-item").on("click", function () {
  $(".is--current").removeClass("is--current");
  $(this).addClass("is--current");
  let myIndex = $(this).index();
  $(".faq-list").eq(myIndex).addClass("is--current");
});

//-----------------------------------------------------



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the video is visible on the page
    if (entry.isIntersecting) {
      // Play the video
      entry.target.play();
    } else {
      // When the video is out of view, pause it
      entry.target.pause();
    }
  });
});

// Get all video elements with the class 'scroll-v3'
const videos = document.querySelectorAll(".scroll-v3");

// Start observing the visibility of each video element
videos.forEach((video) => {
  observer.observe(video);
});

//--------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("email-button");
  var input = document.getElementById("Email");
  var iconButton = document.getElementById("email-button-icon");

  input.addEventListener("input", function () {
    // Check if there is text in the input field
    if (input.value.trim() !== "") {
      // If there is text, add a style to the button
      iconButton.classList.add("filled");
      button.classList.add("filled");
    } else {
      // If there is no text, remove the style from the button
      iconButton.classList.remove("filled");
      button.classList.remove("filled");
    }
  });
});

// MISSION SLIDER

// Assuming all your slide elements have the class 'slide'
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const dots = document.querySelectorAll('.dot');

// Listen for click events on the previous button
prevButton.addEventListener('click', function() {
    showPreviousSlide();
});

// Listen for click events on the next button
nextButton.addEventListener('click', function() {
    showNextSlide();
});

// Listen for click events on dots
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideId = dot.getAttribute('data-slide-id');
        const targetSlide = document.getElementById(slideId);
        const videoInCurrentSlide = document.querySelector('.slide.active .mission-video-himself');
        
        if (videoInCurrentSlide) {
            videoInCurrentSlide.currentTime = 0;
        }

        activateSlide(targetSlide);
    });
});

// Function to show the previous slide
function showPreviousSlide() {
    const currentSlide = document.querySelector('.slide.active');
    let prevSlide;

    if (currentSlide) {
        prevSlide = currentSlide.previousElementSibling;
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1]; // If no previous slide found, go to the last slide
        }
    } else {
        prevSlide = slides[slides.length - 1]; // If no active slide found, go to the last slide
    }

    const videoInCurrentSlide = currentSlide.querySelector('.mission-video-himself');
    if (videoInCurrentSlide) {
        videoInCurrentSlide.currentTime = 0;
    }

    activateSlide(prevSlide);
}

// Function to show the next slide
function showNextSlide() {
    const currentSlide = document.querySelector('.slide.active');
    let nextSlide;

    if (currentSlide) {
        nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide) {
            console.log("Next slide is null");
            nextSlide = slides[0]; // If no next slide found, go back to the first slide
        }
    } else {
        nextSlide = slides[0]; // If no active slide found, go to the first slide
    }

    const videoInCurrentSlide = currentSlide.querySelector('.mission-video-himself');
    if (videoInCurrentSlide) {
        videoInCurrentSlide.currentTime = 0;
    }

    if (nextSlide) { // Check if nextSlide is not null
        console.log("Activating next slide:", nextSlide);
        activateSlide(nextSlide);
    }
}

// Function to activate a slide
function activateSlide(slide) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slide.classList.add('active');

    const slideId = slide.id;
    const correspondingDot = document.querySelector(`.dot[data-slide-id="${slideId}"]`);
    correspondingDot.classList.add('active');

    const videoInSlide = slide.querySelector('.mission-video-himself');
    if (videoInSlide) {
        videoInSlide.play();
    }
}

// Loop through each slide to find and attach event listener to videos
slides.forEach(slide => {
    const videoInSlide = slide.querySelector('.mission-video-himself');
    if (videoInSlide) {
        videoInSlide.addEventListener('ended', function() {
            showNextSlide(); // Go to the next slide after the video ends
        });
    }
});

// Call activateSlide function for the first slide initially
activateSlide(slides[0]);



		//MISSION MUTE BUTTON

    $(".mission-video-himself").prop("muted", true);

    $(".mission1-unmute-button").click(function () {
        var video = $(".mission-video-himself"); // Find all elements with the class .scroll-v3
        if (video.prop("muted")) {
        video.prop("muted", false);
        $(".mission-unmute-image-status").addClass("unmute-video");
      } else {
        video.prop("muted", true);
        $(".mission-unmute-image-status").removeClass("unmute-video");
      }
      console.log(video.prop("muted"));
    });

		//---------------------------------------------------------------------
    //MISSION PROGRESS BAR
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll('.mission-video-himself').forEach((video) => {
        const progressBarId = video.getAttribute('data-progress');
        const progressBar = document.getElementById(progressBarId);

        video.addEventListener('timeupdate', () => {
          const percent = (video.currentTime / video.duration) * 100;
          progressBar.querySelector('.progress').style.width = percent + '%';
        });

        progressBar.addEventListener('click', (event) => {
          const percent = (event.offsetX / progressBar.offsetWidth) * 100;
          const duration = video.duration;
          video.currentTime = (percent * duration) / 100;
        });
    });
    });

    //VIDEO V2 SCROLL

    var videosCollection = document.querySelectorAll('.scroll-v2-desctop');
    var fh2 = document.getElementById('fh2');

    window.addEventListener('scroll', function() {
        var rect = fh2.getBoundingClientRect();
        var fh2Top = rect.top + window.scrollY;

        videosCollection.forEach(function(video) {
            var scrollPosition = window.scrollY;
            var videoPosition = video.offsetTop;
            var videoHeight = video.offsetHeight;

            if (scrollPosition > fh2Top - window.innerHeight && scrollPosition < (fh2Top + videoHeight)) {
                var playPosition = ((scrollPosition - fh2Top + window.innerHeight) / (videoHeight + window.innerHeight));
                video.currentTime = playPosition * video.duration;
            // Remove the line video.play() so that the video doesn't play automatically
        } else {
                video.pause();
            }
        });
    });
