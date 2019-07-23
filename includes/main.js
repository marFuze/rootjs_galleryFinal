/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
  'images/landscape-1.jpg',
  'images/landscape-10.jpg',
  'images/landscape-11.jpg',
  'images/landscape-13.jpg',
  'images/landscape-15.jpg',
  'images/landscape-17.jpg',
  'images/landscape-18.jpg',
  'images/landscape-19.jpg',
  'images/landscape-2.jpg',
  'images/landscape-3.jpg',
  'images/landscape-8.jpg',
  'images/landscape-9.jpg',
  'images/pexels-photo-132037.jpeg',
  'images/pretty.jpg',
];

var pictureObjectsCollection = [];

function initiateApp() {
  /*advanced: add jquery sortable call here to make the gallery able to be sorted
  	//on change, rebuild the images array into the new order
  */
  makePictureObjectsCollection(pictures);
  makeGallery(pictureObjectsCollection);
  addModalCloseHandler();

}

function makePictureObjectsCollection(imageArray) {
  for (var x = 0; x < imageArray.length; x++) {
    var url = pictures[x];
    var filename = url.substr(7);
    var pictureObject = {};
    pictureObject.url = url;
    pictureObject.filename = filename;
    pictureObjectsCollection.push(pictureObject);
  }
  console.log(pictureObjectsCollection);
}

function makeGallery(imageObjectsArray) {
  //use loops and jquery dom creation to make the html structure inside the #gallery section
  for (var x = 0; x < imageObjectsArray.length; x++) {
    object = imageObjectsArray[x];
    //console.log('from array', pictureUrl);
    figureCaption = $('<figurecaption>');

    figureCaption.text(object.filename);

    figure = $('<figure>');
    figure.addClass('imageGallery').addClass('col-xs-12').addClass('col-sm-6').addClass('col-md-4');
    figure.css('background-image', 'url("' + object.url + '")');
    figure.append(figureCaption);
    figure.data('url', object.url);
    figure.data('filename', object.filename);
    figure.on("click",displayImage);
    $("#gallery").append(figure);
    //$('#gallery').on('click', 'figure', displayImage);
  }


  //create a loop to go through the images in the imageArray
  //create the elements needed for each picture, store the elements in variable

  //attach a click handler to the figure you create.  call the "displayImage" function.

  //append the element to the #gallery section

  // side note: make sure to remove the hard coded html in the index.html when you are done!

}

function addModalCloseHandler() {
  //add a click handler to the img element in the image modal.  When the element is clicked, close the modal
  //for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}

function displayImage() {
 var figureClicked = $(this);
 var figureData = figureClicked.data();
//console.log('filename', filenameData);
 var imageFilename = figureData.filename;
 var imageUrl = figureData.url;
 console.log('figureData', imageFilename, imageUrl);


//console.log('figure clicked css', imageUrl);
  //find the url of the image by grabbing the background-image source, store it in a variable
  //grab the direct url of the image by getting rid of the other pieces you don't need

  //grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
  // pexels-photo-132037
  //take a look at the lastIndexOf method

  //change the modal-title text to the name you found above
  //change the src of the image in the modal to the url of the image that was clicked on

  //show the modal with JS.  Check for more info here:
  //https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}
