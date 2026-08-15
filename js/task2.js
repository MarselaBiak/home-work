'use strict';

// задание 2

const degree = prompt('введите температуру в цельсиях')
const convert = prompt('во что хотите конвертировать градусы?(F - фаренгейт, K - кельвин, R - ранкина)')

const numberDegree = Number(degree)

const isValidDegree =
    degree !== null &&
    degree.trim() !== '' &&
    Number.isFinite(numberDegree) 

const scaleNames = {
    f: 'Фаренгейт',
    k: 'Кельвін',
    r: 'Ранкін',
}

if (!isValidDegree) {
    console.log('некорректный ввод')
} else if (numberDegree < -273.15) {
    console.log('ниже абсолютного нуля')
} else if (convert === null) {
    console.log('неизвестная шкала')
} else {
const scale = convert.trim().toLowerCase()

    if (!Object.hasOwn(scaleNames, scale)) {
        console.log('неизвестная шкала')
    } else {
        let result

        if (scale === 'f') {
            result = numberDegree * 1.8 + 32
        } else if (scale === 'k') {
            result = numberDegree + 273.15
        } else {
            result = numberDegree * 1.8 + 491.67
        }

        result = Math.round(result * 100) / 100

        const whatWeather = numberDegree < -10 ? 'мороз' :
            numberDegree < 0 ? 'холодно' :
            numberDegree < 15 ? 'прохолодно' :
            numberDegree <= 25 ? 'комфортно' : 'спека'   

        const scaleName = scaleNames[scale]

        console.log(`${numberDegree} °C = ${result} (${scaleName}) - ${whatWeather}`)
    }
}
