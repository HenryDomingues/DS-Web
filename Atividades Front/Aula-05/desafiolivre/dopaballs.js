window.onload = function() {
    /* ===============================
       VARIÁVEIS INICIAIS
    =================================*/
    var area = document.getElementById("area");
    var placar = document.getElementById("placar");
    var comboText = document.getElementById("combo");
    var rankingDiv = document.getElementById("ranking");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var pontos = 0;
    var combo = 0;
    var multiplicador = 1;
    var ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    /* ===============================
       SOMS COM WEB AUDIO
    =================================*/
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function beep(freq, duration) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.value = freq;
        osc.type = "sawtooth";
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.stop(audioCtx.currentTime + duration);
    }

    /* ===============================
       PARTICULAS
    =================================*/
    function corAleatoria() { 
        return "hsl(" + Math.random() * 360 + ",100%,50%)"; 
    }

    function criarParticulas(x, y, quantidade = 20) {
        for(let i=0; i<quantidade; i++) {
            let p = document.createElement("div");
            p.classList.add("particula");
            p.style.background = corAleatoria();
            p.style.left = x + "px";
            p.style.top = y + "px";
            document.body.appendChild(p);
            let dx = (Math.random()-0.5)*200;
            let dy = (Math.random()-0.5)*200;
            p.animate([
                { transform: "translate(0,0)", opacity: 1 },
                { transform: `translate(${dx}px,${dy}px)`, opacity: 0 }
            ], { duration: 600 });
            setTimeout(() => p.remove(), 600);
        }
    }

    /* ===============================
       FUNDO PSICODÉLICO
    =================================*/
    function animarFundo() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        for(let i=0; i<50; i++) {
            ctx.fillStyle = corAleatoria();
            ctx.beginPath();
            ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*3, 0, Math.PI*2);
            ctx.fill();
        }
        requestAnimationFrame(animarFundo);
    }
    animarFundo();

    /* ===============================
       ALVOS MÓVEIS
    =================================*/
    function spawnAlvo() {
        let alvo = document.createElement("div");
        alvo.classList.add("alvo");
        alvo.style.background = corAleatoria();
        let posX = Math.random()*(window.innerWidth-50);
        let posY = Math.random()*(window.innerHeight-50);
        alvo.style.left = posX+"px";
        alvo.style.top = posY+"px";
        document.body.appendChild(alvo);

        let dx = (Math.random()-0.5)*4;
        let dy = (Math.random()-0.5)*4;

        let moveInterval = setInterval(() => {
            posX += dx*3;
            posY += dy*3;
            if(posX<0 || posX>window.innerWidth-50) dx*=-1;
            if(posY<0 || posY>window.innerHeight-50) dy*=-1;
            alvo.style.left = posX+"px";
            alvo.style.top = posY+"px";
        }, 30);

        alvo.onclick = function(e) {
            pontos += 10;
            combo++;
            multiplicador = 1 + Math.floor(combo/10);
            placar.textContent = "Pontos: "+pontos;
            comboText.textContent = "Combo: "+combo+" x"+multiplicador;
            beep(500+combo*5,0.1);
            criarParticulas(e.clientX,e.clientY,30);
            efeitoInsano();
            alvo.remove();
            clearInterval(moveInterval);
            atualizarRanking();
        }

        setTimeout(() => { 
            alvo.remove(); 
            clearInterval(moveInterval); 
        }, 5000);
    }
    setInterval(spawnAlvo, 2000);

    /* ===============================
       CLIQUES NA ÁREA PRINCIPAL
    =================================*/
    area.addEventListener("click", function(e){
        audioCtx.resume();
        combo++;
        multiplicador = 1 + Math.floor(combo/10);
        pontos += multiplicador;
        placar.textContent = "Pontos: "+pontos;
        comboText.textContent = "Combo: "+combo+" x"+multiplicador;
        beep(200+combo*5,0.1);
        area.classList.add("pulse");
        setTimeout(()=>area.classList.remove("pulse"),100);
        criarParticulas(e.clientX,e.clientY,25);
        if(combo % 10 === 0) efeitoInsano();
        atualizarRanking();
    });

    /* ===============================
       EFEITOS INSANOS
    =================================*/
    function efeitoInsano(){
        area.classList.add("glow");
        document.body.classList.add("shake");
        beep(400+combo*10,0.15);
        slowMotion();
        setTimeout(()=>{
            area.classList.remove("glow");
            document.body.classList.remove("shake");
        },300);
    }

    /* ===============================
       SLOW MOTION
    =================================*/
    function slowMotion(){
        document.body.style.transition="0.2s";
        document.body.style.transform="scale(0.97)";
        setTimeout(()=>document.body.style.transform="scale(1)",150);
    }

    /* ===============================
       DECRESCIMENTO DO COMBO
    =================================*/
    setInterval(()=>{
        if(combo>0) combo--;
        multiplicador = 1 + Math.floor(combo/10);
        comboText.textContent = "Combo: "+combo+" x"+multiplicador;
    },1200);

    /* ===============================
       RANKING LOCAL
    =================================*/
    function atualizarRanking(){
        ranking.push(pontos);
        ranking.sort((a,b)=>b-a);
        ranking = ranking.slice(0,5);
        localStorage.setItem("ranking", JSON.stringify(ranking));
        rankingDiv.innerHTML = "<b>Ranking:</b> "+ranking.join(", ");
    }
    atualizarRanking();
}
/* Dentro da função criarParticulas */
p.style.zIndex = 5;

/* Dentro da função spawnAlvo */
alvo.style.zIndex = 6;