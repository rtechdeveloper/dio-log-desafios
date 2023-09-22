// caso seja passado uma posição inválida do array o programa quebra, como tratar?
// dentro do switch case existe uma forma de utilizar condiçoes?

let marvelHero = [
    ["Batman",  7.500],   //0
    ["Superman", 9.500],   //1
    ["Spiderman", 7.300],   //2
    ["Ironman",  8.200]    //3
];
let nivelHero
let heroChoose = marvelHero[2]


    if (heroChoose[0,1] < 1.000){
        nivelHero = "Ferro"
        console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
    } 
        else if (heroChoose[0,1] > 1.000 && heroChoose[0,1] <= 2.000){
            nivelHero = "Bronze"
            console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
        } 
            else if (heroChoose[0,1] > 2.000 &&  heroChoose[0,1] <= 5.000){
                nivelHero = "Prata"
                console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
            }
                else if (heroChoose[0,1] > 5.000 &&  heroChoose[0,1] <= 7.000){
                    nivelHero = "Ouro"
                    console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
                }
                    else if (heroChoose[0,1] > 7.000 &&  heroChoose[0,1] <= 8.000){
                        nivelHero = "Platina"
                        console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
                    }
                        else if (heroChoose[0,1] > 8.000 &&  heroChoose[0,1] <= 9.000){
                            nivelHero = "Ascedente"
                            console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
                        }
                            else if (heroChoose[0,1] > 9.000 &&  heroChoose[0,1] <= 10.000){
                                nivelHero = "Imortal"
                                console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
                            }
                                else if (heroChoose[0,1] > 10.000){
                                    nivelHero = "Radiante"
                                    console.log("The hero name is " + heroChoose[0].toUpperCase() + " and your nivel is " + nivelHero)
                                }
         else{
                console.log("ALERT: Your level is small, You shall start again.")
            }
