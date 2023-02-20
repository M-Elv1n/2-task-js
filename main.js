// 1 Input ile daxil edilen adi 5 defe ekrana yazdir

// let a = prompt("adi daxil edin")

// for (let i = 0; i < 5; i++) {
//     console.log(a)
// }




// ==================================================================

// 2 Ekrana 5 defe Adini yazdir 

// let a = "Elvin"
// for (let i = 0; i < 5; i++) {
//     console.log(a)
// }





// ==================================================================

// 3 Input ile daxil edilen adi, Input ile daxil edilen eded defe ekrana yazdir

// let a = +prompt("nece defe adi tekrar etmek isteyirsen?")
// let c = prompt("adi daxil edin:")

// for (let i = 0; i < a; i++) {
//     console.log(c)
// }



// ==================================================================

// 4 1-den Input ile daxil edilen edede qeder cut ededleri tapin

// let a = +prompt("necenci edede kimi yoxlamaq isteyirsiniz cut ededleri")

// for (let i = 1; i <= a; i++) {
//     if(i%2 ===0){
//         console.log(i)
//     }
// }



// ==================================================================

// 5 Input ile daxil edilen 5 ededden menfi olanların toplamını, cut olanlarin vurgunu tapin
// let count = 0
// let multipliy = 0

// for (let i = 1; i < 5; i++) {
//     let a = +prompt("eded daxil edin")
//     if(a < 0){
//         count = count + a
//     }else if (a%2===0 ){
//         multipliy = 1
//         multipliy = multipliy * a
//     }
// }
// console.log("menfi ededler ", count)
// console.log("cut ededler ", multipliy)



// ==================================================================

//6   5 fenden umumi ortalama cixsin. 
// 	Dersler input ile daxil edilsin ve 0dan 100-e qeder qiymet verilsin. Ededi ortalam tapilsin 5 derse gore. 
// 	Eger ortalama 90+ ise A, 81-90 ise B, 71-80 ise C,c 61-70 ise D, 51-60 ise E, 50den asagi ise Kesilmisiniz ekrana cixsin. 
// 	Istifadeci menfi eded daxil ede bilmez !


// let b = 0
// for (let i = 0; i < 5; i++) {
//     let a = +prompt("Giymetleri daxil edin")
//     b = b + a
// }
// let count = b/5
 
// if(count > 90){
//     console.log("A")
// } else if(count > 80){
//     console.log("B")
// }else if(count > 70){
//     console.log("C")
// }else if(count > 60){
//     console.log("D")
// }else if(count < 50){
//     console.log("Kesildun")
// }





// ==================================================================

// 7  n = 7

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7

for (let i = 1; i <= 7; i++) {
    let str = ""
    for (let  y= 1; y <= i; y++) {
        str += y + ""
    }
    console.log(str)
}






// ==================================================================

// 8  a = 4,b = 5
// * * * *
// * * * *
// * * * *
// * * * *
// * * * *

// for (let i = 0; i < 5; i++) {
//     let str = ""
//     for (let y = 0; y < 4; y++) {
//         str = str + "*"
//     }
//     console.log(str)
// }