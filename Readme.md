# Deep Pocket

### To run the application on Archlinux or any Arch based OS, please type the following commands in your terminal.

Install PHP
>pacman -S php

Install Laravel
>composer global require laravel/installer

Go to the folder "front"
>cd Code/front

Install modules
>npm install

Run the front-end of the app
>npm start

Go to the folder "backlaravel"
>cd ../backlaravel

Create the database
>php artisan migrate

Run the back-end of the app
>php artisan serve
