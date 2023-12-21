# Usa una imagen oficial de Debian con Python y LibreOffice
FROM ubuntu:20.04

# Establece el directorio de trabajo en /app
WORKDIR /app

# Establece la variable de entorno DEBIAN_FRONTEND para evitar la interacción con el usuario durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# Actualiza el sistema y luego instala Python y las bibliotecas de LibreOffice
RUN apt-get update && \
    apt-get install -y python3 python3-pip libreoffice && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copia los archivos necesarios al contenedor
COPY . .

# Instala las dependencias de tu aplicación
RUN pip3 install --no-cache-dir -r requirements.txt

# Expone el puerto en el que se ejecutará la aplicación Flask
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["python", "app/controller.py"]
