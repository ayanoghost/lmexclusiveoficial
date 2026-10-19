// 1. Simulação de um banco de dados de usuários, senhas e suas respectivas páginas
        const usuariosCadastrados = {
            "ayano who": { senha: "489920", pagina: "clientesvip/ayanowho/ayanowho.html" },
            "lorena ceo":  { senha: "abc", pagina: "clientesvip/lorenaceo/lorenaceo.html" },
            "katia raupp": { senha: "xyz", pagina: "clientesvip/katiaraupp/katiaraupp.html" }
        };

        // 2. Captura o envio do formulário
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o recarregamento padrão da página

            const usuarioInput = document.getElementById("username").value.trim();
            const senhaInput = document.getElementById("password").value;
            const mensagemErro = document.getElementById("error-message");

            // Limpa mensagens de erro anteriores
            mensagemErro.textContent = "";

            // 3. Verifica se o usuário existe no objeto e se a senha confere
            if (usuariosCadastrados[usuarioInput] && usuariosCadastrados[usuarioInput].senha === senhaInput) {
                // Redireciona para a página correspondente
                window.location.href = usuariosCadastrados[usuarioInput].pagina;
            } else {
                // Exibe mensagem de erro caso falhe
                mensagemErro.textContent = "Usuário ou senha incorretos!";
            }
        });