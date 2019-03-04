// const firstname = 'Saul';
// const lastname = 'Solano';
// console.log(firstname + ' ' + lastname);

// const firstName1 = 'Sam';
// const lastName1 = 'Solano';
// console.log(`${firstName1} ${lastName1}`);

// const namePrinter = (firstName, lastName) => {
//     console.log(`${firstName}  ${lastName}`);
//     return `${firstName}  ${lastName}`;
// }
// namePrinter('Sandy', 'Solano');

const printToDom = (name, number)=>{
    const  elementDiv = document.getElementById('band-list');
    elementDiv.innerHTML += `${number}. ${name} <br />`;
}


let bandNumber = 1;
const takeNumber = (bandName)=>{
    printToDom(bandName, bandNumber);
    bandNumber++;
};

takeNumber("Galactic Scum");
takeNumber("Underdogs");
takeNumber("Living Zombies");