// sets block size
let bSize = 30;
blockSize = () => {
    return bSize;
}

// sets width & used for finding position for block selection
let numY = 20;
let numX = 40;
// canvas width
canvas_X = () => {
    return blockSize() * numX;
}
// canvas height
canvas_Y = () => {
    return blockSize() * numY;
}

let x = canvas_X(), y = canvas_Y();

setCanvas = () => {
    x = canvas_X();
    y = canvas_Y();
    document.getElementById('canvasDiv').innerHTML =
    "<canvas id='gridCanvas' width='" + x + "' height='" + y + "'></canvas>";
}

//generates the canvas element on the html page
window.onload = () => {
    setCanvas();
    addImages();
};

// holds images and their attributes
let imageObjArray = [{
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/0.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks2/1.png"
    },
    {
        top: true,
        right: false,
        bottom: true,
        left: true,
        image: "blocks2/2.png"
    },
    {
        top: false,
        right: true,
        bottom: true,
        left: true,
        image: "blocks2/3.png"
    },
    {
        top: true,
        right: true,
        bottom: false,
        left: true,
        image: "blocks2/4.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: false,
        image: "blocks2/5.png"
    },
    {
        top: true,
        right: false,
        bottom: true,
        left: false,
        image: "blocks2/6.png"
    },
    {
        top: false,
        right: true,
        bottom: false,
        left: true,
        image: "blocks2/7.png"
    },
    {
        top: false,
        right: true,
        bottom: false,
        left: false,
        image: "blocks2/8.png"
    },
    {
        top: true,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/9.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: true,
        image: "blocks2/10.png"
    },
    {
        top: false,
        right: false,
        bottom: true,
        left: false,
        image: "blocks2/11.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/12.png"
    },
    {
        top: false,
        right: false,
        bottom: true,
        left: true,
        image: "blocks2/13.png"
    },
    {
        top: true,
        right: false,
        bottom: false,
        left: true,
        image: "blocks2/14.png"
    },
    {
        top: true,
        right: true,
        bottom: false,
        left: false,
        image: "blocks2/15.png"
    },
    {
        top: false,
        right: true,
        bottom: true,
        left: false,
        image: "blocks2/16.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks2/17.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks2/17.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks2/18.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks2/19.png"
    },
    {
        top: true,
        right: true,
        bottom: true,
        left: true,
        image: "blocks2/20.png"
    },
    {
        top: false,
        right: false,
        bottom: false,
        left: false,
        image: "blocks2/21.png"
    }
];
// created and cleared by addImages()
let displayedObjArray = [];
let imageObjPassed = [];

// gets radio value for size option
getRadioValue = () => {
    let radios = document.getElementsByName('mode');
    if(radios[0].checked) {
        bSize = 30;
        numY = 20;
        numX = 40;
    } else if (radios[1].checked) {
        bSize = 20;
        numY = 30;
        numX = 60;
    } else if (radios[2].checked) {
        bSize = 10;
        numY = 60;
        numX = 120;
    } 
}

// selects an image based on position and surrounding images
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
            if (((y / blockSize()) - 1) === (numY - 3)) {
                atBottom = true;
            }
            let farRight = false;
            // checks for top far right position
            if (x / blockSize() === (numX - 2)) {
                farRight = true;
            }
            // selects image to evaluate fit
            let p_pick = Math.floor(Math.random() * (imageObjArray.length - 1)) + 1;
            // verifies that p_pick matches surrounding images
            if (displayedObjArray[displayedObjArray.length - 1].bottom !== imageObjArray[p_pick].top ||
                displayedObjArray[displayedObjArray.length - numY].right !== imageObjArray[p_pick].left ||
                (atBottom === true && imageObjArray[p_pick].bottom !== false) ||
                (farRight === true && imageObjArray[p_pick].right !== false)) {
                pick(); // if selected image does not fit, return function
            } else {
                _pick = p_pick;
            }
        }
        pick();
    }
    return imageObjArray[_pick];
}

addImages = () => {
    getRadioValue();
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
