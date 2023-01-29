let t = [];
let prevlos = 0;
let los;
let pionek;
let nowplaying;
let szostka = 0;
let bicie = false;

//pionki
let pion11 = document.createElement("IMG");
pion11.src = "./jpg/gskoczek.png";
pion11.gracz = "gracz1";
pion11.pole = "startgreen1";
pion11.start = "startgreen1";
pion11.pola = 0;
let pion12 = document.createElement("IMG");
pion12.src = "./jpg/gskoczek.png";
pion12.gracz = "gracz1";
pion12.pole = "startgreen2";
pion12.start = "startgreen2";
pion12.pola = 0;
let pion13 = document.createElement("IMG");
pion13.src = "./jpg/gskoczek.png";
pion13.gracz = "gracz1";
pion13.pole = "startgreen3";
pion13.start = "startgreen3";
pion13.pola = 0;
let pion14 = document.createElement("IMG");
pion14.src = "./jpg/gskoczek.png";
pion14.gracz = "gracz1";
pion14.pole = "startgreen4";
pion14.start = "startgreen4";
pion14.pola = 0;
let pion21 = document.createElement("IMG");
pion21.src = "./jpg/rskoczek.png";
pion21.gracz = "gracz2";
pion21.pole = "startred1";
pion21.start = "startred1";
pion21.pola = 0;
let pion22 = document.createElement("IMG");
pion22.src = "./jpg/rskoczek.png";
pion22.gracz = "gracz2";
pion22.pole = "startred2";
pion22.start = "startred2";
pion22.pola = 0;
let pion23 = document.createElement("IMG");
pion23.src = "./jpg/rskoczek.png";
pion23.gracz = "gracz2";
pion23.pole = "startred3";
pion23.start = "startred3";
pion23.pola = 0;
let pion24 = document.createElement("IMG");
pion24.src = "./jpg/rskoczek.png";
pion24.gracz = "gracz2";
pion24.pole = "startred4";
pion24.start = "startred4";
pion24.pola = 0;
let pion31 = document.createElement("IMG");
pion31.src = "./jpg/bskoczek.png";
pion31.gracz = "gracz3";
pion31.pole = "startblue1";
pion31.start = "startblue1";
pion31.pola = 0;
let pion32 = document.createElement("IMG");
pion32.src = "./jpg/bskoczek.png";
pion32.gracz = "gracz3";
pion32.pole = "startblue2";
pion32.start = "startblue2";
pion32.pola = 0;
let pion33 = document.createElement("IMG");
pion33.src = "./jpg/bskoczek.png";
pion33.gracz = "gracz3";
pion33.pole = "startblue3";
pion33.start = "startblue3";
pion33.pola = 0;
let pion34 = document.createElement("IMG");
pion34.src = "./jpg/bskoczek.png";
pion34.gracz = "gracz3";
pion34.pole = "startblue4";
pion34.start = "startblue4";
pion34.pola = 0;
let pion41 = document.createElement("IMG");
pion41.src = "./jpg/yskoczek.png";
pion41.gracz = "gracz4";
pion41.pole = "startyellow1";
pion41.start = "startyellow1";
pion41.pola = 0;
let pion42 = document.createElement("IMG");
pion42.src = "./jpg/yskoczek.png";
pion42.gracz = "gracz4";
pion42.pole = "startyellow2";
pion42.start = "startyellow2";
pion42.pola = 0;
let pion43 = document.createElement("IMG");
pion43.src = "./jpg/yskoczek.png";
pion43.gracz = "gracz4";
pion43.pole = "startyellow3";
pion43.start = "startyellow3";
pion43.pola = 0;
let pion44 = document.createElement("IMG");
pion44.src = "./jpg/yskoczek.png";
pion44.gracz = "gracz4";
pion44.pole = "startyellow4";
pion44.start = "startyellow4";
pion44.pola = 0;

//gracze
let gracz1 = {
    name: "gracz1",
    kolor: "green",
    pionki: 0,
    pionek1: pion11,
    pionek2: pion12,
    pionek3: pion13,
    pionek4: pion14,
}
let gracz2 = {
    name: "gracz2",
    kolor: "red",
    pionki: 0,
    pionek1: pion21,
    pionek2: pion22,
    pionek3: pion23,
    pionek4: pion24,
}
let gracz3 = {
    name: "gracz3",
    kolor: "blue",
    pionki: 0,
    pionek1: pion31,
    pionek2: pion32,
    pionek3: pion33,
    pionek4: pion34,
}
let gracz4 = {
    name: "gracz4",
    kolor: "yellow",
    pionki: 0,
    pionek1: pion41,
    pionek2: pion42,
    pionek3: pion43,
    pionek4: pion44,
}

function start() {
    for (let y = 0; y < 11; y++) {
        t[y] = [];
        for (let x = 0; x < 11; x++) {
            t[y][x] = "";
        }
    }
    generujplansze();
    noweid();
    generujpionki();
    ktozaczyna();
    document.getElementById("start").disabled = true;
    document.getElementById("losuj").disabled = false;
    document.getElementById("info").innerHTML = nowplaying.kolor;
}

function generujplansze() {
    let table = document.createElement("TABLE");
    let cleanup = ["2.0","3.0","7.0","8.0","2.1","3.1","7.1","8.1","0.2","1.2","2.2","3.2","7.2","8.2","9.2","10.2","0.3","1.3","2.3","3.3","7.3","8.3","9.3","10.3","0.7","1.7","2.7","3.7","7.7","8.7","9.7","10.7","0.8","1.8","2.8","3.8","7.8","8.8","9.8","10.8","2.9","3.9","7.9","8.9","2.10","3.10","7.10","8.10"];
    for (let y = 0; y < 11; y++) {
        let tr = document.createElement("TR");
        for (let x = 0; x < 11; x++) {
            let td = document.createElement("TD");
            td.innerHTML = t[y][x];
            td.setAttribute("id", x + "." + y);
            if (y === 5 && x === 5) td.style.backgroundImage = "url(./jpg/srodek.png)";
            for (let z = 0; z < cleanup.length; z++) {
                if (td.id === cleanup[z]) td.style.visibility = "hidden";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("plansza").appendChild(table);
}

function noweid() {
    let pola = document.getElementsByTagName("td");
    let x = 6;
    let y = 0;
    let pgreen = 0;
    let pred = 30;
    let pblue = 20;
    let pyellow = 10;
    for (let p = 0; p < 40; p++) {
        document.getElementById(x + "." + y).idgreen = "p" + pgreen;
        document.getElementById(x + "." + y).idred = "p" + pred;
        document.getElementById(x + "." + y).idblue = "p" + pblue;
        document.getElementById(x + "." + y).idyellow = "p" + pyellow;
        document.getElementById(x + "." + y).id = "p" + p;
        pgreen++; pred++; pblue++; pyellow++;
        if (pgreen > 39) pgreen -= 40;
        if (pred > 39) pred -= 40;
        if (pblue > 39) pblue -= 40;
        if (pyellow > 39) pyellow -= 40;
        if ((p >= 10 && p < 14) || (p >= 18 && p < 20) || (p >= 24 && p < 28)) x--;
        if ((p >= 20 && p < 24) || (p >= 28 && p < 30) || (p >= 34 && p < 38)) y--;
        if ((p >= 30 && p < 34) || (p >= 38 && p < 40) || (p >= 4 && p < 8)) x++;
        if ((p >= 0 && p < 4) || (p >= 8 && p < 10) || (p >= 14 && p < 18)) y++;
    }
    for (let z = 0; z < pola.length; z++) {
        let poleid = pola[z].id;
        //yellow
        if (z === 0 || z === 1 || z === 11 || z === 12 || z === 44 || z === 56 || z === 57 || z === 58 || z === 59) {
            document.getElementById(poleid).style.backgroundColor = "yellow";
            document.getElementById(poleid).isSafe = true;
            if (z === 0) document.getElementById(poleid).id = "startyellow1";
            if (z === 1) document.getElementById(poleid).id = "startyellow2";
            if (z === 11) document.getElementById(poleid).id = "startyellow3";
            if (z === 12) document.getElementById(poleid).id = "startyellow4";
            if (z === 56) document.getElementById(poleid).id = "homeyellow1";
            if (z === 57) document.getElementById(poleid).id = "homeyellow2";
            if (z === 58) document.getElementById(poleid).id = "homeyellow3";
            if (z === 59) document.getElementById(poleid).id = "homeyellow4";
        }
        //green
        if (z === 9 || z === 10 || z === 20 || z === 21 || z === 6 || z === 16 || z === 27 || z === 38 || z === 49) {
            document.getElementById(poleid).style.backgroundColor = "green";
            document.getElementById(poleid).isSafe = true;
            if (z === 9) document.getElementById(poleid).id = "startgreen1";
            if (z === 10) document.getElementById(poleid).id = "startgreen2";
            if (z === 20) document.getElementById(poleid).id = "startgreen3";
            if (z === 21) document.getElementById(poleid).id = "startgreen4";
            if (z === 16) document.getElementById(poleid).id = "homegreen1";
            if (z === 27) document.getElementById(poleid).id = "homegreen2";
            if (z === 38) document.getElementById(poleid).id = "homegreen3";
            if (z === 49) document.getElementById(poleid).id = "homegreen4";
        }
        //blue
        if (z === 99 || z === 100 || z === 110 || z === 111 || z === 114 || z === 71 || z === 82 || z === 93 || z === 104) {
            document.getElementById(poleid).style.backgroundColor = "blue";
            document.getElementById(poleid).isSafe = true;
            if (z === 99) document.getElementById(poleid).id = "startblue1";
            if (z === 100) document.getElementById(poleid).id = "startblue2";
            if (z === 110) document.getElementById(poleid).id = "startblue3";
            if (z === 111) document.getElementById(poleid).id = "startblue4";
            if (z === 71) document.getElementById(poleid).id = "homeblue4";
            if (z === 82) document.getElementById(poleid).id = "homeblue3";
            if (z === 93) document.getElementById(poleid).id = "homeblue2";
            if (z === 104) document.getElementById(poleid).id = "homeblue1";
        }
        //red
        if (z === 108 || z === 109 || z === 119 || z === 120 || z === 76 || z === 61 || z === 62 || z === 63 || z === 64) {
            document.getElementById(poleid).style.backgroundColor = "red";
            document.getElementById(poleid).isSafe = true;
            if (z === 108) document.getElementById(poleid).id = "startred1";
            if (z === 109) document.getElementById(poleid).id = "startred2";
            if (z === 119) document.getElementById(poleid).id = "startred3";
            if (z === 120) document.getElementById(poleid).id = "startred4";
            if (z === 61) document.getElementById(poleid).id = "homered4";
            if (z === 62) document.getElementById(poleid).id = "homered3";
            if (z === 63) document.getElementById(poleid).id = "homered2";
            if (z === 64) document.getElementById(poleid).id = "homered1";
        }
        //gwiazdki
        if (z === 26 || z === 52 || z === 68 || z === 94) {
            document.getElementById(poleid).style.backgroundImage = "url(./jpg/gwiazdka.png)";
            document.getElementById(poleid).isSafe = true;
        }
    }
}

function generujpionki() {
    document.getElementById("startgreen1").appendChild(gracz1.pionek1);
    document.getElementById("startgreen2").appendChild(gracz1.pionek2);
    document.getElementById("startgreen3").appendChild(gracz1.pionek3);
    document.getElementById("startgreen4").appendChild(gracz1.pionek4);
    document.getElementById("startred1").appendChild(gracz2.pionek1);
    document.getElementById("startred2").appendChild(gracz2.pionek2);
    document.getElementById("startred3").appendChild(gracz2.pionek3);
    document.getElementById("startred4").appendChild(gracz2.pionek4);
    document.getElementById("startblue1").appendChild(gracz3.pionek1);
    document.getElementById("startblue2").appendChild(gracz3.pionek2);
    document.getElementById("startblue3").appendChild(gracz3.pionek3);
    document.getElementById("startblue4").appendChild(gracz3.pionek4);
    document.getElementById("startyellow1").appendChild(gracz4.pionek1);
    document.getElementById("startyellow2").appendChild(gracz4.pionek2);
    document.getElementById("startyellow3").appendChild(gracz4.pionek3);
    document.getElementById("startyellow4").appendChild(gracz4.pionek4);
}

function ktozaczyna() {
    let moneta = Math.floor(Math.random() * 4);
    if (moneta === 0) nowplaying = gracz1;
    if (moneta === 1) nowplaying = gracz2;
    if (moneta === 2) nowplaying = gracz3;
    if (moneta === 3) nowplaying = gracz4;
}

function losulosu() {
    los = Math.floor(Math.random()*6+1);
    if (los === 6) szostka++;
    else szostka = 0;
    document.getElementById("kostka").innerHTML = los;
    let pionki = 0;
    let pola = document.getElementsByTagName("td");
    for (let x = 0; x < pola.length; x++) {
        if (pola[x].id[0] != "s" && pola[x].children.length != 0) {
            for (let p = document.getElementById(pola[x].id).children.length-1; p >= 0 ; p--) {
                if (document.getElementById(pola[x].id).children[p].gracz === nowplaying.name) {
                    pionek = document.getElementById(pola[x].id).children[p];
                    pionki++;
                    break;
                }
            }
        }
    }
    if (szostka === 3) {
        alert("Trzecia szóstka z rzędu. Tracisz kolejkę.");
        szostka = 0;
        if (nowplaying === gracz1) nowplaying = gracz2;
        else if (nowplaying === gracz2) nowplaying = gracz3;
        else if (nowplaying === gracz3) nowplaying = gracz4;
        else if (nowplaying === gracz4) nowplaying = gracz1;
        setTimeout(() => {document.getElementById("info").innerHTML = nowplaying.kolor; document.getElementById("kostka").innerHTML = ""},500);
        document.getElementById("losuj").disabled = false;
    } else if (pionki === 0) {
        if (los === 6) {
            let start;
            if (nowplaying === gracz1) start = 0;
            if (nowplaying === gracz2) start = 10;
            if (nowplaying === gracz3) start = 20;
            if (nowplaying === gracz4) start = 30;
            for (let h = 1; h < 5; h++) {
                if (document.getElementById("start" + nowplaying.kolor + h).children.length === 1) {
                    pionek = document.getElementById("start" + nowplaying.kolor + h).children[0];
                    document.getElementById("p" + start).appendChild(pionek);
                    pionek.pole = start;
                    break;
                }
            }
        } else {
            if (nowplaying === gracz1) nowplaying = gracz2;
            else if (nowplaying === gracz2) nowplaying = gracz3;
            else if (nowplaying === gracz3) nowplaying = gracz4;
            else if (nowplaying === gracz4) nowplaying = gracz1;        
            setTimeout(() => {document.getElementById("info").innerHTML = nowplaying.kolor; document.getElementById("kostka").innerHTML = ""},500);
        }
    } else if (pionki === 1 && los != 6) {
        autoruch(pionek);
    } else {
        if (nowplaying.pionek1.pole != nowplaying.pionek1.start) nowplaying.pionek1.addEventListener("click",ruch);
        if (nowplaying.pionek2.pole != nowplaying.pionek2.start) nowplaying.pionek2.addEventListener("click",ruch);
        if (nowplaying.pionek3.pole != nowplaying.pionek3.start) nowplaying.pionek3.addEventListener("click",ruch);
        if (nowplaying.pionek4.pole != nowplaying.pionek4.start) nowplaying.pionek4.addEventListener("click",ruch);
        if (los === 6) {
            if (nowplaying.pionek1.pole === nowplaying.pionek1.start) nowplaying.pionek1.addEventListener("click",ruch);
            if (nowplaying.pionek2.pole === nowplaying.pionek2.start) nowplaying.pionek2.addEventListener("click",ruch);
            if (nowplaying.pionek3.pole === nowplaying.pionek3.start) nowplaying.pionek3.addEventListener("click",ruch);
            if (nowplaying.pionek4.pole === nowplaying.pionek4.start) nowplaying.pionek4.addEventListener("click",ruch);
        }
        document.getElementById("losuj").disabled = true;
    }
}

function ruch(event) {
    nowplaying.pionek1.removeEventListener("click",ruch);
    nowplaying.pionek2.removeEventListener("click",ruch);
    nowplaying.pionek3.removeEventListener("click",ruch);
    nowplaying.pionek4.removeEventListener("click",ruch);
    autoruch(event.target);
}

function autoruch(pion) {
    if (pion.pole === pion.start) {
        if (pion.gracz === "gracz1") {
            document.getElementById("p0").appendChild(pion);
            pion.pole = 0;
        }
        if (pion.gracz === "gracz2") {
            document.getElementById("p10").appendChild(pion);
            pion.pole = 10;
        }
        if (pion.gracz === "gracz3") {
            document.getElementById("p20").appendChild(pion);
            pion.pole = 20;
        }
        if (pion.gracz === "gracz4") {
            document.getElementById("p30").appendChild(pion);
            pion.pole = 30;
        }
        document.getElementById("losuj").disabled = false;
    } else {
        let plus1 = setInterval(forward,300);
        let pola = 1;
        pionek = pion;
        function forward() {
            if (pionek.pola+los < 44) {
                document.getElementById("losuj").disabled = true;
                let newid = parseInt(pionek.pole+1);
                if (newid > 39) newid -= 40;
                pionek.pola++;
                if (pionek.pola >= 40) {
                    if (pionek.gracz === "gracz1") {
                        if (pionek.pola === 40) {
                            pionek.pole = "homegreen1";
                            document.getElementById("homegreen1").appendChild(pionek);
                        }
                        else if (pionek.pole === "homegreen1") {
                            pionek.pole = "homegreen2";
                            document.getElementById("homegreen2").appendChild(pionek);
                        } 
                        else if (pionek.pole === "homegreen2") {
                            pionek.pole = "homegreen3";
                            document.getElementById("homegreen3").appendChild(pionek);
                        }
                        else if (pionek.pole === "homegreen3") {
                            pionek.pole = "homegreen4";
                            document.getElementById("homegreen4").appendChild(pionek);
                        }
                    }
                    else if (pionek.gracz === "gracz2") {
                        if (pionek.pola === 40) {
                            pionek.pole = "homered1";
                            document.getElementById("homered1").appendChild(pionek);
                        }
                        else if (pionek.pole === "homered1") {
                            pionek.pole = "homered2";
                            document.getElementById("homered2").appendChild(pionek);
                        }
                        else if (pionek.pole === "homered2") {
                            pionek.pole = "homered3";
                            document.getElementById("homered3").appendChild(pionek);
                        }
                        else if (pionek.pole === "homered3") {
                            pionek.pole = "homered4";
                            document.getElementById("homered4").appendChild(pionek);
                        }
                    }
                    else if (pionek.gracz === "gracz3") {
                        if (pionek.pola === 40) {
                            pionek.pole = "homeblue1";
                            document.getElementById("homeblue1").appendChild(pionek);
                        }
                        else if (pionek.pole === "homeblue1") {
                            pionek.pole = "homeblue2";
                            document.getElementById("homeblue2").appendChild(pionek);
                        }
                        else if (pionek.pole === "homeblue2") {
                            pionek.pole = "homeblue3";
                            document.getElementById("homeblue3").appendChild(pionek);
                        }
                        else if (pionek.pole === "homeblue3") {
                            pionek.pole = "homeblue4";
                            document.getElementById("homeblue4").appendChild(pionek);
                        }
                    }
                    else if (pionek.gracz === "gracz4") {
                        if (pionek.pola === 40) {
                            pionek.pole = "homeyellow1";
                            document.getElementById("homeyellow1").appendChild(pionek);
                        }
                        else if (pionek.pole === "homeyellow1") {
                            pionek.pole = "homeyellow2";
                            document.getElementById("homeyellow2").appendChild(pionek);
                        }
                        else if (pionek.pole === "homeyellow2") {
                            pionek.pole = "homeyellow3";
                            document.getElementById("homeyellow3").appendChild(pionek);
                        }
                        else if (pionek.pola === "homeyellow3") {
                            pionek.pole = "homeyellow4";
                            document.getElementById("homeyellow4").appendChild(pionek);
                        }
                    }
                } else {
                    pionek.pole = newid;
                    document.getElementById("p" + newid).appendChild(pionek);
                }
                if (pola === los) {
                    if (pionek.pola === 44) {
                        document.getElementById("homered4").removeChild(pionek);
                        clearInterval(plus1);
                    }
                    //bicie
                    if (pionek.pola < 40 && document.getElementById("p" + newid).children.length > 1 && document.getElementById("p" + newid).isSafe != true) {
                        for (let x = document.getElementById("p" + newid).children.length-1; x >= 0 ; x--) {
                            if (document.getElementById("p" + newid).children[x].gracz != nowplaying.name) {
                                document.getElementById("p" + newid).children[x].pole = document.getElementById("p" + newid).children[x].start;
                                document.getElementById("p" + newid).children[x].pola = 0;
                                document.getElementById(document.getElementById("p" + newid).children[x].start).appendChild(document.getElementById("p" + newid).children[x]);
                                bicie = true;
                            }
                        }
                    } else bicie = false;
                    if (prevlos != 6 && bicie === false) {
                        if (nowplaying === gracz1) nowplaying = gracz2;
                        else if (nowplaying === gracz2) nowplaying = gracz3;
                        else if (nowplaying === gracz3) nowplaying = gracz4;
                        else if (nowplaying === gracz4) nowplaying = gracz1;
                        document.getElementById("info").innerHTML = nowplaying.kolor;
                    }
                    document.getElementById("losuj").disabled = false;
                    document.getElementById("kostka").innerHTML = "";
                    clearInterval(plus1);
                }
                pola++;
            } else {
                document.getElementById("losuj").disabled = false;
                document.getElementById("kostka").innerHTML = "";
                clearInterval(plus1);
            }
        }
        prevlos = los;
    }
}//w sobotę jak miastowa młodzież