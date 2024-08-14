const fruits = ['apple','Banana','Mango'];
const index = fruits.indexOf('Banana')
const hasBanana = fruits.includes('Banana')
const found = fruits.find(item => item == 'Banana')
const foundFilter = fruits.filter(item => item == 'Banana1')
const foundMap = fruits.map(item => item == 'Banana1')
console.log(index,hasBanana,found,foundFilter,foundMap)
