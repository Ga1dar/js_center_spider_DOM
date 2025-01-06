'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();

const spiderCenterX = wallRect.width / 2 - spider.offsetWidth / 2;
const spiderCenterY = wallRect.height / 2 - spider.offsetHeight / 2;


spider.style.left = `${spiderCenterX}px`;
spider.style.top = `${spiderCenterY}px`;
