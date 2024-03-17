alert ('рассказать как правильно делать проверку на NaN')
alert ('некоторые задания осознано усложнены и использованны способы вперемешку или сделаны слишкам сжато. все это для отработки различных методов')

// 1 ------------------------------
// let userName = prompt ('введите ваше имя')
// alert(`ваше имя ${userName}`)

// 2 -------------------------------
// const todaysYear = 2024
// let usersYearBirth = prompt('ваш год рождения')
// // let userAge = todaysYear - usersYearBirth
// // alert(`ваш возраст ${userAge}`)
// alert(`ваш возраст ${todaysYear - usersYearBirth}`)

// 3 ----------------------------------------------
// alert(`периметр равен ${prompt('введите длинну стороны квадрата') * 4 }`)

// 4 --------------------------------------------------
// let radius = prompt('введите радиус окружности')
// console.log(+radius)
// const circumference = (a) => Math.PI * (Math.pow(a, 2))    // как привильно возвести в степень. приоритеты арифм операций
// let result = circumference(+radius)
// alert(result)

// 5 -------------------------------------------------------------
// const distance = +prompt('расстояние между точками в км')
// const time = +prompt('за какое время хотите добраться в часах?')
// function speed (d, t) {
//     return  d / t
// }
// alert(`ваша скорасть должна быть ${speed(distance, time)} км/ч`)

// // let result1 = speed(distance, time)
// // console.log(result1)
// // if (result1 === NaN) {       // как проверить NaN
// //     alert('вы нажали отмена или ввели 0 или буквы')
// // } else {
// //     alert(`ваша скорасть должна быть ${speed(distance, time)} км/ч`)
        
// // }

// 6 -----------------------------------------------------------------------
// const rate = 0.9
// alert ( `у вас ${+prompt('сколько долларов?') * rate} евро` )

// 7 -------------------------------------------------------------------
// alert ( `у вас поместиться ${Math.trunc(+prompt('объем накопителя в Мб?') / 820)} файлов` )

// 8 ------------------------------------------------------------
// const userСash = +prompt ('сколько у Вас денег?')
// const priceProduct = +prompt ('стоимость товара?')
// const wholUnitsGoods = function(с, p) {
//     let rez
//     rez = Math.trunc(с / p)
//     return rez
// }
// const moneyBack = function(c, p) {
//     let rez
//     rez =  c % p
//     return rez
// }
// const units = wholUnitsGoods(userСash, priceProduct)
// const overMoney = moneyBack(userСash, priceProduct)
// alert('колличество товара' + ' ' + units + ' ' + 'шт' )
// alert('ваша сдача равна' + ' ' + overMoney)


// 9 ---------------------------------------------------------------------------
// const receivedData = +prompt('введите 3х значное число')
// const reversed = (num) => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)  // не понял как делать по остатку от деления . код взял из интернета
// const result = reversed(receivedData)
// alert(`ваше число наоборот ${result}`)


// 10 --------------------------------------------------------------------------
// const userNumber = prompt ('введите целое число')
// const num = +userNumber  
// !(Number.isInteger(num) && num == 0 && !(userNumber == null) ) || alert(`${num} такое число не проверяем`)   // проверка на 0
// !(userNumber == null) || alert(`Вы нажали отмена`)
// Number.isNaN(num) || Number.isInteger(num) || num == 0 || alert(`${num} введите челое число`)  
// !Number.isInteger(num) || num % 2 == 0 || alert(`${num} не четное число`)
// !Number.isInteger(num) || num % 2 != 0 || num == 0 || alert(`${num} четное число`)
// !(Number.isNaN(num)) || alert(`${userNumber}  это же текст!!!`)




