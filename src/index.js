
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

console.log(data[0]);


const cardList = document.createElement('ul')
cardList.setAttribute('class','cards')
document.body.append(cardList)

const card = document.createElement('il')
card.setAttribute('class','card')
cardList.append(card)

for (let i = 0; i < data.length; i++) {
    card.innerHTML =` <h2 class="card--title">${data[i].name}</h2>
<img
  width="256"
  class="card--img"
  src=${data[i].sprites.other['official-artwork'].front_default}
/>
<ul class="card--text">
  <li>HP: ${data[i].stats[0].base_stat}</li>
  <li>ATTACK: ${data[i].stats[1].base_stat}</li>
  <li>DEFENSE: ${data[i].stats[2].base_stat}</li>
  <li>SPECIAL-ATTACK: ${data[i].stats[3].base_stat}</li>
  <li>SPECIAL-DEFENSE: ${data[i].stats[4].base_stat}</li>
  <li>SPEED: ${data[i].stats[5].base_stat}</li>
</ul>` 
}
