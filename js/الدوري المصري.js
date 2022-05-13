 let mainvideo=document.querySelector('.mainvideo video')
 let listvideo=document.querySelectorAll('.videolist .vid')
 let title=document.querySelector('.mainvideo .title')
  
 listvideo.forEach(video=>{
   video.onclick= () =>{
     listvideo.forEach(vid=> vid.classList.remove('active'));
     video.classList.add('active')
  if(video.classList.contains('active')){
    let src=video.children[0].getAttribute('src');
    mainvideo.src=src;
    let text =video.children[1].innerHTML;
    title.innerHTML=text;
   };
};



 });