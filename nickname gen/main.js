let InputName1 = document.getElementById('realName1');
let InputName2 = document.getElementById('realName2');
let outputEl = document.getElementById('outputNickname1');
let outputEl2 = document.getElementById('displayAllNames');
document.getElementById('getRandomName').addEventListener('click', random);
document.getElementById('2ndButton').addEventListener('click', displayAll);


allNames = ['the Editor', 'the Creator', 'the Coder',
    'the King', 'the Emperor', 'the Gamer'
];

function random() {

    let nickName = InputName1.value + ' ' + allNames[randomInt(0, allNames.length)] + ' ' + InputName2.value;
    outputEl.innerHTML = nickName;


}

function displayAll(event) {
    console.log(event);
    console.log(allNames);
    let divStr = "";
    for (let i = 0; i < allNames.length; i++) {
        divStr += `<div>${InputName1.value} ${allNames[i]} ${InputName2.value}</div>`;
    }

    outputEl2.innerHTML = divStr;

}