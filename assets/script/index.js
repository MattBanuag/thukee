'use strict';
import { select, selectAll, onEvent, create } from './utils.js';

// HTML DOC BRIDGE
const hamburger = select('.bars');
const seeMoreBtn = select('.see-more-btn');
const navHidden = select('.nav-hidden');
const loader = select('.loader');
const hiddenBlogs = Array.from(selectAll('.blog-hidden'));

// EVENT LISTENERS
// Hamburger Nav Bar
onEvent('click', hamburger, () => {
    navHidden.classList.remove('nav-hidden');
    navHidden.classList.add('change');
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