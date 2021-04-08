let paths = [
    "./",
    "./cdn",
    "./cdn/agents",
    "./cdn/agents/artwork",
    "./cdn/agents/artwork/1.png",
    "./cdn/agents/artwork/2.png",
    "./cdn/agents/artwork/3.png",
    "./cdn/agents/artwork/4.png",
    "./cdn/agents/artwork/5.png",
    "./cdn/agents/artwork/6.png",
    "./cdn/agents/artwork/7.png",
    "./cdn/agents/artwork/8.png",
    "./cdn/agents/artwork/9.png",
    "./cdn/agents/artwork/10.png",
    "./cdn/agents/artwork/11.png",
    "./cdn/agents/artwork/12.png",
    "./cdn/agents/artwork/13.png",
    "./cdn/agents/artwork/14.png",
    "./cdn/agents/artwork/15.png",
    "./cdn/agents/inGameIcon",
    "./cdn/agents/inGameIcon/1.png",
    "./cdn/agents/inGameIcon/2.png",
    "./cdn/agents/inGameIcon/3.png",
    "./cdn/agents/inGameIcon/4.png",
    "./cdn/agents/inGameIcon/5.png",
    "./cdn/agents/inGameIcon/6.png",
    "./cdn/agents/inGameIcon/7.png",
    "./cdn/agents/inGameIcon/8.png",
    "./cdn/agents/inGameIcon/9.png",
    "./cdn/agents/inGameIcon/10.png",
    "./cdn/agents/inGameIcon/11.png",
    "./cdn/agents/inGameIcon/12.png",
    "./cdn/agents/inGameIcon/13.png",
    "./cdn/agents/inGameIcon/14.png",
    "./cdn/agents/inGameIcon/15.png",
    "./cdn/abilities",
    "./cdn/abilities/utils",
    "./cdn/abilities/utils/Duration.png",
    "./cdn/abilities/utils/Uses_1.png",
    "./cdn/abilities/utils/Uses_2.png",
    "./cdn/abilities/utils/Uses_3.png",
    "./cdn/abilities/utils/Uses_5_Astra.png",
    "./cdn/abilities/icons",
    "./cdn/abilities/icons/1",
    "./cdn/abilities/icons/1/C.png",
    "./cdn/abilities/icons/1/Q.png",
    "./cdn/abilities/icons/1/E.png",
    "./cdn/abilities/icons/1/X.png",
    "./cdn/abilities/icons/2",
    "./cdn/abilities/icons/2/C.png",
    "./cdn/abilities/icons/2/Q.png",
    "./cdn/abilities/icons/2/E.png",
    "./cdn/abilities/icons/2/X.png",
    "./cdn/abilities/icons/3",
    "./cdn/abilities/icons/3/C.png",
    "./cdn/abilities/icons/3/Q.png",
    "./cdn/abilities/icons/3/E.png",
    "./cdn/abilities/icons/3/X.png",
    "./cdn/abilities/icons/4",
    "./cdn/abilities/icons/4/C.png",
    "./cdn/abilities/icons/4/Q.png",
    "./cdn/abilities/icons/4/E.png",
    "./cdn/abilities/icons/4/X.png",
    "./cdn/abilities/icons/5",
    "./cdn/abilities/icons/5/C.png",
    "./cdn/abilities/icons/5/Q.png",
    "./cdn/abilities/icons/5/E.png",
    "./cdn/abilities/icons/5/X.png",
    "./cdn/abilities/icons/6",
    "./cdn/abilities/icons/6/C.png",
    "./cdn/abilities/icons/6/Q.png",
    "./cdn/abilities/icons/6/E.png",
    "./cdn/abilities/icons/6/X.png",
    "./cdn/abilities/icons/7",
    "./cdn/abilities/icons/7/C.png",
    "./cdn/abilities/icons/7/Q.png",
    "./cdn/abilities/icons/7/E.png",
    "./cdn/abilities/icons/7/X.png",
    "./cdn/abilities/icons/8",
    "./cdn/abilities/icons/8/C.png",
    "./cdn/abilities/icons/8/Q.png",
    "./cdn/abilities/icons/8/E.png",
    "./cdn/abilities/icons/8/X.png",
    "./cdn/abilities/icons/9",
    "./cdn/abilities/icons/9/C.png",
    "./cdn/abilities/icons/9/Q.png",
    "./cdn/abilities/icons/9/E.png",
    "./cdn/abilities/icons/9/X.png",
    "./cdn/abilities/icons/10",
    "./cdn/abilities/icons/10/C.png",
    "./cdn/abilities/icons/10/Q.png",
    "./cdn/abilities/icons/10/E.png",
    "./cdn/abilities/icons/10/X.png",
    "./cdn/abilities/icons/11",
    "./cdn/abilities/icons/11/C.png",
    "./cdn/abilities/icons/11/Q.png",
    "./cdn/abilities/icons/11/E.png",
    "./cdn/abilities/icons/11/X.png",
    "./cdn/abilities/icons/12",
    "./cdn/abilities/icons/12/C.png",
    "./cdn/abilities/icons/12/Q.png",
    "./cdn/abilities/icons/12/E.png",
    "./cdn/abilities/icons/12/X.png",
    "./cdn/abilities/icons/13",
    "./cdn/abilities/icons/13/C.png",
    "./cdn/abilities/icons/13/Q.png",
    "./cdn/abilities/icons/13/E.png",
    "./cdn/abilities/icons/13/X.png",
    "./cdn/abilities/icons/14",
    "./cdn/abilities/icons/14/C.png",
    "./cdn/abilities/icons/14/Q.png",
    "./cdn/abilities/icons/14/E.png",
    "./cdn/abilities/icons/14/X.png",
    "./cdn/abilities/icons/15",
    "./cdn/abilities/icons/15/C.png",
    "./cdn/abilities/icons/15/Q.png",
    "./cdn/abilities/icons/15/E.png",
    "./cdn/abilities/icons/15/X.png",
    "./cdn/abilities/icons/15/X2.png",
    "./cdn/utils",
    "./cdn/utils/gameIcons",
    "./cdn/utils/gameIcons/icon_1.png",
    "./cdn/utils/gameIcons/icon_2.png",
    "./cdn/utils/gameIcons/icon_3.png",
    "./cdn/utils/gameIcons/icon_4.png",
    "./cdn/utils/gameIcons/icon_5.png",
    "./cdn/utils/ping",
    "./cdn/utils/ping/0.png",
    "./cdn/utils/ping/1.png",
    "./cdn/utils/ping/2.png",
    "./cdn/utils/ping/3.png",
    "./cdn/utils/ping/4.png",
    "./cdn/utils/help",
    "./cdn/utils/help/help1.png",
    "./cdn/utils/help/help2.png",
    "./metadata",
    "./metadata/en",
    "./metadata/en/v1",
    "./metadata/en/v1/agents_by_name.json",
    "./metadata/en/v1/agents_by_number.json"
];

window.onload = function() {
    document.body.appendChild(document.createElement("hr"))
    ////

    let cPath = window.location.href.split("/").splice(3).join("/").split("index.html").join("");
    if(cPath.endsWith("/")) {
    cPath = cPath.split("/");
    cPath = cPath.splice(0,cPath.length-1).join("/")
    }
    cPath = "./" + cPath; 
    let aPaths = paths.filter(p => cPath == "./" ? p.startsWith(cPath) && p != cPath : p.startsWith(cPath + "/") && p != cPath)
    let fPaths = myFilter(aPaths,cPath)
    console.log(cPath)
    if(cPath != "./") {
        let _a = document.createElement('a')
        _a.innerHTML = `<img src="/assists/up.png" width="25px" height="25px"/> ./..<br>`
        _a.href = "..";
        document.body.appendChild(_a)
    }
    for(let fP of fPaths) {
        let _a = document.createElement('a')
        let t = fP.split("/")[fP.split("/").length-1]
        _a.innerHTML = `<img src="/assists/${getIco(fP)}.png" width="25px" height="25px"/> ./${t}<br>`
        _a.href = t
        document.body.appendChild(_a)
        }
    ////
    document.body.appendChild(document.createElement("hr"))
};

function myFilter(arr,cP) {
    let lArr = arr.map(a => a.split("/").splice(0,cP == "./" ? cP.split("/").length : cP.split("/").length +1).join("/"))
    let lArr2 = [];
    lArr.forEach((v) => {
        if(!lArr2.includes(v)) lArr2.push(v)
    })
    return lArr2
}

function getIco(f) {
    for(let ft of [
        ['.png','image'],
        ['.json','json3']
    ]){
        if(f.endsWith(ft[0])) return ft[1];
    }
    return 'folder';
}
