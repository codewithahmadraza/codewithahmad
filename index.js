const sections = document.querySelectorAll('section'); // Assuming your sections have 'section' tags
const nContainers = document.querySelectorAll('.n-container div'); // Select the div elements within .n-container

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    nContainers.forEach((container) => {
        container.classList.remove('active');
        if (container.querySelector('a').getAttribute('href').slice(1) === currentSection) {
            container.classList.add('active');
        }
    });
});


// Select all elements with the class "animation-box"
// const firstBoxElements = document.querySelectorAll('.animation-box');

// // Create an Intersection Observer for each element
// firstBoxElements.forEach((element) => {
//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Start the animation when the element is in view
//         element.style.transform = 'translateY(-100px)';
//         element.style.opacity = 1;

//         // Stop observing once the animation has started
//         observer.unobserve(element);
//       }
//     });
//   });

//   // Start observing the current element
//   observer.observe(element);
// });

const firstBoxElements = document.querySelectorAll('.animation-box');

// Create an Intersection Observer for each element
firstBoxElements.forEach((element) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start the animation when the element is in view
        element.style.transform = 'translateY(-100px)';
        element.style.opacity = 1;

        // Stop observing once the animation has started
        observer.unobserve(element);

        // Check if it's a mobile device
        if (window.matchMedia('(max-width: 480px)').matches) {
          // Stop or reverse the animation for mobile
          element.style.transform = 'translateY(0)';
        }
      }
    });
  });
  // Start observing
  observer.observe(element);
});


// Select all elements with the class "animation-box"
// const secondeBoxElements = document.querySelectorAll('.animation-box-1');

// // Create an Intersection Observer for each element
// secondeBoxElements.forEach((element) => {
//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Start the animation when the element is in view
//         element.style.transform = 'translateY(100px)';
//         element.style.opacity = 1;

//         // Stop observing once the animation has started
//         observer.unobserve(element);
//       }
//     });
//   });

//   // Start observing the current element
//   observer.observe(element);
// });


const secondeBoxElements = document.querySelectorAll('.animation-box-1');

// Create an Intersection Observer for each element
secondeBoxElements.forEach((element) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start the animation when the element is in view
        element.style.transform = 'translateY(100px)';
        element.style.opacity = 1;

        // Stop observing once the animation has started
        observer.unobserve(element);

        // Check if it's a mobile device
        if (window.matchMedia('(max-width: 480px)').matches) {
          // Stop or reverse the animation for mobile
          element.style.transform = 'translateY(0)';
        }
      }
    });
  });

  // Start observing the current element
  observer.observe(element);
});



// script.js
// script.js
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.getElementById('nav-button');
  const container = document.getElementById('mobile-nav');
  let isContainerVisible = false;

  hamburgerIcon.addEventListener('click', function() {
      if (isContainerVisible) {
          container.classList.remove('show');
          container.classList.add('hide');
      } else {
          container.classList.remove('hide');
          container.classList.add('show');
      }
      isContainerVisible = !isContainerVisible;
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//   const hamburgerIcon = document.getElementById('toggle-button');
//   const container = document.getElementById('n-container');
//   let isContainerVisible = false;

//   hamburgerIcon.addEventListener('click', function() {
//       if (isContainerVisible) {
//           container.classList.remove('show-right-nav');
//           container.classList.add('hide-right-nav');
//       } else {
//           container.classList.remove('hide-right-nav');
//           container.classList.add('show-right-nav');
//       }
//       isContainerVisible = !isContainerVisible;
//   });
// });

