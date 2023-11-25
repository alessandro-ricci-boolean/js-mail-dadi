// ESERCIZIO MAIL

const emails = ["example1@email.com", "example2@email.com", "example3@email.com", "example4@email.com", "example5@email.com", "example6@email.com", "example7@email.com",];

let user_email = prompt("Inserisci la tua email");

let flag = false;

for(let i=0; i<emails.length; i++){
    if(emails[i] == user_email){
        flag = true;
    }
}

if(flag == true){
    console.log("Mail presente");
}
else{
    console.log("Mail non presente");
}

// ESERCIZIO DADI

let user_number = Math.floor(Math.random() * 6 + 1);
let computer_number = Math.floor(Math.random() * 6 + 1);

console.log(user_number);
console.log(computer_number)

if(user_number > computer_number){
    console.log("Hai vinto");
}
else if(user_number < computer_number){
    console.log("Hai perso");
}
else{
    console.log("Pareggio");
}