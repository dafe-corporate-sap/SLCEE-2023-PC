ARG REGISTRY
ARG NODE_VERSION=16.20.0-bullseye-slim
# build step
FROM ${REGISTRY}node:${NODE_VERSION} as build

RUN apt-get update && apt-get install -y ca-certificates wget \
    && wget -q --no-check-certificate 'http://aia.pki.co.sap.com/aia/SAP%20Global%20Root%20CA.crt' -O '/usr/local/share/ca-certificates/SAP_Global_RootCA.crt' \
    && wget -q --no-check-certificate 'http://aia.pki.co.sap.com/aia/SAPNetCA_G2.crt' -O '/usr/local/share/ca-certificates/SAPNetCA_G2.crt' \
    && update-ca-certificates

WORKDIR /usr/arena/
COPY src/ /usr/arena/src/
COPY tools/ /usr/arena/tools/
COPY package.json /usr/arena/
COPY package-lock.json /usr/arena/
COPY tsconfig.json /usr/arena/
COPY tslint.json /usr/arena/
COPY tsoa.json /usr/arena/

RUN ["npm", "install"]
RUN ["npm", "run", "build", "--if-present"]

RUN ["chown", "-R", "node:node", "/usr/arena/"]
USER node

EXPOSE 8080

# execute cds start script
CMD ["npm", "run", "start"]