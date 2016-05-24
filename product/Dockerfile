FROM node:argon

#create app director
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install app dependencies
ADD ./src/ /usr/src/app/
RUN npm install

#Bundle app source
#COPY ./src /usr/src/app

EXPOSE 8080

CMD [ "npm", "start" ]
