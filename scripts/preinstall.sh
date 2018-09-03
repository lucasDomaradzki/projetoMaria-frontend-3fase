#!/bin/bash

#Check if the workspace.json is defined, if not it creates it
if [[ ! -e "config/workspace.json" ]];then
  touch 'config/workspace.json'
  read -p "Digite o caminho absoluto da sua workspace do projeto maria: " input1
  read -p "Digite o caminho absoluto do MongoDB: " input2
  while [ "$input1" == "" ]
  do
    read -p "Digite um caminho absoluto válido para a workspace do projeto maria:" input1
    read -p "Digite o caminho absoluto do MongoDB: " input2
  done
  if [ "$input1" != "" ] && [ "$input2" != "" ];then
    echo '{"workspace": "'$input1'", "mongoDB": "'$input2'"}' > "config/workspace.json"
    
  fi
fi

#Check if container projetomaria exists, if not it loads Dockerfile and creates it
if [ ! $(docker ps -aq --filter name=projetomaria) ];then
  WORKSPACE=$(jq '.workspace' -r config/workspace.json)
  MONGODB="$(jq '.mongoDB' -r config/workspace.json)"
  sudo npm install --global gulp
  sudo npm install gulp-cli -g
  sudo mkdir -p $MONGODB/data/db
  sudo usermod -a -G docker $USER
  docker pull ubuntu:16.04
  docker build --no-cache -t projetomaria .
  docker run --name=projetomaria -d -v $WORKSPACE:/workspace -p 8080:80 projetomaria
  DOCKER_IP=$(docker inspect $(docker ps -aq --filter "name=projetomaria") | jq -r .[0].NetworkSettings.IPAddress)
  sudo sh -c "echo $DOCKER_IP local.projetomaria.com.br >> /etc/hosts"
fi

