document.addEventListener("keyup", function (e) {
    if (e.code == "KeyA") {
        let audioA = new Audio("Assets/A.mp3");
        audioA.play();
    } else if (e.code == "KeyS") {
        let audioS = new Audio("Assets/S.mp3");
        audioS.play();
    } else if (e.code == "KeyD") {
        let audioD = new Audio("Assets/D.mp3");
        audioD.play();
    } else if (e.code == "KeyF") {
        let audioF = new Audio("Assets/F.mp3");
        audioF.play();
    } else if (e.code == "KeyG") {
        let audioG = new Audio("Assets/G.mp3");
        audioG.play();
    } else if (e.code == "KeyH") {
        let audioH = new Audio("Assets/H.mp3");
        audioH.play();
    } else if (e.code == "KeyJ") {
        let audioJ = new Audio("Assets/J.mp3");
        audioJ.play();
    } else if (e.code == "KeyW") {
        let audioW = new Audio("Assets/W.mp3");
        audioW.play();
    } else if (e.code == "KeyE") {
        let audioE = new Audio("Assets/E.mp3");
        audioE.play();
    } else if (e.code == "KeyT") {
        let audioT = new Audio("Assets/T.mp3");
        audioT.play();
    } else if (e.code == "KeyY") {
        let audioY = new Audio("Assets/Y.mp3");
        audioY.play();
    } else if (e.code == "KeyU") {
        let audioU = new Audio("Assets/U.mp3");
        audioU.play();
    } else {
        console.log("bad key is pressed!");
    }

});