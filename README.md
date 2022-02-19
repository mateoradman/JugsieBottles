# JugsieBottles
Repository for Jugsie Bottles Webshop

## Project architecture
The Webshop is architected to have a dedicated REST API as a backend service and NextJS serving the frontend.
The communication between frontend and backend is designed to be over http where NextJS API endpoints are calling Django REST API.
Both Django server and NextJS are designed to run on an nginx with a reverse proxy.

## Notable libraries used

### REST API
- Django
- Django rest framework
- Small libraries for country validation and automatic API schema.

### Frontend
- React and NextJS
- TailwindCSS (Including HeadlessUI and TailwindUI)
- DaisyUI


## Email provider
Zoho.eu (SMTP) using TLS

## How to navigate the codebase?
The code in this project is split in two major components: 
    1. `api/` which contains Django REST API 
    2. `frontend/` which contains NextJS (React) project

Api folder contains complete django project with dedicated django apps for certain operations.
Frontend folder contains the complete frontend code and some nextJS API endpoints to mask sensitive information before calling Django REST API.

## How to install and run everything?
To be written...
