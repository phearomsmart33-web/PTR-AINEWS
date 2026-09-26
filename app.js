const input=document.getElementById('search');
const topInput=document.getElementById('search-top');
const cards=[...document.querySelectorAll('#cards article')];
const empty=document.getElementById('no-results');

function filterCards(value){
  const q=value.trim().toLowerCase();
  let n=0;
  cards.forEach(card=>{
    const show=!q||(card.innerText+' '+(card.dataset.search||'')).toLowerCase().includes(q);
    card.hidden=!show;
    if(show)n++;
  });
  if(empty)empty.hidden=n!==0;
}

input?.addEventListener('input',event=>{
  filterCards(event.target.value);
  if(topInput&&topInput.value!==event.target.value)topInput.value=event.target.value;
});

topInput?.addEventListener('input',event=>{
  if(input){
    input.value=event.target.value;
    filterCards(event.target.value);
  }
});

topInput?.addEventListener('keydown',event=>{
  if(event.key==='Enter'){
    document.getElementById('latest')?.scrollIntoView({behavior:'smooth',block:'start'});
    input?.focus();
  }
});