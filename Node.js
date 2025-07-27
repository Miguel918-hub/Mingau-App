generateBtn.addEventListener("click", async function () {
  if (!fileInput.files[0]) {
    status.textContent = "Por favor, envie uma imagem de conversa.";
    return;
  }

  status.textContent = "🔍 Analisando conversa...";

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("image", file);

  try {
    // Troque a URL abaixo pela URL do seu backend que processa a imagem
    const response = await fetch("https://seu-backend.com/api/process-image", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Erro ao processar a imagem.");

    const data = await response.json();

    if (data.cantada) {
      cantadaTexto.textContent = data.cantada;
      cantadaDiv.style.display = "block";
      status.textContent = "Cantada gerada com sucesso!";
    } else {
      status.textContent = "Não foi possível gerar a cantada.";
    }
  } catch (error) {
    status.textContent = "❌ Erro: " + error.message;
  }
});
