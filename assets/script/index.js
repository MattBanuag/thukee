'use strict';
// UTILITY FUNCTIONS TO INCREASE CODE EFFICIENCY
// Query Selector Function
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// Get a (node) list of HTML elements as array
function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

// Add Event Listener Function
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Create HTML Element Function
function create(element, parent = document) {
    return parent.createElement(element);
}

// HTML DOC BRIDGE
const hamburger = select('.bars');
const seeMoreBtn = select('.see-more-btn');
const navMobile = select('.nav-mobile');
const loader = select('.loader');
const hiddenBlogs = Array.from(selectAll('.blog-hidden'));

// EVENT LISTENERS
// Hamburger Nav Bar
onEvent('click', hamburger, () => {
    navMobile.classList.toggle('hidden');
});

// See More Blogs
onEvent('click', seeMoreBtn, () => {
    loader.classList.remove('hidden');
    seeMoreBtn.classList.add('hidden');
    setInterval(() => {
        hiddenBlogs.forEach((blog) => {
            blog.classList.remove('blog-hidden');
            loader.classList.add('hidden');
        });
    }, 2000);
});