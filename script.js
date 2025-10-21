document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Suave para as Seções
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

    // 2. Ação do Botão de WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const numeroWhatsApp = "55XX9XXXXXXXX"; // Substitua pelo seu número!

    whatsappBtn.addEventListener('click', () => {
        const mensagemPadrao = encodeURIComponent("Olá! Gostaria de um orçamento para festa na Comemorar Festas.");
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemPadrao}`, '_blank');
    });

    // 3. Simulação de Envio de Formulário (e redirecionamento para o WhatsApp)
    const formContato = document.getElementById('form-contato');
    
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const data = document.getElementById('data').value;
        
        let mensagem = `*Pedido de Orçamento - Comemorar Festas*%0A%0A`;
        mensagem += `*Nome:* ${nome}%0A`;
        mensagem += `*Telefone:* ${telefone}%0A`;
        mensagem += `*Data Desejada:* ${data ? data : 'Não Informada'}%0A%0A`;
        mensagem += `Aguardamos seu contato para falarmos sobre a festa!`;

        // Abre o WhatsApp com a mensagem pré-preenchida
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
        
        alert("Obrigado! Você será redirecionado para o WhatsApp para finalizar seu orçamento.");
        
        // Limpa o formulário após a simulação
        formContato.reset();
    });
});