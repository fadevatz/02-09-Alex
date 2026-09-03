# Landing Page - Alex Silveira | Psicólogo, Psicanalista e Sexólogo

Landing page profissional desenvolvida para o **Dr. Alex Silveira**, destacando atuações em Psicanálise Contemporânea, Sexologia Clínica, Ansiedade e Dor Orofacial.

## 🚀 Como rodar com Docker

### Via Docker Compose (Recomendado)
```bash
docker compose up -d --build
```
Acesse `http://localhost/` no seu navegador.

### Via Dockerfile diretamente
```bash
docker build -t alex-silveira-lp .
docker run -d -p 80:80 --name alex_silveira_container alex-silveira-lp
```

## 📁 Estrutura de Arquivos
- `index.html`: Estrutura HTML5 semântica e responsiva.
- `styles.css`: Sistema de design com paleta Dourado/Grafite e componentes visuais.
- `script.js`: Interatividade (FAQ accordion e controle de menu).
- `assets/`: Fotos e imagens oficiais da marca.
- `Dockerfile` & `nginx.conf`: Configuração para produção.
