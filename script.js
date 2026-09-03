/* ==========================================================================
   ALEX SILVEIRA - PSICÓLOGO, PSICANALISTA & SEXÓLOGO
   Interactive JavaScript Features
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
  initModalSmartphone();
  initContactActions();
});

/* 1. Header & Navigation Scroll Effect */
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fechar ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* 2. FAQ Accordion */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fechar outros
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* 3. Modal "Enviar para o Smartphone" & vCard */
function initModalSmartphone() {
  const modal = document.getElementById('modalSmartphone');
  const openBtns = document.querySelectorAll('.btn-open-modal');
  const closeBtn = document.querySelector('.modal-close');
  const downloadVcardBtn = document.getElementById('btnDownloadVCard');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Download do arquivo vCard (.vcf) para salvar no telefone
  if (downloadVcardBtn) {
    downloadVcardBtn.addEventListener('click', () => {
      downloadVCard();
    });
  }
}

/* Função para gerar e baixar o arquivo vCard do Dr. Alex Silveira */
function downloadVCard() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Silveira;Alex;;Dr.;
FN:Dr. Alex Silveira
TITLE:Psicólogo, Psicanalista e Sexólogo
TEL;TYPE=CELL,VOICE:+5535984496410
NOTE:Psicólogo, Psicanalista e Sexólogo em São Sebastião do Paraíso - MG. Ansiedade, Psicanálise e Sexologia.
ADR;TYPE=WORK:;;Rua Djalma Dutra, 568 - Centro;São Sebastião do Paraíso;MG;37950-050;Brasil
URL:https://www.instagram.com/psicologoalexsilveira/
END:VCARD`;

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Dr_Alex_Silveira_Psicologo.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* 4. Ações de Contato e Compartilhamento */
function initContactActions() {
  const shareWspBtn = document.getElementById('btnShareWhatsApp');

  if (shareWspBtn) {
    shareWspBtn.addEventListener('click', () => {
      const text = encodeURIComponent("Contato do Dr. Alex Silveira (Psicólogo, Psicanalista e Sexólogo): (35) 98449-6410. Endereço: R. Djalma Dutra, 568 - Centro, São Sebastião do Paraíso - MG.");
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }
}
