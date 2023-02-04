const data = {
  name: 'Akari Suwa',
  player: 'Pedro',
  occupation: 'Miko',
  age: 25,
  sex: 'female',
  birthplace: 'Suwa',

  life: {
    current: 28,
    max: 12,
  },
  sanity: {
    current: 24,
    max: 15,
  },
  stamina: {
    current: 4,
    max: 11,
  },
   mana: {
    current: 24,
    max: 24,
  },

  weapons: [
    {
      name: 'Gohei',
      type: 'Outro',
      damage: '1d6',
      attack: 'Dex-1',
    },
    {
      name: 'Ofuda',
      type: 'Ofuda',
      damage: '2d6-1',
      attack: 'Dex',
    },
     {
      name: 'Sai',
      type: 'Sai',
      damage: '2d6+3',
      attack: 'Dex-3',
    },
  ],
  attributes: [
    {
      type: 'Força',
      amount: 10,
    },
    {
      type: 'Dextreza',
      amount: 11,
    },
    {
      type: 'Inteligência',
      amount: 12,
    },
    {
      type: 'Saúde',
      amount: 11,
    },
    {
      type: 'Vontade',
      amount: 12,
    },
    {
      type: 'Percepção',
      amount: 12,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
    {
      type: 'Intimidação',
      amount: 12,
    },
    {
      type: 'Parry',
      amount: 11,
    },
    {
      type: 'Bloqueio',
      amount: 13,
    },
    {
      type: 'Esquiva',
      amount: 10,
    },
  ],
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css('width', `${calculateBar(data.sanity.current, data.sanity.max)}%`)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

$('.staminaBar').css('width', `${calculateBar(data.stamina.current, data.stamina.max)}%`)
$('#staminaCount').text(`${data.stamina.current}/${data.stamina.max}`)
$('#staminaCurrent').val(data.stamina.current)
$('#staminaMax').val(data.stamina.max)

$('.manaBar').css('width', `${calculateBar(data.mana.current, data.mana.max)}%`)
$('#manaCount').text(`${data.mana.current}/${data.mana.max}`)
$('#manaCurrent').val(data.mana.current)
$('#manaMax').val(data.mana.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')
const staminaModal = $('#staminaModal')
const manaModal = $('#manaModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  }
})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('3d6')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('.staminaBar').click(function () {
  console.log(this)
  staminaModal.css('display', 'block')
})

$('.manaBar').click(function () {
  console.log(this)
  manaModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})

$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#possession').change(function () {
  if (this.checked) {
    console.log('Modo possessão ativado!')
  } else {
    console.log('Modo possessão desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    attack: $('#weaponAttack').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

  $('#changeStamina').submit(function (event) {
  let current = Number($('#staminaCurrent').val())
  const max = Number($('#staminaMax').val())

  if (current > max) {
    alert('A stamina atual não pode ser maior que a maxima!')
    current = max
  }

  data.stamina.current = current
  data.stamina.max = max
  $('.staminaBar').css('width', `${calculateBar(current, max)}%`)
  $('#staminaCount').text(`${current}/${max}`)

  closeModal('#staminaModal')
  event.preventDefault()
})

$('#changeMana').submit(function (event) {
  let current = Number($('#manaCurrent').val())
  const max = Number($('#manaMax').val())

  if (current > max) {
    alert('A mana atual não pode ser maior que a maxima!')
    current = max
  }

  data.mana.current = current
  data.mana.max = max
  $('.manaBar').css('width', `${calculateBar(current, max)}%`)
  $('#manaCount').text(`${current}/${max}`)

  closeModal('#manaModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {

  const table = [
    { normal: 9 },
    { normal: 8, good: 9 },
    { normal: 7, good: 9 },
    { normal: 6, good: 8 },
    { normal: 5, good: 8, extreme: 9 },
    { normal: 4, good: 7, extreme: 9 },
    { normal: 3, good: 7, extreme: 18 },
    { normal: 2, good: 6, extreme: 17 },
    { normal: 1, good: 6, extreme: 17 },
    { normal: 0, good: 5, extreme: 17 },
    { normal: 0, good: 5, extreme: 16 },
    { normal: 0, good: 4, extreme: 16 },
    { normal: 0, good: 4, extreme: 16 },
    { normal: 0, good: 3, extreme: 15 },
    { normal: 0, good: 3, extreme: 15 },
    { normal: 0, good: 2, extreme: 15 },
    { normal: 0, good: 2, extreme: 14 },
    { normal: 0, good: 1, extreme: 14 },
    { normal: 0, good: 1, extreme: 13 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Falha Crítica'
    if (dice >= type.good) return 'Falha Normal'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Sucesso Crítico'
  } else if (type.good) {
    if (dice >= type.good) return 'Falha'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Sucesso Crítico'
  } else if (type.normal) {
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Sucesso Crítico'
  }
}
function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.attack}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}
