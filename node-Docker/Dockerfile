FROM node:15

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install;\
        else npm install && npm install -g nodemon --only=production; \
        fi

COPY . ./

EXPOSE 5000

CMD ["node", "index.js"]


#docker-compose up --build
#docker-compose up

#when using multiple docker files we run by specifying the default file then the one we want to run  

#running in development mode
# docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up

#enter mongo cli
#docker exe -it node-docker-mongo-1 mongo -u "thabiso" -p "mypassword"
#node-docker-mongo-1