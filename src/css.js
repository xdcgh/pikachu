const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::before, *::after {
    box-sizing: border-box;
}

.skin {
    background: #fee433;
    position: relative;
    min-height: 50vh;
}

.skin {
    position: relative;
}

.nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000000;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background: #fee433;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #fee433;
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .down {
    width: 100%;
    height: 180px;
    position: absolute;
    top: 5px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px / 300px;
    background: #990513;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff5b5d;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    background: #fe1800;
    border-radius: 50%;
}

.face > img {
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left {
    transform: translateX(-180px);
}

.face.left > img {
    transform-origin: 0 0;
    transform: rotateY(180deg);
}

.face.right {
    transform: translateX(180px);
}`;

export default string;