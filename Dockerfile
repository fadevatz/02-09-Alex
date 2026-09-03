# Dockerfile para Landing Page Dr. Alex Silveira
FROM nginx:alpine

# Copiar arquivos do projeto para a pasta do Nginx
COPY . /usr/share/nginx/html

# Copiar configuração otimizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
