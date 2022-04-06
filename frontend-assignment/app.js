

//global variables and imports from html file
const cards_container_initial = document.getElementById('cards_container_initial');
const cards_container_filtered = document.getElementById('cards_container_filtered');
const showingResultCount = document.getElementById('showingResultCount');
const detailsSession = document.getElementById('detailsSession');

let value;
let cardsCount = 0;


//shows filtered card after an option is selected from select menu

const fillCardsAfterSelection = (data,value)=>{

    cards_container_initial.style.display = "none";
    cards_container_filtered.style.display = "flex";
      cardsCount = 1;
      showingResultCount.innerHTML = "Showing Results : " + cardsCount;;
    console.log(value);

    if(value==-1){
       // fillCardsInitialLoad(data);
       cards_container_filtered.style.display = "none"
       cards_container_initial.style.display = "flex";
       showingResultCount.innerHTML = "Showing Results : " + data.length;;
    }else{
       
        cards_container_filtered.innerHTML =
  `      <div class="card" style="border: 1px solid #EBD8C3; margin:10px; box-shadow: 0 0 10px gray; padding:5px; align:center">
        <div class="card-body">
        <img class="card-img-top" src="${data[value].trainingImage}" alt="Card image cap">
          <h5 class="card-title">${data[value].trainer}</h5>
          <p class="card-text">${data[value].trainingName}</p>
          <a href="#"  class="btn btn-primary btn-sm btnDetails" >Details</a>
          <a href="#" class="btn btn-success btn-sm btnEnroll" >Enroll</a>
        </div>
      </div>`
        

    }

     //shows and call enroll modal
     const showEnrollModal = ()=>{
        const enroll_modal = document.getElementById('enroll_modal');
        enroll_modal.style.display = 'flex';
    }
    const btnEnroll = document.querySelectorAll('.btnEnroll');
    for(let i=0;i<btnEnroll.length;i++){
        btnEnroll[i].onclick = showEnrollModal;
    }

    //show and call session modal
    const showSessionModal = (e) =>{
        const card_session_modal = document.getElementById('card_session_modal');
        card_session_modal.style.display = 'flex';
    }
    
    const btnDetails = document.querySelectorAll('.btnDetails');
    for(let i=0;i<btnDetails.length;i++){
        btnDetails[i].onclick = showSessionModal;
        
    }
        
    
  
    
  }

  
  // call a funtionn when any option is selected from select menu       
const showDataAfterSelection = (value)=>{
    fetch('backend.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        fillCardsAfterSelection(data,value);
    }).catch((err =>{
        console.log(err);
        return;
    }))
    
}
//fill the select menu with trainer name
const fillDataSelectOption = (data)=>{
    const selectElem = document.getElementById('select_main');
    var element = document.createElement("option");
    element.value = -1;
    element.innerText = "select trainer";
    selectElem.append(element);
    for(let i=0;i<data.length;i++){
    var item = data[i].trainer;
    var element = document.createElement("option");
    element.innerText = item;
    element.value = i;
    selectElem.append(element);
   }
}

//fill the cards with details on initial load of page
const fillCardsInitialLoad = (data)=>{
    
    cardsCount = data.length;
    showingResultCount.innerHTML = "Showing Results : " + cardsCount;

    for(let i=0;i<data.length;i++){
       
        cards_container_initial.style.display = "flex";
        cards_container_initial.innerHTML +=
        `<div class="card" style="border: 1px solid #EBD8C3; margin:10px; box-shadow: 0 0 10px gray; padding:5px; align:center">
        <div class="card-body">
        <img class="card-img-top" src="${data[i].trainingImage}" alt="Card image cap">
          <h5 class="card-title">${data[i].trainer}</h5>
          <p class="card-text">${data[i].trainingName}</p>
          <a href="#" id="${i}" class="btn btn-primary btn-sm btnDetails" >Details</a>
          <a href="#" class="btn btn-success btn-sm btnEnroll" >Enroll</a>
        </div>
      </div>`
    }

    //shows and call enroll modal
    const showEnrollModal = ()=>{
        const enroll_modal = document.getElementById('enroll_modal');
        enroll_modal.style.display = 'flex';
    }
    const btnEnroll = document.querySelectorAll('.btnEnroll');
    for(let i=0;i<btnEnroll.length;i++){
        btnEnroll[i].onclick = showEnrollModal;
    }

    //show and call session modal
    const showSessionModal = (e) =>{
        const card_session_modal = document.getElementById('card_session_modal');
        card_session_modal.style.display = 'flex';
    }
    
    const btnDetails = document.querySelectorAll('.btnDetails');
    for(let i=0;i<btnDetails.length;i++){
        btnDetails[i].onclick = showSessionModal;
        
    }
}

const showDataOnLoad = ()=>{
    //using fetch to get trainer data into select option
    fetch('backend.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        fillDataSelectOption(data);
        fillCardsInitialLoad(data);
        
    }).catch((err =>{
        console.log(err);
        return;
    }))
    
    
}

document.addEventListener('DOMContentLoaded',showDataOnLoad)


//show modal when me menu is clicked
const me_menu_modal = document.getElementById('me_menu_modal');
const showMeModal = ()=>{

    me_menu_modal.style.display = 'flex';
}

const closeMeModal = ()=>{
    me_menu_modal.style.display = 'none';
}

//show modal for dashboard menu

const dashboard_menu_modal = document.getElementById('dashboard_menu_modal');
const showDashModal = ()=>{

    dashboard_menu_modal.style.display = 'flex';
}

const closeDashModal = ()=>{
    dashboard_menu_modal.style.display = 'none';
}


//close enroll modal

const closeEnrollModal = ()=>{
    const enroll_modal = document.getElementById('enroll_modal');
    enroll_modal.style.display = "none";
}

//close session modal

const closeSessionlModal = ()=>{
    const card_session_modal = document.getElementById('card_session_modal');
    card_session_modal.style.display = "none";
}