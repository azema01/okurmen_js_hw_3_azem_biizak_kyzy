let login = prompt("Введите логин:");
if (login === "Админ") {

    let password = prompt("Введите пароль:");
    if (password === "12ss") {
        alert("добро пожаловат!");
    } else if (password === '') {
        alert("отмена");
    } else {
        alert("не верно");
    }
} else if (login === '') {
    alert("отмена");
} else {
    alert("не провильно");
}


// let a = Number(prompt('jashyn kanchada'))
// if (a<=30, a>=18){
//     console.log('ujas kino');
// }
// else if(a<=17, a>=12){
//     console.log('fantastika');
// }
// else if(a<=11, a>=1){
//     console.log('multik');
// }
// else{
//     console.log('romantika');
// }
