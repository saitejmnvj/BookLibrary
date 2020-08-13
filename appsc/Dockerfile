 FROM node:10
  


 WORKDIR /app  

 COPY package*.json ./
  
# ARG APP_PORT



# RUN echo "PORT = ${IMAGE_PORT}" >> .env    
RUN npm install
COPY . .

# RUN echo "PORT = ${APP_PORT}" >> .env
# ENV IMAGE_PORT=3000

# EXPOSE ${IMAGE_PORT} 
EXPOSE 3002

CMD [ "npm", "start" ]