let nomeDoHeroi = "Larissa"
let xpDoHeroi = 7000;

function classificarXp() {
    if (xpDoHeroi <= 1000) {
        return "Ferro"
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        return "Bronze"
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        return "Prata"
    } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
        return "Ouro"
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        return "Platina"
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        return "Ascendente"
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        return "Imortal"
    } else {
        return "Radiante"
    }
}
    console.log("O herói de nome " + (nomeDoHeroi) + " está no nível de " + (classificarXp()));
