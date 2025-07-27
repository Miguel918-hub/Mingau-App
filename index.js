<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Mingau App</title>
  <style>
    /* Estilos base */
    body {
      background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
      color: #f5f5f5;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      margin: 0;
      transition: all 0.3s ease;
      min-height: 100vh;
      box-sizing: border-box;
    }

    h1 {
      color: #ff66c4;
      text-shadow: 0 0 12px #ff66c4;
      text-align: center;
      margin-bottom: 30px;
      user-select: none;
    }

    .upload-box {
      background-color: #222;
      border: 2px dashed #ff66c4;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      margin-bottom: 20px;
      max-width: 350px;
      width: 100%;
      box-sizing: border-box;
      transition: box-shadow 0.3s ease;
    }
    .upload-box:hover {
      box-shadow: 0 0 15px #ff66c4;
    }

    input[type="file"] {
      display: none;
    }

    .custom-upload {
      padding: 12px 24px;
      background-color: #ff66c4;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      color: black;
      font-weight: 700;
      margin-bottom: 10px;
      display: inline-block;
      user-select: none;
      transition: background-color 0.3s ease;
      box-shadow: 0 0 6px #ff66c4;
    }
    .custom-upload:hover {
      background-color: #e055b3;
    }

    #preview {
      max-width: 300px;
      margin-top: 10px;
      border-radius: 12px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0 0 12px #ff66c4;
      user-select: none;
      transition: max-width 0.3s ease;
    }

    #generateBtn {
      margin-top: 20px;
      background-color: #00ffcc;
      color: #000;
      padding: 12px 30px;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      max-width: 350px;
      width: 100%;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 0 10px #00ffcc;
      user-select: none;
    }
    #generateBtn:hover {
      background-color: #00d4aa;
      box-shadow: 0 0 20px #00d4aa;
    }

    #cantada {
      margin-top: 30px;
      background: #111;
      border-left: 5px solid #ff66c4;
      padding: 24px 20px 24px 24px;
      border-radius: 10px;
      max-width: 450px;
      font-style: italic;
      word-wrap: break-word;
      white-space: pre-wrap;
      box-shadow: 0 0 12px #ff66c4;
      user-select: text;
    }

    #copyBtn {
      margin-top: 15px;
      background: #444;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.3s ease;
      box-shadow: 0 0 8px #777;
      user-select: none;
    }
    #copyBtn:hover {
      background-color: #666;
    }

    #status {
      margin-top: 15px;
      font-size: 15px;
      color: #00ffcc;
      min-height: 22px;
      max-width: 450px;
      text-align: center;
      word-wrap: break-word;
      user-select: none;
    }

    /* Botão Bot raid Discord */
    #botRaidBtn {
      margin-top: 30px;
      background-color: #ff66c4;
      color: black;
      padding: 14px 36px;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      max-width: 350px;
      width: 100%;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 0 12px #ff66c4;
      user-select: none;
    }
    #botRaidBtn:hover {
      background-color: #e055b3;
      box-shadow: 0 0 24px #e055b3;
    }

    /* Modal para escolha dispositivo */
    #deviceModal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      user-select: none;
    }
    #deviceModalContent {
      background: #222;
      border-radius: 16px;
      padding: 36px 48px;
      text-align: center;
      max-width: 320px;
      color: #f5f5f5;
      box-shadow: 0 0 30px #ff66c4;
    }
    #deviceModalContent h2 {
      margin-bottom: 28px;
      color: #ff66c4;
      font-size: 1.8em;
      user-select: none;
    }
    .deviceChoiceBtn {
      background-color: #ff66c4;
      border: none;
      color: black;
      padding: 14px 30px;
      margin: 12px 20px;
      font-weight: 700;
      border-radius: 10px;
      cursor: pointer;
      width: 140px;
      font-size: 1em;
      box-shadow: 0 0 12px #ff66c4;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      user-select: none;
    }
    .deviceChoiceBtn:hover {
      background-color: #e055b3;
      box-shadow: 0 0 20px #e055b3;
    }

    /* Versão computador */
    body.computer {
      padding: 60px 100px;
      max-width: 900px;
      margin: 0 auto;
      font-size: 18px;
      align-items: center;
    }
    body.computer h1 {
      font-size: 3em;
      margin-bottom: 50px;
    }
    body.computer .upload-box {
      max-width: 500px;
      padding: 30px;
    }
    body.computer #preview {
      max-width: 400px;
    }
    body.computer #generateBtn, body.computer #botRaidBtn {
      max-width: 400px;
      font-size: 20px;
      padding: 16px 40px;
    }
    body.computer #cantada {
      max-width: 600px;
      font-size: 22px;
      padding: 28px 30px 28px 30px;
    }
    body.computer #copyBtn {
      padding: 12px 24px;
      font-size: 17px;
    }
    body.computer #status {
      font-size: 16px;
      max-width: 600px;
    }

    /* Versão celular */
    body.mobile {
      padding: 20px 15px;
      font-size: 14px;
      align-items: center;
    }
    body.mobile h1 {
      font-size: 1.8em;
      margin-bottom: 25px;
    }
    body.mobile .upload-box {
      max-width: 280px;
      padding: 18px 16px;
    }
    body.mobile #preview {
      max-width: 240px;
    }
    body.mobile #generateBtn, body.mobile #botRaidBtn {
      max-width: 280px;
      font-size: 16px;
      padding: 14px 28px;
    }
    body.mobile #cantada {
      max-width: 320px;
      font-size: 16px;
      padding: 20px 20px 20px 20px;
    }
    body.mobile #copyBtn {
      padding: 10px 20px;
      font-size: 15px;
    }
    body.mobile #status {
      font-size: 14px;
      max-width: 320px;
    }
  </style>
</head>
<body>
  <!-- Modal escolha dispositivo -->
  <div id="deviceModal" aria-modal="true" role="dialog">
    <div id="deviceModalContent">
      <h2>Selecione seu dispositivo</h2>
      <button class="deviceChoiceBtn" id="btnComputer">Computador</button>
      <button class="deviceChoiceBtn" id="btnMobile">Celular</button>
    </div>
  </div>

  <h1>🧠 Mingau App – Cantadas por Imagem</h1>

  <div class="upload-box">
    <label class="custom-upload" for="fileInput">📷 Enviar imagem da conversa</label>
    <input type="file" id="fileInput" accept="image/*" />
    <br />
    <img id="preview" src="#" alt="Prévia" style="display:none" />
  </div>

  <button id="generateBtn">✨ Gerar Cantada com base na imagem</button>

  <div id="cantada" style="display:none;">
    <p id="cantadaTexto">...</p>
    <button id="copyBtn">📋 Copiar Cantada</button>
  </div>

  <button id="botRaidBtn">Bot raid Discord</button>

  <p id="status"></p>

  <script>
    const fileInput = document.getElementById("fileInput");
    const preview = document.getElementById("preview");
    const generateBtn = document.getElementById("generateBtn");
    const cantadaDiv = document.getElementById("cantada");
    const cantadaTexto = document.getElementById("cantadaTexto");
    const copyBtn = document.getElementById("copyBtn");
    const status = document.getElementById("status");
    const botRaidBtn = document.getElementById("botRaidBtn");
    const deviceModal = document.getElementById("deviceModal");
    const btnComputer = document.getElementById("btnComputer");
    const btnMobile = document.getElementById("btnMobile");

    // Função para aplicar estilo conforme escolha dispositivo
    function aplicarEstiloDispositivo(tipo) {
      document.body.classList.remove("computer", "mobile");
      if (tipo === "computer") {
        document.body.classList.add("computer");
      } else if (tipo === "mobile") {
        document.body.classList.add("mobile");
      }
    }

    // Detectar dispositivo (mobile ou desktop) simplificado
    function detectarDispositivo() {
      const ua = navigator.userAgent.toLowerCase();
      if (/android|iphone|ipad|ipod|windows phone|mobile/.test(ua)) {
        return "mobile";
      }
      return "computer";
    }

    // Mostrar modal e permitir escolha
    function mostrarModalEscolha() {
      deviceModal.style.display = "flex";
    }

    // Esconder modal
    function esconderModal() {
      deviceModal.style.display = "none";
    }

    // Ao clicar nos botões do modal
    btnComputer.addEventListener("click", () => {
      aplicarEstiloDispositivo("computer");
      esconderModal();
    });
    btnMobile.addEventListener("click", () => {
      aplicarEstiloDispositivo("mobile");
      esconderModal();
    });

    // Ao carregar a página, detectar e mostrar modal
    window.addEventListener("load", () => {
      // Sugere o tipo detectado (mas deixa o usuário escolher)
      mostrarModalEscolha();
    });

    // Mostrar prévia da imagem
    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });

    // Simulação de geração de cantada
    generateBtn.addEventListener("click", function () {
      if (!fileInput.files[0]) {
        status.textContent = "Por favor, envie uma imagem de conversa.";
        return;
      }

      status.textContent = "🔍 Analisando conversa (simulado)...";

      setTimeout(() => {
        const exemploCantada =
          "Se essa conversa fosse uma música, eu seria o refrão: sempre grudado em você! 🎶💘";

        cantadaTexto.textContent = exemploCantada;
        cantadaDiv.style.display = "block";
        status.textContent = "Cantada gerada com sucesso!";
      }, 2000);
    });

    // Copiar cantada
    copyBtn.addEventListener("click", function () {
      const text = cantadaTexto.textContent;
      navigator.clipboard.writeText(text).then(() => {
        status.textContent = "✅ Cantada copiada para a área de transferência!";
      });
    });

    // Botão Bot raid Discord - abre nova aba
    botRaidBtn.addEventListener("click", () => {
      window.open("https://miguel918-hub.github.io/Hyder-Raids/", "_blank");
    });
  </script>
</body>
</html>
