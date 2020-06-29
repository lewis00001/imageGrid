// sets block size
blockSize = () => {
    return 20;
}

// sets width & used for finding position for block selection
const NUM_Y = 30;
const NUM_X = 75;
// canvas width
canvas_X = () => {
    return blockSize() * NUM_X;
}
// canvas height
canvas_Y = () => {
    return blockSize() * NUM_Y;
}

let x = canvas_X(),
    y = canvas_Y();

//generates the canvas element on the html page
window.onload = () => {
    document.getElementById('canvasDiv').innerHTML =
        "<canvas id='gridCanvas' width='" + x + "' height='" + y + "'></canvas>";
};

// holds images and their attributes
let imageObjArray = [{
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/0.png"
    },
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
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks/17.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks/17.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks/18.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks/19.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks/20.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks/21.png"
    }
];
// created and cleared by addImages()
let displayedObjArray = [];
let imageObjPassed = [];

// 
imageArray = (x, y) => {
    var _pick;
    // sides all false - top row, left side, right side, bottom row
    if (y === 0 || x === 0 ||
        x === canvas_X() - blockSize() ||
        y === canvas_Y() - blockSize()) {
        return imageObjArray[0];
        // checks surrounding images to verify fit
    } else {
        pick = () => {
            let atBottom = false;
            // checks for bottom position
            if (((y / blockSize()) - 1) === (NUM_Y - 3)) {
                atBottom = true;
            }
            let farRight = false;
            // checks for top far right position
            if (x / blockSize() === (NUM_X - 2)) {
                farRight = true;
            }
            // selects image to evaluate fit
            let p_pick = Math.floor(Math.random() * (imageObjArray.length - 1)) + 1;
            // verifies that p_pick matches surrounding images
            if (displayedObjArray[displayedObjArray.length - 1].bottom !== imageObjArray[p_pick].top ||
                displayedObjArray[displayedObjArray.length - NUM_Y].right !== imageObjArray[p_pick].left ||
                (atBottom === true && imageObjArray[p_pick].bottom !== false) ||
                (farRight === true && imageObjArray[p_pick].right !== false)) {
                pick(); // if selected image does not fit, rerun function
            } else {
                _pick = p_pick;
            }
        }
        pick();
    }
    return imageObjArray[_pick];
}

addImages = () => {
    console.clear(); // remove this later
    displayedObjArray = [];
    let canvas = document.getElementById('gridCanvas'),
        context = canvas.getContext('2d');
    for (let i = 0; i < x; i += blockSize()) {
        for (let j = 0; j < y; j += blockSize()) {
            let image = new Image();
            imageObjPassed = imageArray(i, j);
            image.src = imageObjPassed.image;
            // fills array with image object used on the canvas
            displayedObjArray.push(imageObjPassed);
            context.drawImage(image, i, j, blockSize(), blockSize());
        }
    }
}

// builds the grid and populates the images for display on the canvas
// this takes the canvas width and height and divides it by blockSize
buildGridArray = () => {
    let rows = canvas_Y() / blockSize();
    let columns = canvas_X() / blockSize();
    var gridArray = [rows][columns];
}
buildGridArray();