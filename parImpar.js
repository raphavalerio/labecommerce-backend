const numDev = process.argv[2]
const num = Number(process.argv[3])


const numAleatorio = () => {
    return Math.floor(Math.random() * 10)
}

const numPC = numAleatorio()

const soma = num + numPC
const resultado = soma % 2 === 0

const validarNumDev = (numDev) => {
    return numDev === "par" ? "par" : "impar"
}

const ganhador = () => {
    if (validarNumDev(numDev) === "par" && resultado) {
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${soma}. Você ganhou!`);
    } else if (validarNumDev(numDev) === "impar" && !resultado) {
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${soma}. Você ganhou!`)
    } else {
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${soma}. Você perdeu!`)
    }
}

ganhador()