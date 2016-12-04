FROM node:onbuild
ARG port=8888
ENV PORT=$port
EXPOSE $port
