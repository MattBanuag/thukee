'use strict';
import { select, selectAll, onEvent, create } from './utils.js';

// HTML DOC BRIDGE
const seeMoreBtn = select('.see-more-btn');
const loader = select('.loader');
const hiddenBlogs = Array.from(selectAll('.hidden'));

// EVENT LISTENERS
onEvent('click', seeMoreBtn, () => {
    loader.classList.remove('hidden');
    seeMoreBtn.classList.add('hidden');
    setInterval(() => {
        hiddenBlogs.forEach((blog) => {
            blog.classList.remove('hidden');
            loader.classList.add('hidden');
        });
    }, 2000);
});