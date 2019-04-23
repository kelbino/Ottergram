var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SECLECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText){
  'use strict';//lets the broswer know to follow the most recent version ofJS only

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  /*document is an object. It is an object that allows you to access the DOM
  Document Object Model. document also refers to the entire page. The querySelector
  function takes a value and searches for any attribute with that name and returns
  the element and line of code that contains it*/
  //detailImage.setAttribute('src', 'img/otter3.jpg');
  detailImage.setAttribute('src',imageUrl);


  /*setAttribute function*/
  var detailTitle = document.querySelector(DETAIL_TITLE_SECLECTOR);
  //detailTitle.textContent = 'You Should Be Dancing';
  detailTitle.textContent = titleText;

}
