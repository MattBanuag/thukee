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

export { select, selectAll, onEvent, create };