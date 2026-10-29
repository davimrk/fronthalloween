    const div = document.getElementById('div')
    let resultado = []
    let ponto = 0
    
    async function conexao() {
    try {
        const resp = await fetch('https://quiz-halloween-senac-1.onrender.com/api/conexao');

        console.log('Status:', resp.status);

        if (!resp.ok) {
            throw new Error(`Erro HTTP: ${resp.status}`);
        }

        resultado = await resp.json();

        console.log('Perguntas recebidas:', resultado);

        carregarPergunta(1);

    } catch (erro) {
        console.error('Erro na conexão:', erro);
        alert('Erro ao conectar com o servidor. Verifique o console.');
    }
}
    
    function carregarPergunta(id) {
        const atual = resultado.find(function(item) {
            return item.id === id;
        });
    
        if(!atual) {
            div.innerHTML = `Você finalizou o quiz, sua pontuação foi: ${ponto} `
            return;
        }
        div.innerHTML = `
            <section class="quiz">
                <p>${atual.id}) ${atual.pergunta}</p>
                <div class="questao">
    
                </div>
            </section>
        `
            const alternativa = div.querySelector('.questao');
            for(let i=0; i<atual.questoes.length; i++){
                const btn = document.createElement('button');
                btn.textContent = atual.questoes[i];
                btn.addEventListener("click", function() {
                    verificar(id, i);
                });
                alternativa.appendChild(btn)
            }
        }
    function verificar(id, i) {
        const atual = resultado.find(function(item) {
            return item.id === id;
        })
        if (i === atual.correta) {
            ponto += 10
            carregarPergunta(id + 1);
        } else {
            alert("Errado!")
            carregarPergunta(id + 1);
        }
    }
    
    conexao()