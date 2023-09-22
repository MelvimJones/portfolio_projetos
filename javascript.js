const mensagens = [
    "Olá, pessoal!",
    "Espero que gostem da minha apresentação!",
    "Obrigado e até mais!"
  ];
  
  async function apresentarMensagens() {
    for (const mensagem of mensagens) {
      console.log(mensagem);
      await aguardarSegundos(2);
    }
  }
  
  function aguardarSegundos(segundos) {
    return new Promise(resolve => {
      setTimeout(resolve, segundos * 1000);
    });
  }
  
  apresentarMensagens();