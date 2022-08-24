/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/*
 *
 * Define Global Variables
 *
 */

// 'navBar' variable defined => Unordered list .
const navBar = document.getElementById("navbar__list");
// 'mySections'  variable defined semantic element => 'section'
let mySections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// sections.forEach(section => {
//     let content =

// });

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


/*
* forEach method to build a navigation dynamicly 
* create a <a> Element, create a <li> Element,
* create a text note from 'value' variable
* and give <a> Element an attribute class named 'active'
* and lastly used an Event 'addEventListener' and 'click' parameter,
* used 'scrollIntoView' and give it a behavior 'smooth' to scroll into Sections smoothly.
* and i used console.log() to test my code in every single step.
*/

mySections.forEach((section => {
  // console.log(section);
  let value = section.dataset.nav;
  // console.log(value);
  let aLink = document.createElement('a');
  // console.log(aLink);
  let li = document.createElement('li');
  // console.log(li);
  let node = document.createTextNode(value);
  // console.log(node);
  aLink.appendChild(node);
  li.appendChild(aLink);
  navBar.appendChild(li);
  aLink.className = 'active';

  aLink.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' })
  });

}));
// console.log(navBar);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active


// start track intersection between sections
// create a new IntersectionObserver object with function's parameter 'entries'

const callback = enteries => {
  // entry here equals section <section> Element
  enteries.forEach(entry => {
    // if else condition if Intersecting on viewed section or not
    if (entry.isIntersecting) {
      // add 'active' class for <section> Element if intersecting
      // i modified "your-active-class" to "active"
      entry.target.classList.add("active");
      
      const links = document.querySelectorAll('a');
      // link here equals anchor <a> Element
      links.forEach(link => {
        // i set if condition here to know the <a> element text contains the same as same "data-nav" attribute "section [number]" 
        if (link.textContent === entry.target.getAttribute("data-nav")) {
          // if condition is right add 'active' class for <a> Element if intersecting
          link.classList.add("active"); 
        } else {
          // if not remove 'active' class for <a> Element if not intersecting
          link.classList.remove("active");
        }
      });
    } else {
       // if not remove 'active' class for <section> Element if not intersecting
      entry.target.classList.remove('active');
    }
  });
}
// root as default is null, root margin is zero by px and the threshold is 20%
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2
}
// lastly foreach method 
mySections.forEach(section => {
  section.classList.remove("active");
  // observer my variable name of IntersectionObserver function and contain tow parameters 
  const observer = new IntersectionObserver(callback, options);
  // observer my variable name of IntersectionObserver function and 'observe' to observe every single section
  observer.observe(section);
});