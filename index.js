// напишіть фукцію, яка приймає два рядки і повертає true, якщо з літер першого рядка мажна скласти другий, false - якщо не можна
//compare('test', 'text') -> false
//compare('Mom', 'omm') -> true
//compare('asd', 'Sad') ->true
//compare('asd', 'ssaadd') ->false

// створити словник: ключ - буква, значення -кількість разів цієї букви в слові
//перебираємо чи є літера в мапі, якщо є - збільшуємо кількість якщо немає - встановлюємо кількість 1
// словників два - для обох рядків
// порівняти між собою ці словники

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */

// debugger;
const compare = (str1, str2) => {
    const newStrForMap1 = new Map();
    const newStrForMap2 = new Map();

    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw TypeError("Must be string");
    }

    str1.trim()
        .toLowerCase()
        .split("")
        .forEach((letter) => {
            if (newStrForMap1.has(letter)) {
                let countLetters = newStrForMap1.get(letter);
                countLetters++;
                newStrForMap1.set(letter, countLetters);
            } else {
                newStrForMap1.set(letter, 1);
            }
        });

    str2.trim()
        .toLowerCase()
        .split("")
        .forEach((letter) => {
            if (newStrForMap2.has(letter)) {
                let countLetters = newStrForMap2.get(letter);
                countLetters++;
                newStrForMap2.set(letter, countLetters);
            } else {
                newStrForMap2.set(letter, 1);
            }
        });

    for (let [key, val] of newStrForMap2) {
        // console.log("key:" + key + ", val:" + val);
        if (newStrForMap1.get(key)) {
            let valueFromMap1 = newStrForMap1.get(key);
            if (valueFromMap1 < val) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

console.log(compare("test", "text"));
console.log(compare("Mom", "omm"));
console.log(compare("asd", "Sad"));
console.log(compare("asd", "ssaadd"));
console.log(compare("", ""));
console.log(compare("Mom", ""));
console.log(compare("", "Sad"));
console.log(compare("22", "2222"));
console.log(compare("o", 22));
// console.log(compare(22, 22));
