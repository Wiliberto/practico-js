let name, lastname, completeName;
let nickName = "Rod";


function names (name, lastname){
    completeName = name + " " + lastname;
    return completeName; 
}

names("Rodrigo", "Cabrera")

console.log("Mi nombre es: " + completeName + " Pero prefiero que me digas " + nickName);