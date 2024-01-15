INITIAL SETTINGS PROJECT
BACKEND
- django 4 need python 3.8+ and node 16+
- install virtual enviroment -> pip install virtualenv
- create virtual enviroment -> python -m venv venv
- In VSC press f1, encode and press -> python: select interpreter
- Install Django -> pip install django
- Create project -> django-admin startproject NAME_PROJECT .
- Create app -> python manage.py startapp NAME_APP
- Add app to project coding the 'NAME_APP' in installed_apps of settings.py/NAME_PROJECT

setting Django REST Framework
- Install -> pip install djangorestframework
- Comunicate backend with frontend -> pip install django-cors-headers
- Add Django to project coding 'corsheaders', 'rest_framework' in installed apps of settings.py/NAME_PROJECT
- Looking for corsheaders documentation on the web for encode in middleware of settings.py/NAME_PROJECT
- Encode CORS_ALLOWED_ORIGINS = [] to allow servers that will be able to connect to django

setting database 
- Create models for database in models.py/tasks
- Encode -> python manage.py makemigrations NAME_APP
- Encode -> python manage.py migrate NAME_APP

create user for admin in django -> python manage.py createsuperuser

FRONTEND
- install and create vite project -> npm create vite
- /cliente install modules for project -> npm install
- module for having different pages, module for receibing messages, module for making request, module for validating inputs -> npm i react-router-dom react-hot-toast axios react-hook-form

- for install tailwind, search for Vite documentation online. 

RUN PROJECT
Run backend -> python manage.py runserver
Run Fronted -> npm run dev
