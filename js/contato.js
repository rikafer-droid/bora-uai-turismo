(() => {
 const form=document.querySelector('[data-contact-form]'); if(!form)return;
 const status=form.querySelector('[data-form-status]');
 form.addEventListener('submit',event=>{
   event.preventDefault();if(!form.reportValidity()){status.textContent='Confira os campos obrigatórios.';return;}
   const data=new FormData(form), name=String(data.get('nome')).trim(), interest=String(data.get('interesse')).trim(), message=String(data.get('mensagem')).trim();
   const body=`Olá, Bora Lá UAI! Meu nome é ${name}.${interest?` Tenho interesse em: ${interest}.`:''} Mensagem: ${message}`;
   status.textContent='A conversa será aberta no WhatsApp. Revise a mensagem antes de enviar.';
   window.open(window.BoraUai.link(body),'_blank','noopener,noreferrer');
 });
})();
