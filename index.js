const Mage = require('./Mage')
const Thief = require('./Thief')
const Warrior = require('./Warrior')

const yodao = new Mage('Yodao', 90, 4, 2, 14)
const kenzzy = new Thief('Kenzzy', 140, 22, 8)
const samezi = new Warrior('Samezi', 200, 14, 12, 4)

console.table({ yodao, kenzzy, samezi })

samezi.switchStance()
yodao.attack(samezi)
kenzzy.attack(yodao)

console.table({ yodao, kenzzy, samezi })

samezi.attack(yodao)
yodao.heal(yodao)
kenzzy.attack(samezi)

console.table({ yodao, kenzzy, samezi })
