document.addEventListener('DOMContentLoaded', () => {
    
    const numeroWhatsApp = "61998020681";

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

    // 2. Ação do Botão de WhatsApp do Menu (Header)
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    whatsappBtn.addEventListener('click', () => {
        const mensagemPadrao = encodeURIComponent("Olá! Gostaria de um orçamento para festa na Comemorar Festas.");
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemPadrao}`, '_blank');
    });

    // 3. Envio do Formulário de Contato (via WhatsApp)
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const data = document.getElementById('data').value.trim();
            
            let mensagem = `*Solicitação de Orçamento - Comemorar Festas*%0A%0A`;
            mensagem += `*Nome:* ${nome || 'Não Informado'}%0A`;
            mensagem += `*Telefone:* ${telefone || 'Não Informado'}%0A`;
            mensagem += `*Data Desejada:* ${data ? data : 'Não Informada'}%0A%0A`;
            mensagem += `Por favor, complete a conversa com mais detalhes sobre o evento!`;

            window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
            
            alert("Sua solicitação foi enviada! Você será redirecionado(a) para o WhatsApp.");
            
            formContato.reset();
        });
    }

    // 4. Funcionalidade de Esconder/Mostrar o Menu Fixo (Hambúrguer)
    const menuToggle = document.querySelector('.menu-toggle');
    const headerConteudo = document.querySelector('.header-conteudo');

    if (menuToggle && headerConteudo) {
        
        // Inicializa o menu como ESCONDIDO no mobile
        if (window.innerWidth <= 600) {
            headerConteudo.classList.add('hidden');
        }

        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'hidden' no conteúdo (para subir/descer)
            headerConteudo.classList.toggle('hidden');
            
            // Alterna a classe 'open' no ícone (para transformar em X)
            menuToggle.classList.toggle('open');
        });

        // Opcional: Esconder o menu após clicar em um link interno (mobile)
       // Localize onde você gerencia o menuToggle e adicione/atualize isso:
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        // Quando clicar em qualquer link, adiciona a classe que esconde
        headerConteudo.classList.add('hidden');
        // E remove a classe 'open' do botão de 3 barrinhas para ele voltar ao normal
        menuToggle.classList.remove('open');
    });
});

    // 5. Efeito Fade-in para Imagens da Galeria (Mantido do código anterior)
    const galeriaItems = document.querySelectorAll('.galeria-item img');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const loadGalleryImages = () => {
        galeriaItems.forEach((img, index) => {
            if (isElementInViewport(img) && !img.classList.contains('loaded')) {
                setTimeout(() => {
                    img.classList.add('loaded');
                }, index * 150); 
            }
        });
    };

    loadGalleryImages();

    window.addEventListener('scroll', loadGalleryImages);
    window.addEventListener('resize', loadGalleryImages);
});
