   // sets block size
   function blockSize() {
    return 30;
}
// canvas width
function canvas_X() {
    return blockSize() * 3;
}
// canvas height
function canvas_Y() {
    return blockSize() * 3;
}

//generates the canvas element on the html page
window.onload = function() {
    let x = canvas_X(), y = canvas_Y();
    document.getElementById('canvasDiv').innerHTML =
        "<canvas id='gridCanvas' width='" + x + "' height='" + y + "'></canvas>";
};

// holds images and their attributes
let imageObjArray = [
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks/1.png"
    },
    {
        top: true,
        right: false,
        bottom: true,
        left: true,
        image: "blocks/2.png"
    },
    {
        top: false,
        right: true,
        bottom: true,
        left: true,
        image: "blocks/3.png"
    },
    {
        top: true,
        right: true,
        bottom: false,
        left: true,
        image: "blocks/4.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: false,
        image: "blocks/5.png"
    },
    {
        top: true,
        right: false,
        bottom: true,
        left: false,
        image: "blocks/6.png"
    },
    {
        top: false,
        right: true,
        bottom: false,
        left: true,
        image: "blocks/7.png"
    },
    {
        top: false,
        right: true,
        bottom: false,
        left: false,
        image: "blocks/8.png"
    },
    {
        top: true,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/9.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: true,
        image: "blocks/10.png"
    },
    {
        top: false,
        right: false,
        bottom: true,
        left: false,
        image: "blocks/11.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/12.png"
    },
    {
        top: false,
        right: false,
        bottom: true,
        left: true,
        image: "blocks/13.png"
    },
    {
        top: true,
        right: false,
        bottom: false,
        left: true,
        image: "blocks/14.png"
    },
    {
        top: true,
        right: true,
        bottom: false,
        left: false,
        image: "blocks/15.png"
    },
    {
        top: false,
        right: true,
        bottom: true,
        left: false,
        image: "blocks/16.png"
    }
];
// created and cleared by addImages()
let displayedObjArray = [];


function imageArray(x, y) {
    // *** no touch corners ***********************************************
    // top right corner
    if (x === (canvas_X() - blockSize()) && y === 0) {
        var topRightCornerFalse = 
            imageObjArray.filter(item => item.right === false && item.top === false);
        let pick = Math.floor(Math.random() * (topRightCornerFalse.length -1)) + 1;
        return topRightCornerFalse[pick];
    }
    // bottom right corner
    if (x === (canvas_X() - blockSize()) && y === (canvas_Y() - blockSize())) {
        var bottomRightCornerFalse = 
            imageObjArray.filter(item => item.right === false && item.bottom === false);
        let pick = Math.floor(Math.random() * (bottomRightCornerFalse.length -1)) + 1;
        return bottomRightCornerFalse[pick];
    }
    // bottom left corner
    if (x === 0 && y === (canvas_Y() - blockSize())) {
        var bottomLeftCornerFalse = 
            imageObjArray.filter(item => item.left === false && item.bottom === false);
        let pick = Math.floor(Math.random() * (bottomLeftCornerFalse.length -1)) + 1;
        return bottomLeftCornerFalse[pick];
    }
    // top left corner
    if (x === 0 && y === 0) {
        var topRightFalses = 
            imageObjArray.filter(item => item.left === false && item.top === false);
        let pick = Math.floor(Math.random() * (topRightFalses.length -1)) + 1;
        return topRightFalses[pick];
    }
    // ********************************************************************

    // *** no touch sides *************************************************
    // top row
    if (y === 0) {
        var topFalse = imageObjArray.filter(item => item.top === false);
        let pick = Math.floor(Math.random() * (topFalse.length -1)) + 1;
        return topFalse[pick];
    }
    // right side
    if (x === canvas_X() - blockSize()) {
        rightFalse = imageObjArray.filter(item => item.right === false);
        let pick = Math.floor(Math.random() * (rightFalse.length -1)) + 1;
        return rightFalse[pick];
    }
    // bottom row
    if (y === canvas_Y() - blockSize()) {
        bottomFalse = imageObjArray.filter(item => item.bottom === false);
        let pick = Math.floor(Math.random() * (bottomFalse.length -1)) + 1;
        return bottomFalse[pick];
    }
    // left side
    if (x === 0) {
        leftFalse = imageObjArray.filter(item => item.left === false);
        let pick = Math.floor(Math.random() * (leftFalse.length -1)) + 1;
        return leftFalse[pick];
    }
    // ********************************************************************

    let pick = Math.floor(Math.random() * (imageObjArray.length -1)) + 1;
    return imageObjArray[pick];
}

function addImages() {
    displayedObjArray = [];
    let canvas = document.getElementById('gridCanvas'),
        context = canvas.getContext('2d');
    let x = canvas_X();
    let y = canvas_Y();
    for (let i = 0; i < x; i += blockSize()) {
        for (let j = 0; j < y; j += blockSize()) {
            var image = new Image();
            var imageObjPassed = imageArray(i, j);
            image.src = imageObjPassed.image;
            // fills array with image object used on the canvas
            displayedObjArray.push(imageObjPassed);

            context.drawImage(image, i, j, blockSize(),blockSize());
        }
    }
}

// builds the grid and populates the images for display on the canvas
// this takes the canvas width and height and divides it by blockSize
function buildGridArray() {
    let rows      = canvas_Y() / blockSize();
    let columns   = canvas_X() / blockSize();
    var gridArray = [rows][columns];
}
buildGridArray();
