# Usa una imagen oficial de Debian con Python y LibreOffice
FROM ubuntu:20.04

# Establece el directorio de trabajo en /app
WORKDIR /app

# Establece la variable de entorno DEBIAN_FRONTEND para evitar la interacción con el usuario durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# Actualiza el sistema e instala Node.js y LibreOffice
RUN apt-get update && \
    apt-get install -y curl libreoffice && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Configura la región predeterminada para LibreOffice
RUN echo "LANG=en_US.UTF-8" > /etc/default/locale

# Copia los archivos necesarios al contenedor
COPY . .

# Instala las dependencias de tu aplicación
RUN npm install

# Expone el puerto en el que se ejecutará la aplicación Flask
EXPOSE 5000

# Comando para ejecutar la aplicación
# CMD ["python", "app/controller.py"]
ENTRYPOINT ["npm", "run", "start"]
