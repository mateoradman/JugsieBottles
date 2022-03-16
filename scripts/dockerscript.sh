#!/usr/bin/env bash

cd "${0%/*}" || exit
while true; do
    read -p "Do you wish to install this program in development mode? " yn
    case $yn in
          [yY][eE][sS]|[yY])
                echo "Preparing Jugsie website in development mode."
                docker-compose -f ../docker-compose.yml up -d --build
                break
                ;;
          [nN][oO]|[nN])
                echo "Preparing Jugsie website in production mode."
                docker-compose -f ../docker-compose.prod.yml up -d --build
                break
                ;;
          *)
                echo "Invalid input..."
                ;;
    esac
done

chmod +x prepopulate_database.sh
sh prepopulate_database.sh
