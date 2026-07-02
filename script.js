document.querySelector('.hamburger').addEventListener('click',function(){
    var m=document.querySelector('.menu');
    if(!m)return;
    var open=m.style.display==='flex';
    m.style.display=open?'none':'flex';
    m.style.position='absolute';m.style.top='76px';m.style.left='0';m.style.right='0';
    m.style.flexDirection='column';m.style.background='#fff';m.style.padding='18px 24px';
    m.style.borderBottom='1px solid var(--border)';m.style.gap='16px';
  });
