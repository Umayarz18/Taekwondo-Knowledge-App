
const poomsaeDisplay = document.getElementById("poomsaeDisplay");

async function displayPoomsae(poomsaeData){
    try{
        poomsaeData.forEach( poomsae => {
            const poomsaeCard = document.createElement('div');
            const h1 = document.createElement("h1");
            h1.textContent = poomsae.poomsae_name;

            poomsaeCard.appendChild(h1);
            poomasaeDisplay.appendChild(poomsaeCard);
        });
    }
    catch(error){
        console.log(error);
    }
    
}

fetch('poomsae.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayPoomsae(data);
  })
  .catch(function (err) {
    console.log(err);
  });

