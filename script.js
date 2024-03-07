const telebeler = [
    {
        fin: "785UHG6",
        name: "Sadiq",
        surname: "Nuriyev",
        isStudent: true,
    },
    {
        fin:"5478PLK",
        name: "Kenan",
        surname: "Babayev",
        isStudent: false,
    }, {
        fin:"KJL687H",
        name: "Amin",
        surname: "Quliyev",
        isStudent: true,
    }

];


for(let i=0; i<telebeler.length;i++) {
document.querySelector("tbody").innerHTML+=` <tr>
<th scope="row">${telebeler[i].fin}</th>
<td>${telebeler[i].surname}</td>
<td>${telebeler[i].name}</td>
<td>${telebeler[i].isStudent?"Telebe tehsil alir":"Telebe mezundur"}</td>
<td><i class="bi bi-pencil-square"></i></td>
<td><i class="bi bi-trash"></i></td>
</tr>`}

// REGULAR FUNKSIYA
function hesabla(eded1, eded2){
    return eded1+eded2
}
console.log(hesabla(3,5))

// OX FUNKSIYA
const oxFunksiya=(eded1,eded2)=>eded1+eded2
console.log(oxFunksiya(9,7))

// IIFE Immediatly Invoked Function Expression
(function(){
    console.log("Hello")
 }())

