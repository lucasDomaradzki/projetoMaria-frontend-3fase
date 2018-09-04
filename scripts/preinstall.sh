#!/bin/bash

sudo rm -rf ./config/workspace.json
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
    WORKSPACE=$(jq '.workspace' -r config/workspace.json)
    MONGODB="$(jq '.mongoDB' -r config/workspace.json)"
    sudo npm install --global gulp
    sudo npm install gulp-cli -g
    sudo mkdir -p $MONGODB/data/db
  fi
fi
