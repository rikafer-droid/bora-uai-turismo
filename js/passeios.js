(() => {
 const root=document.querySelector('[data-tour-list]'); if(!root||!window.BoraUai)return;
 root.innerHTML=window.BoraUai.tours.map(t=>window.BoraUai.tourCard(t,true)).join('');
 window.BoraUai.refreshCart();
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
   const filter=button.dataset.filter;
   document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
   root.querySelectorAll('[data-category]').forEach(card=>card.hidden=filter!=='todos'&&card.dataset.category!==filter);
 }));
})();
