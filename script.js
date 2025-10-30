document.addEventListener('DOMContentLoaded', () => {
    
    // Seu número de WhatsApp (usado tanto no botão quanto no formulário)
    // ATUALIZE AQUI SE O NÚMERO MUDAR!
    const numeroWhatsApp = "61998020681";

    // 1. Scroll Suave para as Seções
    // Permite que o menu navegue suavemente pela página
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Ação do Botão de WhatsApp do Menu (Header)
    // Abre o WhatsApp com uma mensagem padrão
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    whatsappBtn.addEventListener('click', () => {
        const mensagemPadrao = encodeURIComponent("Olá! Gostaria de um orçamento para festa na Comemorar Festas.");
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemPadrao}`, '_blank');
    });

    // 3. Envio do Formulário de Contato (via WhatsApp)
    // Estrutura a mensagem com os dados do formulário e redireciona
    const formContato = document.getElementById('form-contato');
    
    formContato.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio tradicional do formulário

        // Captura e sanitiza (limpa) os valores do formulário
        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const data = document.getElementById('data').value.trim();
        
        // Cria a mensagem estruturada (utilizando %0A para quebra de linha)
        let mensagem = `*Solicitação de Orçamento - Comemorar Festas*%0A%0A`;
        mensagem += `*Nome:* ${nome || 'Não Informado'}%0A`;
        mensagem += `*Telefone:* ${telefone || 'Não Informado'}%0A`;
        mensagem += `*Data Desejada:* ${data ? data : 'Não Informada'}%0A%0A`;
        mensagem += `Por favor, complete a conversa com mais detalhes sobre o evento!`;

        // Codifica a mensagem para URL e abre o WhatsApp
        window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
        
        // Alerta para o usuário saber que a ação foi concluída
        alert("Sua solicitação foi enviada! Você será redirecionado(a) para o WhatsApp.");
        
        // Limpa o formulário após a ação
        formContato.reset();



    });
});