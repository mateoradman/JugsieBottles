#!/usr/bin/env bash

docker exec jugsie_backend python3 manage.py makemigrations
docker exec jugsie_backend python3 manage.py migrate
docker exec jugsie_backend python3 manage.py pre_populate_users
docker exec jugsie_backend python3 manage.py pre_populate_faqs
docker exec jugsie_backend python3 manage.py pre_populate_bottles
