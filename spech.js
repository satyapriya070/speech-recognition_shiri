const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
 const text=Array.from(e.results)
 .map(result => result[0])
 .map(result => result.transcript)
 .join('');
 p.innerText= text ;
 texts.appendChild(p);
 if(e.results[0].isFinal){
     if(text.includes('hello') ||text.includes("hi siri") ){
         p=document.createElement('p');
         p.classList.add('replay');
         p.innerText='Hi';
         texts.appendChild(p);
     }


     if(text.includes('what is your name') ||text.includes("what's your name") || text.includes('who is this')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='My Name is Shiri, yours?';
        texts.appendChild(p);
    }

    if(text.includes('do you have boyfriend') ||text.includes("what's your BF name") || text.includes('who is Satya')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='Yes , i hava a Handsome Bf  and his Name is Satya';
        texts.appendChild(p);
    }

    if(text.includes('open my Facebook') || text.includes('open Facebook')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='Opening facebook';
        texts.appendChild(p);
        window.open('https://facebook.com')
    }

    if(text.includes('open YouTube') || text.includes('YouTube')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='Opening YouTube';
        texts.appendChild(p);
        window.open('https://www.youtube.com/')
    }
    if(text.includes('play song') || text.includes('play a song')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='playing a song';
        texts.appendChild(p);
        window.open('https://music.youtube.com/watch?v=x3P4R5hykqU&list=RDAMVMx3P4R5hykqU')
    }
       if(text.includes('latest news') || text.includes('news')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='showing news';
        texts.appendChild(p);
        window.open('https://www.ndtv.com/latest')
    }
   
   
    if(text.includes('hello Alexa') ||text.includes("hy Alexa") || text.includes('Alexa')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='Who is she? ummm...';
        texts.appendChild(p);
    }

    if(text.includes('weather report') ||text.includes("weather") || text.includes('Weather')){
        p=document.createElement('p');
        p.classList.add('replay');
        p.innerText='Openning weather report for you...';
        texts.appendChild(p);
        window.open('https://www.google.com/search?q=weather+report+today&oq=weather+re&aqs=chrome.2.69i57j0i131i433l2j0j0i457j0i433j0l2j0i131i433l2.8948j0j15&sourceid=chrome&ie=UTF-8')
    }

     p=document.createElement('p');
 }
 console.log(text);
})

recognition.addEventListener('end',()=>{
    recognition.start();
})
recognition.start();
