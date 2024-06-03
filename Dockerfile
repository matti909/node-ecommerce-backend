FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install --legacy-peer-deps

# Copiar el resto del código de la aplicación
COPY . .

# Establecer las variables de entorno
ENV PORT=
ENV DB_URI=
ENV JWT_SECRET=

# Construir la aplicación (si es necesario)
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
