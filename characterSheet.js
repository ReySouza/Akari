const data = {
   name: 'Akari Suwa',
  player: 'Pedro',
  occupation: 'Miko',
  age: 25,
  sex: 'female',
  birthplace: 'Suwa',
  points: 7,
  energy: 12,
  season: 12,
  focus: 5,

  life: {
    current: 12,
    max: 36,
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

    expertise: [
    {
      name: 'Tato Aguçado (+3)',
      cost: 9,
      description: '+3 em testes que envolvam o tato',
    },
      {
      name: 'Audição Aguçada (+2)',
      cost: 6,
      description: '+2 em testes que envolvam a audição',
    },
      {
      name: 'Ambidestria',
      cost: 10,
      description: 'Pode realizar testes com as duas mãos sem modificador de -4',
    },
      {
      name: 'Bloqueio Ampliado',
      cost: 5,
      description: '+1 em testes de bloqueio com escudo ou parry',
    },
      {
      name: 'Samjña',
      cost: 5,
      description: 'Ao suceder em um teste de HT, pode utilizar Esoterica para conjurar habilidades sazonais',
    },
      {
      name: 'Médium',
      cost: 5,
      description: '+1 em teste para localizar e se comunicar com espíritos que habitam em lugares, pessoas e objetos',
    },
      {
      name: 'Iaijutsu',
      cost: 0,
      description: '+1 em testes de linguagem corporal, uso de sai e saques rápidos com armas de uma ou duas mãos',
    },
      {
      name: 'Hipoalgia',
      cost: 6,
      description: '+3 para evitar quedas e resistir a dor física',
    },
      {
      name: 'Sentido de Vibração',
      cost: 8,
      description: 'Você consegue detectar o tamanho e a localização de algo a partir de vibrações captadas pela sua pele',
    },
  ],
        expertise2: [
    {
      name: '秘伝  ~ Shintai',
      type: 'Esoterica',
      cost: 0,
      damage: 0,
      time: '4 horas',
      duration: '12 horas',
      description: 'Durante 12 horas, você pode tornar qualquer objeto sagrado, isto fará com que o objeto passe a gerar Esoterica',
    },
    {
      name: '神祭  ~ Dança de Medoteko',
      type: 'Esoterica',
      cost: 3,
      damage: '3d6+5',
      time: '1 turno',
      duration: '1 turno',
      description: 'Você molda rochas no formato de onbashiras que então podem ser arremessadas com DEX-1, as onbashiras ficam fincadas no chão até que você as erga',
    },
    {
      name: '奥義  ~ Ritual de caça de misayama',
      type: 'Esoterica',
      cost: 4,
      damage: '4d6+2',
      time: 'até 1 hora',
      duration: 'indefinido',
      description: 'Você pode ser possuído por um espírito divino a qual você tenha entrado em contato, esta habilidade também permite que você invoque as vinhas de Wisteria, a arma sagrada do templo de Suwa',
    },
   {
      name: '彼岸剣  ~ Desilusão Corpórea',
      type: 'Esoterica',
      cost: '3 por clone',
      damage: 0,
      time: '1 turno',
      duration: '3 turnos',
      description: 'Sua metade fantasma pode se duplicar em até 4 vezes e assumir a sua forma, os clones terão acesso ao seu arsenal de armas, mas não suas habilidades, eles irão copiar todos os seus movimentos com um leve atraso',
    },
   {
      name: '修羅剣  ~ Obsessão com o mundo presente',
      type: 'Esoterica',
      cost: 3,
      damage: 0,
      time: '1 turno',
      duration: 'até o alvo se libertar',
      description: 'Sua metade fantasma é capaz de possuir e tomar o corpo de um alvo, este alvo deve realizar um teste de VON para evitar a possessão, ele repetirá o teste no fim de cada turno caso falhar ',
    },
      {
      name: '裏土曜  ~ 3 Kons, 7 Hakus',
      type: 'Sazonal',
      cost: '2 por turno',
      damage: 0,
      time: '1 turno',
      duration: 'depende',
      description: 'As chamas em suas costas criam uma aura de decadência e apodrecimento em torno de você, esta aura reduzirá o dano de qualquer ataque que passar por ela por 1d6, além disso, itens de ferro que atravessarem a aura começarão a enferrujar. Durante o doyo, você poderá destacar ela de seu corpo e posicionar ela em algum outro ponto, durante as monsões, esta habilidade também reduzirá seus ataques',
    },
       {
      name: '裏土曜  ~ Migração das borboletas de Makai',
      type: 'Sazonal',
      cost: 1,
      damage: '4d6 (+1d6)',
      time: '1 turno',
      duration: '1d6+1',
      description: 'As chamas em suas costas se transformam em borboletas vermelhas que voam até o alvo, ele deve suceder em um teste de dificuldade 12 ou tomará 4d6 de dano, ou metade em caso de sucesso. Ao seu comando, as borboletas podem permanecer no alvo e drenar sua energia sazonal, durante a duração do ataque, ele não poderá usar habilidades sazonais e tomará 1d6 por turno. Durante o doyou, o teste será substituido pelo teste de um atributo de sua preferencia, durante as monsões, você não terá controle sobre a direção das borboletas',
    },
      {
      name: '裏土曜  ~ Destino ligado por cedros',
      type: 'Sazonal',
      cost: 4,
      damage: '2d6+3',
      time: '1 turno',
      duration: '1d6+1',
      description: 'Raízes de árvore quebradiças e podres começarão a surgir do solo, qualquer inimigo em até 20ft a sua frente tomará 2d6+3 das raízes, ele deve suceder em um teste de DEX ou ficará imobilizado por 1d4 turnos. Durante o doyou, você poderá afetar qualquer criatura em um raio de 30ft ao seu redor, durante as monsões, você poderá escolher apenas um alvo',
    },
     {
      name: '裏土曜  ~ Perca de Vitalidade',
      type: 'Sazonal',
      cost: '1',
      damage: 0,
      time: '1 turno',
      duration: '1 turno',
      description: ' Você drena a energia da estação local para você e seus companheiros podendo gerar: 1d6 de energia sazonal, 2d6 de pontos de fatiga e 3d6 de esoterica/youjutsu, durante 2d6 turnos, a área ficará sem qualquer estação, durante o doyo, aumente 1d6 para cada um destes dados, durante as monsões, diminua 1d6',
    },
  ],
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.expertise.map((expertise, index) => {
   addExpertiseToTable(expertise, index)
})

data.expertise2.map((expertise2, index) => {
   addExpertise2ToTable(expertise2, index)
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
$('#points').val(data.points)
$('#energy').val(data.energy)
$('#season').val(data.season)
$('#focus').val(data.focus)

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

const input = document.querySelector("input");
input.addEventListener("input", function(event) {
  console.log(event.target.value);
});

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
  } else if (event.target.id == 'addExpertiseModal') {
     closeModal('#addExpertiseModal')
  } else if (event.target.id == 'addExpertise2Modal') {
     closeModal('#addExpertise2Modal')
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

$('#addExpertise').click(function() {
   openModal('#addExpertiseModal')
})

$('#addExpertise2').click(function() {
   openModal('#addExpertise2Modal')
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

$('#addExpertiseForm').submit(function (event) {
  var expertiseCost = ''

  if ($('#expertiseCost').val() == 1) {
    expertiseCost = 1
  } else if ($('#expertiseCost').val() == 2) {
    expertiseCost = 2
  } else if ($('#expertiseCost').val() == 3) {
    expertiseCost = 3
  }

  const expertise = {
    name: $('#expertiseName').val(),
    cost: $('#expertiseCost').val(),
    description: $('#expertiseDescription').val(),
  }

  data.expertise.push(expertise)
  const id = data.expertise.length - 1
  addExpertiseToTable(expertise, id)

  closeModal('#addExpertiseModal')
  event.preventDefault()
})


$('#addExpertise2Form').submit(function (event) {
  var expertise2Type = ''

  if ($('#expertise2Type').val() == 'seasonal') {
    expertise2Type = 'Sazonal'
  } else if ($('#expertise2Type').val() == 'esoterica') {
    expertise2Type = 'Esoterica'
  } else if ($('#expertise2Type').val() == 'youjutsu') {
    expertise2Type = 'Youjutsu'
  }

  const expertise2 = {
    name: $('#expertise2Name').val(),
    type: $('#expertise2Type').val(),
    cost: $('#expertise2Cost').val(),
    damage: $('#expertise2Damage').val(),
    time: $('#expertise2Time').val(),
    duration: $('#expertise2Duration').val(),
    description: $('#expertise2Description').val(),
    
  }

  data.expertise2.push(expertise2)
  const id = data.expertise2.length - 1
  addExpertise2ToTable(expertise2, id)

  closeModal('#addExpertise2Modal')
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

function addExpertiseToTable(expertise, id) {
  const newexpertise = $(`<tr id="expertise_${id}">
        <td>
            <button onclick="deleteExpertise(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise.name}
        </td>
        <td>${expertise.cost}</td>
        <td>${expertise.description}</td>
    </tr>`)
  $('table#expertise').append(newexpertise)
}

function addExpertise2ToTable(expertise2, id) {
  const newexpertise2 = $(`<tr id="expertise2_${id}">
        <td>
            <button onclick="deleteExpertise2(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise2.name}
        </td>
        <td>${expertise2.type}</td>
        <td>${expertise2.cost}</td>
        <td>${expertise2.damage}</td>
        <td>${expertise2.time}</td>
        <td>${expertise2.duration}</td>
        <td>
            <button onclick="showExpertise2Description(${id})">
                <i class="fa fa-info-circle"></i>
            </button>
        </td>
    </tr>`)
  $('table#expertise2').append(newexpertise2)
}

function showExpertise2Description(id) {
  const expertise2 = data.expertise2[id]
  $('#expertise2DescriptionTitle').text(expertise2.name)
  $('#expertise2DescriptionText').text(expertise2.description)
  $('#expertise2DescriptionModal').modal('show')
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

function deleteExpertise(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise2(id) {
  $(`tr#${id}`).remove()
}


/// Árvore de Foco

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});

 function convertNumber() {
      // Get the input value
      var input = document.getElementById("input").value;
      // Perform the conversion
      var output = input / 3;
      // Display the results
      document.getElementById("outputDisplay").innerHTML = "Output: " + output;
    }


function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.width = "500px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

   const areas = document.querySelectorAll("area");
  const sidebar = document.getElementById("mySidebar");

  for (let area of areas) {
    area.addEventListener("click", function() {
      toggleNav();
      updateSidebarContent(area.title);
    });
  }

  function toggleNav() {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

  function updateSidebarContent(title) {
    let content;
    switch (title) {
      case "A Verdadeira Face do Deus Secreto":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> No antigo Mausoléu Umebachi-Goryo, na vila destruída de Taishi, vocês fizeram uma descoberta incrivel, vocês libertaram uma nova força ao mundo, o Deus Secreto, absoluto em seu poder e supremo em sua sagacidade estará cada vez mais próximo de vocês, sintam seu poder correndo por tuas veias e vejam a natureza respirar e a energia se movimentar";
        break;
      case "Fé Nativa em meio a terra morta":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Dentro do panteão de Suwa, existem referências a um antigo Deus que vivia antes de Takeminakata, este Deus era representado como uma serpente gigante e era capaz de devastar a terra com maldições e pragas, sua principal função era equilibrar o poder criativo dos demais Deuses e garantir que Suwa permanecesse em equilíbrio. Algo muito parecido com o que você faz com sua estação, o Doyo. Infelizmente, o culto a este Deus desapareceu da face da terra, nenhum rastro tem sido encontrado desde então, algumas teorias afirmam que este Deus teria sido morto por Takeminakata quando este se estabeleceu como Suwa-Daimyojin <br> Ao comprar este foco, você ganhará 5 pontos sazonais";
        break;
      case "Virtudes de Liderança":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> O Clã Suwa já teve um grau muito maior de independência do que ele tem agora, no passado, há pelo menos 300 anos atrás, ele era um clã completamente independente e que até disputava suas próprias guerras de conquistas contra outros. A derrota contra os Uesugi foi absolutamente brutal, o seu povo foi colocado em um estado de vassalagem e agora está sendo enviado para o sul para morrer pelos senhores de Uesugi. Se a independencia algum dia chegar, ela irá depender de diversas habilidades específicas";
        break;
      case "Dextreza":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Ao comprar este foco, você terá uma facilidade maior para desviar de ataques, adicione +1 para seu valor de esquiva ";
        break;
      case "Força":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Ao comprar este foco, você sentirá uma facilidade maior para usar habilidades de defesa ativa, adicione +1 para seu valor de parry";
        break;
      case "Saúde":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Ao comprar este foco, você irá perceber que seu corpo será mais resiliente e forte, adicione +1 para bloqueio";
        break;
      case "Inteligência":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Ao comprar este foco, você irá expandir seus conhecimentos, você ganhará conhecimento regional sobre toda região de Chubu e poderá adicionar 1 vantagem de graça no valor de até 10 pontos";
        break;
      case "Paraiso Terreno":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Os poderes que você adquiriu ao longo da sua formação como Miko podem parecer bem intuitivos e simples a primeira vista, mas a realidade é que esotericamente, eles são muito mais complexos. A habilidade de mover a terra pode ser melhor descrita como a habilidade de criar Kun (坤). Kun é associada com aceitaçãao, devoção, flexibilidade e sutileza, é o ato de reagir a ação dos outros ao invés de agir primeiro. Este elemento é colocado em oposição direta ao Qian (乾) que se refere ao céu e atua como uma força criativa, destrutiva e natural";
        break;
      case "Dominadora da Terra":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Dominar a terra significa muito mais do que apenas movimentar o solo e as rochas, é saber controlar o equílibrio entre aquelas duas forças mencionadas anteriormente, Kun e Qian, a fronteira entre estas duas forças precisará sempre permanecer clara e definida para que a natureza se mantenha em um estado de harmonia. Porém existe algo a mais, lí (離) se refere a fogo, mas também pode ser usado para representar pessoas, o solo é repleto de espíritos, seja de animais que já morreram a milhões de anos quanto de humanos, todos estes espíritos estão adormecidos no chão, eles também entram no equílibrio mencionado anteriormente. Dessa forma, controlar a terra envolve conhecer o estado de espírito da Terra, do Ar e dos Espíritos  <br> Ao comprar este foco, você conseguirá 10 pontos de esoterica";
        break;
      case "O Mundo Sangra com Basalto":
        content = "Gasto: 4 PF <br> Requisito: Obter a Jade de Suwa <br> Este foco é mutualmente exclusivo com Os espíritos da terra ascendem <br> Olhando de volta para aquele elemento Lí, As ilhas do Japão são repletas de vulcões, muitos deles estão em um estado constante de erupção e nas profundezas absolutas, a quilômetros da superfície, as rochas são derretidas e fundidas para gerar os diversos cristais e gemas que vemos na superfície. Geologicamente falando, a Jade ou Jadeíta se forma apenas em zonas de subducção, regiões onde hoje estão as principais montanhas do Japão, os rios erodem essas montanhas ao longo de milhões de anos e esses minerais rarissimos como a Jade acabam parando na margem das águas <br> Ao comprar este foco, você irá orientar suas habilidades ao redor de vulcões e erupções vulcânicas ";
        break;
      case "Os Espíritos da Terra Ascendem":
        content = "Gasto: 4 PF <br> Requisito: Obter um contato com Takemikazuchi <br> Este foco é mutualmente exclusivo com O mundo sangra com Basalto <br> Takemikazuchi é uma figura intimamente relacionada a você, ele foi o grande responsável pela migração de Takeminakata para Suwa e o estabelecimento do reinado dos Deuses celestiais. Existe outra história famosa relacionada a este Deus, é como ele um peixe gato chamado Namazu que causava diversos terremotos no Japão, esta história ficou tão famosa que em algumas fontes, o peixe-gato se tornou uma espécie de servo para o Deus<br> Ao comprar este foco, Takemikazuchi poderá lhe conceder habilidades relacionadas a tremores de terra";
        break;
      case "Espada de Kun":
        content = "Gasto: 4 PF <br> Requisito: Encontrar vestígios do antigo clã Nawi <br> Existe uma antiga lenda sobre dois clãs que viviam no período Nara, o clã Nawi e os seus servos do clã Hinanawi, um dia, o clã Nawi acabou morrendo, eles foram canonizados como espíritos divinos e se tornaram os Nawi-no-kami. Quando isso ocorreu, os membros do clã Hinanawi ascenderam aos céus pelo seu serviço e se tornaram celestiais. O clã Hinanawi era infame no céu por não treinar e nem fortalecer seus espíritos. Quando o Rei Dragão visitou o clã para verificar o que havia ocorrido, ele descobriu que os Hinanawi possuiam uma espada capaz de juntar e acumular espíritos e converter em energia. A espada pode então identificar o espírito absorvido e se adaptar para encontrar suas fraquezas. Por causa desse artefato extraordinário, o Dragão-Rei permitiu que continuassem vivendo nos céus, o clã passaria a utilizar a espada de Hisou para ler os espíritos na atmosfera e no ar para controlar o clima e evitar terremotos<br> Ao comprar este foco, você terá acesso a versões melhoradas de suas vantagens relacionadas a terra e a comunicação com espíritos";
        break;
      case "Rocha que Acalma a Terra":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Algumas lendas contam que quando os Deuses celestiais separaram o céu e a terra, eles instalaram algumas rochas no formato de chave que ficariam presas na terra, impedindo que ela saisse do lugar, ele então moveu o céu para cima, separando os dois. Essas chaves chamadas de Kaname são enroladas em shimenawa e seguram todos os continentes juntos. Toda vez que uma dessas chaves se movesse debaixo da terra ou fosse removida, um terremoto ocorreria. Os Hinanawis eram os unicos que conseguiam usar essas chaves como arma por conta de sua habilidade magnifica de controlar o Kun, o Qian e o Lí. Talvez você conseguiria aprender com eles, se tivesse a oportunidade de visita-los";
        break;
      case "Teatro Infernal Secreto":
        content = "Gasto: 1 PF <br> Requisito: Nenhum <br> Vamos recapitular o que sabemos sobre o Deus Secreto, ele possui uma conexão com a constelação de sete estrelas, isso pode ser visto pela abundância de símbolos desta constelação em tudo que está relacionado a este Deus, a presença desta constelação também te faz pensar sobre a relação dele com a espada de sete estrelas, a shichiseiken, por ultimo, também é importante destacar a relação dele com o Teatro Noh e especialmente com as máscaras de Okinamen, utilizadas em algumas peças de teatro específicas ";
        break;
      case "A Fronteira entre as Estações":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> A estação do Doyo ocorre na fronteira entre o Outono e a primavera, representando a antitese da epoca de monsões. Este é um período onde a terra morre, a natureza está em seu período de menor energia. Durante esta estação, algumas práticas comuns no Japão envolvem comer comidas específicas como enguia e grão de soja verde, além disso, as pessoas também visitam templos para rezar por boa saude e se banhar em cachoeiras para se purificar. Você percebe que o efeito de Doyo em você não é tão notável quanto o resto dos seus companheiros, a estação não se manifesta como brasas e labaredas enormes como é o resto, mas como um enorme portal negro que drena a energia das outras estações, anulando seus efeitos<br> Ao comprar este foco, você poderá drenar a energia da estação atual, durante 1d6 turnos, o campo de batalha ficará sem qualquer efeito sazonal, tome cuidado ao usar essa habilidade, pois você estará retirando toda a energia da natureza, então tudo que estiver em volta de você que for uma planta ou um animal selvagem irá morrer";
        break;
      case "Jade do rio Horrivel":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Os rios que passam pela região de Chubu, incluindo Suwa, são afluentes do rio Himekawa que recebeu o apelido de 'Rio Horrivel (姫川)' pela sua tendência a gerar enchentes, este rio também é famoso por se tratar da maior fonte de Jadeíta no leste asiático, boa parte das riquezas minerais em Suwa e o tesouro acumulado pelo Daimyo veio desta Jade, produzida nas profundezas da terra e então trazida de volta para a superfície <br> Ao comprar este foco, você poderá envolver qualquer ataque seu que utiliza rochas e solo em uma capa cristalina de Jadeíta. Esta capa irá aumentar o dano do ataque, mas também seu peso e seu alcance";
        break;
      case "Morte do Cedar do Destino":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> O cedro do destino é apenas uma parte do complexo enorme de objetos sagrados que existem no complexo. Atualmente, existem pelo menos 7 árvores e 7 rochas consideradas sagradas, elas receberam este reconhecimento por terem sido geradas por Takeminakata ou por serem importantes depósitos de Jade <br> Ao comprar este foco, você pode orientar os seus poderes e obter um certo controle sobre as plantas, podendo fazer elas cresceram e até mesmo usar las como armas";
        break;
      case "Receptáculo de um poder divino":
        content = "Gasto: 3 PF <br> Requisito: Conhecer o Deus Secreto <br> Conforme a sua aventura avança, você entrar em contato com diversos Deuses, alguns deles que você nem sabia que existiam, mas esse tempo todo, havia um Deus que você simplesmente nunca tentou estabelecer uma conexão mais formal. O Deus Secreto, você agora se vê frente a frente com ele, essa talvez seja sua unica chance de fazer a oferta <br> Ao comprar este foco, você poderá tentar convencer o Deus Secreto a formar uma pacto com você, se ele aceitar, você poderá adicionar uma habilidade nova relacionada ao Deus ";
        break;
      case "Shichiseiken e o pacto secreto":
        content = "Gasto: Livre <br> Requisito: Traduzir os documentos encontrados no Mausoléu <br><br> Finalmente o nome verdadeiro do Deus secreto foi revelado, porém ainda não é possível determinar a razão para ele estar se envolvendo com a Shichiseiken e o Principe Shotoku, é necessário investigar mais a fundo";
        break;
      case "Borboletas de uma terra desolada":
        content = "Gasto: 3 PF <br> Requisito: Traduzir os documentos encontrados no Mausoléu <br> Este foco é mutualmente exclusivo com Receptáculo de um poder divino <br> Quando você era menor e estava recebendo suas primeiras instruções sobre o Shintoísmo, você lembra de ter ouvido falar que a quase mil anos atrás, um pequeno vilarejo formou um culto para adorar um inseto, eles o chamaram de Tokoyo no Kami, ou Deus do mundo eterno. Você lembra de mencionarem que este inseto era uma borboleta Swallowtail. De qualquer forma, este culto teria sido completamente demolido, e desde então, você nunca teria ouvido falar deste Deus  ";
        break;
      case "Hyakki Yagyo":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Pouco antes de vocês se encontrarem, um livro chamado Shūgaishō, cujo autor é desconhecido, continha instruções sobre como sobreviver ao Hyakki Yagyo, caso ele viesse a ocorrer. A instrução é não sair de casa em hipotése alguma e aqueles que ouvirem o desfile, devem conjurar estas palavras <br><br> KA-TA-SHI-HA-YA, E-KA-SE-NI-KU-RI-NI, TA-ME-RU-SA-KE, TE-E-HI, A-SHI-E-HI, WA-RE-SHI-KO-NI-KE-RI. Talvez seja tarde demais para isso";
        break;
      case "Maldição Celestial":
        content = "Gasto: 2 PF (Coletivo) <br> Requisito: Nenhum <br> Não é possível que tudo tenha sido uma coincidência, o roubo da Shichiseiken e o ataque em Naniwa devem estar relacionados de alguma forma, tudo foi planejado, a vinda do imperador, o fluxo de Youkais nunca vistos antes no dia do festival de Tsukimi, o festival da Lua. Alguma coisa está prestes a acontecer e vocês são os catalisadores para o cataclisma";
        break;
      case "Nictofobia":
        content = "Gasto: 3 PF <br> Requisito: Descobrir quem pegou a espada de Sete Estrelas <br><br><br> A morte não é uma escapatória";
        break;
      case "Contrato Espectral":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Mikito, seu parceiro, possui uma história bem inusitada, você sabe sobre a queda da árvore e como ele teria morrido, entretanto, existe algo a mais nessa história, algo que talvez você não saiba ainda. Apesar de vocês já andaram juntos a um bom tempo, ele ainda é um personagem bem misterioso";
        break;
      case "Pedido Impossivel: Colar do ninho do pardal":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Na fantástica história da Princesa Kaguya, ela exigiu que seus pretendentes viajassem por todos os cantos do planeta atrás de items mágicos, ela sabia que os homens não sobreviveriam a viagem e que os itens poderiam até mesmo não existir, um deste itens era um colar feito com o casco de um cowrie retirado do ninho de um pardal. Este pedido a primeira vista poderia parecer absurdo, mas na epoca, existiam lendas que contavam que o casco de um cowrie, um tipo de caracol marinho, poderia servir como um amuleto utilizado por mães para que seus partos sejam seguros. Kaguya queria um colar deste tipo utilizado por um pardal ao botar seus ovos. Você acredita que consegue obter este colar com a ajuda de sua metade fantasma ";
        break;
      case "O Sapo é comido pela cobra":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> O ritual de caça aos sapos é tipicamente feito no Templo Superior de Suwa durante a epoca de Inverno, durante este ritual, os sapos que ficam na beira do lago e foram congelados são trazidos para o templo, as mikos então disparam flechas contra eles e então os oferecem para Takeminakata. As origens e o propósito deste ritual foram perdidos, mas algumas fontes que podem ser encontradas na biblioteca do templo afirmam que ele se trata de uma celebração da vitória de Takeminakata sob um Deus Sapo que vivia na região ";
        break;
      case "A Travessia dos deuses":
        content = "Gasto: Livre <br> Requisito: Restaurar a Omiwatari <br> Omiwatari ou Travessia dos Deuses é o nome dado a uma fenda formada no Lago Suwa durante o Inverno. As lendas locais contam que essas rachaduras são formadas quando Takeminakata deixa o Templo Inferior e anda sob o gelo para encontrar sua esposa, Yasakatome que vive na outra margem. Esta maravilha do Templo de Suwa está em ruinas por uma razão que você ainda não entende bem, talvez a resposta possa estar no templo Inferior ";
        break;
      case "Guardiões do Paraiso":
        content = "Gasto: Livre <br> Requisito: Trazer Tenaga e Ashinaga de volta a vida <br> Tenaga e Ashinaga são dois gigantes que guardam os templos de Suwa, Tenaga (手長) possui braços enormes enquanto Ashinaga (足長) possui pernas longas. Eles tipicamente guardavam o templo Superior só que este está completamente lacrado por um selo mágico. Talvez seja melhor procurar informações em outros lugares onde eles são adorados";
        break;
      case "Sapo de Hourai":
        content = "Gasto: Livre <br> Requisito: Explorar os dois templos <br> Você está cada vez mais próximo de descobrir o que realmente está acontecendo em Suwa, as escritas encontradas nos dois templos contam uma história Milenar, um conflito entre duas divindades poderosas, uma gema de Jade e uma gama de espíritos vingativos. Continue em frente, descubra a verdade escondida pela corte imperial de Suwa e pelo Deus que jurou proteger esta vila";
        break;
      case "Honrado Mito Central":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com Sagrado Mito Nativo <br> Não se sinta acuado, não fique com medo, tudo é muito mais complexo do que parece. Não tente resolver este quebra-cabeça somente com as peças que você tem agora";
        break;
      case "Sagrado Mito Nativo":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com Sagrado Mito Nativo <br> Não se sinta acuado, não fique com medo, tudo é muito mais complexo do que parece. Não tente resolver este quebra-cabeça somente com as peças que você tem agora";
        break;
      case "O Anel de Ferro":
        content = "Gasto: Livre <br> Requisito: Encontrar O Anel de Ferro <br> Dentro do templo Superior, nas profundezas, um artefato estranho pode ser encontrado, são diversos aros de ferro, muito enferrujados, com serras ao longo de sua superfície. Você não sabe a origem destes aros e nem se eles teriam sido usados por algum antepassado seu ou se seriam uma arma divina de Takeminakata ";
        break;
      case "O Milagre de Otensui":
        content = "Gasto: Livre <br> Requisito: Restaurar a água de Otensui <br> Hoden no tenteki ou a gota de água divina de Hoden é uma das grandes maravilhas do Templo Superior de Suwa. 3 gotas de água caem sob um pequeno templo conhecido com Tenryusuisha todo dia, na mesma hora, não importa o clima. Esta água antes era conhecida como Otensui (água celestial), colheitas irrigadas com ela nunca morrem, e orações para chuva feitas com ela sempre funcionam. Porém, aquele fluxo de água negra que vocês encontraram enquanto estavam chegando em Suwa parece ter contaminado este pequeno corrego, a água agora está fedorenta e viscosa";
        break;
      case "Sete Pedras e Sete árvores":
        content = "Gasto: 2 PF <br> Requisito: Restaurar o Cedro do Destino <br> Musubi no Sugi, o Cedro do Destino ou Cedro do Casamento é uma árvore gigante localizada no templo Inferior de Suwa, manter esta árvore é extremamente importante pois garante que Takeminakata possa ver o mundo e se comunicar com seus sacerdotes, independente de onde estejam ";
        break;
      default:
        content = "This is some default content for an undefined section.";
    }
    sidebar.innerHTML = `
      <a href="#" class="closebtn" onclick="toggleNav()">&times;</a>
      <br></br>
      <br></br>
      <h3>${title}</h3>
      <p>${content}</p>
    `;
  }
