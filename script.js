var ondas = [
    {
        nome: "Ondas de Rádio",
        frequencia: "3 kHz a 300 MHz",
        comprimento: "100 km a 1 m",
        descricao: "Transportam sinais de comunicação a longas distâncias.",
        exemplo: "Rádio, televisão, telefonia celular e antenas.",
        imagem: "images/radio.jpg",
        cor: "#3b82f6"
    },
    {
        nome: "Micro-ondas",
        frequencia: "300 MHz a 300 GHz",
        comprimento: "1 m a 1 mm",
        descricao: "Fazem as moléculas de água vibrar, aquecendo alimentos.",
        exemplo: "Forno micro-ondas, redes Wi-Fi e radares.",
        imagem: "images/microondas.jpg",
        cor: "#06b6d4"
    },
    {
        nome: "Infravermelho",
        frequencia: "300 GHz a 400 THz",
        comprimento: "1 mm a 750 nm",
        descricao: "Emitido principalmente por corpos aquecidos sob a forma de calor.",
        exemplo: "Controle remoto, sensores térmicos e visão noturna.",
        imagem: "images/infravermelho.jpg",
        cor: "#ef4444"
    },
    {
        nome: "Luz Visível",
        frequencia: "400 a 790 THz",
        comprimento: "750 a 380 nm",
        descricao: "A única faixa do espectro detectável diretamente pelo olho humano.",
        exemplo: "Luz do Sol, lâmpadas e telas digitais.",
        imagem: "images/luz.jpg",
        cor: "#eab308"
    },
    {
        nome: "Ultravioleta",
        frequencia: "790 THz a 30 PHz",
        comprimento: "380 a 10 nm",
        descricao: "Possui energia suficiente para provocar reações químicas.",
        exemplo: "Radiação solar e lâmpadas de esterilização.",
        imagem: "images/ultravioleta.jpg",
        cor: "#8b5cf6"
    },
    {
        nome: "Raios X",
        frequencia: "30 PHz a 30 EHz",
        comprimento: "10 a 0,01 nm",
        descricao: "Radiação de alta energia capaz de atravessar tecidos moles.",
        exemplo: "Radiografias médicas e tomografias.",
        imagem: "images/raiosx.jpg",
        cor: "#14b8a6"
    },
    {
        nome: "Raios Gama",
        frequencia: "Acima de 30 EHz",
        comprimento: "Menor que 0,01 nm",
        descricao: "Ondas de energia extremamente elevada emitidas por reações nucleares.",
        exemplo: "Radioterapia e esterilização de equipamentos.",
        imagem: "images/gama.jpg",
        cor: "#a855f7"
    }
];

function mostrarOnda(numero) {
    var onda = ondas[numero];
    if (!onda) return;

    var tituloEl = document.getElementById("nomeOnda");
    var popupEl = document.getElementById("informacoes");
    var overlayEl = document.getElementById("modalOverlay");

    if (tituloEl && popupEl && overlayEl) {
        tituloEl.innerText = onda.nome;
        tituloEl.style.color = onda.cor;
        popupEl.style.borderColor = onda.cor;

        document.getElementById("frequencia").innerHTML = "<strong>Frequência:</strong> " + onda.frequencia;
        document.getElementById("comprimento").innerHTML = "<strong>Comprimento de onda:</strong> " + onda.comprimento;
        document.getElementById("descricao").innerHTML = "<strong>O que acontece:</strong> " + onda.descricao;
        document.getElementById("exemplo").innerHTML = "<strong>Onde é usada:</strong> " + onda.exemplo;
        
        var imgEl = document.getElementById("imagemOnda");
        if (imgEl) {
            imgEl.src = onda.imagem;
        }

        popupEl.style.display = "block";
        overlayEl.style.display = "block";
    }
}

function fecharOnda() {
    var popupEl = document.getElementById("informacoes");
    var overlayEl = document.getElementById("modalOverlay");
    
    if (popupEl) popupEl.style.display = "none";
    if (overlayEl) overlayEl.style.display = "none";
}