document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  // get form data
  const name = document.getElementById("name").value;
  const player = document.getElementById("player").value;
  const occupation = document.getElementById("occupation").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const birthplace = document.getElementById("birthplace").value;

  // store form data in local storage
  localStorage.setItem("name", name);
  localStorage.setItem("player", player);
  localStorage.setItem("occupation", occupation);
  localStorage.setItem("age", age);
  localStorage.setItem("sex", sex);
  localStorage.setItem("birthplace", birthplace);
});

// retrieve data from local storage
const name = localStorage.getItem("name");
const player = localStorage.getItem("player");
const occupation = localStorage.getItem("occupation");
const age = localStorage.getItem("age");
const sex = localStorage.getItem("sex");
const birthplace = localStorage.getItem("birthplace");

// set form values
document.getElementById("name").value = name;
document.getElementById("player").value = player;
document.getElementById("occupation").value = occupation;
document.getElementById("age").value = age;
document.getElementById("sex").value = sex;
document.getElementById("birthplace").value = birthplace;

const data = {
  points: 0,
  energy: 12,

  life: {
    current: 12,
    max: 28,
  },
  sanity: {
    current: 15,
    max: 24,
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

  vantages: [
    {
      name: 'Tato Aguçado',
      cost: '9',
      description: '+3 em testes que envolvam o sentido do tato',
    },
    {
      name: 'Audição Aguçada',
      cost: '6',
      description: '+2 em testes que envolvam o sentido da audição',
    },
     {
      name: 'Ambidestria',
      cost: '10',
      description: 'Reduz modificador de -4 ao atacar com mão não dominante',
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

data.vantages.map((vantage, index) => {
  addVantageToTable(vantage, index)
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

$$('#addVantage').click(function () {
  openModal('#addVantageModal')
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

$('#addVantageForm').submit(function (event) {
  var vantageType = ''

  if ($('#vantageType').val() == 'fire') {
    vantageType = 'Fogo'
  } else if ($('#vantageType').val() == 'arch') {
    vantageType = 'Arco'
  } else if ($('#vantageType').val() == 'fight') {
    vantageType = 'Briga'
  }

  const vantage = {
    name: $('#vantageName').val(),
    type: vantageName,
    damage: $('#vantageCost').val(),
    attack: $('#vantageDescription').val(),
  }

  data.vantage.push(vantage)
  const id = data.vantage.length - 1
  addVantageToTable(vantage, id)

  closeModal('#addVantageModal')
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
    { normal: 18 },
    { normal: 17, good: 18 },
    { normal: 16, good: 18 },
    { normal: 15, good: 17 },
    { normal: 14, good: 17, extreme: 18 },
    { normal: 13, good: 16, extreme: 18 },
    { normal: 12, good: 16, extreme: 36 },
    { normal: 11, good: 15, extreme: 34 },
    { normal: 10, good: 15, extreme: 34 },
    { normal: 9, good: 14, extreme: 34 },
    { normal: 9, good: 14, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 6, good: 11, extreme: 30 },
    { normal: 6, good: 11, extreme: 28 },
    { normal: 5, good: 10, extreme: 28 },
    { normal: 5, good: 10, extreme: 26 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Falha Crítica'
    if (dice >= type.good) return 'Falha Normal'
    return 'Sucesso Normal'
  } else if (type.good) {
    if (dice >= type.good) return 'Falha'
    return 'Sucesso Normal'
  } 
  return 'Sucesso Crítico'
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

function addVantageToTable(vantage, id) {
  const newVantage = $(`<tr id="vantage_${id}">
        <td>
            <button onclick="deleteVantage(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${vantage.name}
        </td>
        <td>${vantage.type}</td>
        <td>${vantage.cost}</td>
        <td>${vantage.description}</td>
    </tr>`)
  $('table#vantage').append(newVantage)
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

function deleteVantgae(id) {
  $(`tr#${id}`).remove()
}
