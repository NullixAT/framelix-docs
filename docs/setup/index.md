---
title: Framelix Development Setup
---

To start developing your own stuff, you need to set up a Framelix instance in your development environment.

## Requirements
You need a local webserver (Apache or Nginx), NodeJS, PHP 8.1+ installed and also running in the webserver and a recent Mysql/Mariadb.

## Setup
Here is how:

    git clone https://github.com/NullixAT/framelix-docs
    cd framelix-docs
    git submodule update --init --recursive
    cd modules/Framelix
    npm install

After that, just open the root of your folder in your browser, you should be guided through the first time setup.

After the installation, add a new config flag `"devMode": true` to enable developer mode into `modules/Demo/config-editable.php`

    <script type="application/json">
        {
        "devMode": true,
        "applicationHttps": true,
        ....

That's all. We recommend PhpStorm or VisualStudio Code to develop with Framelix. But if you are badass, just use `vi`. Whatever you like.

## PHP 8.1 config
At least PHP 8.1 is required. Following PHP modules are also required: `exif, fileinfo, mbstring, mysqli, sockets, json, curl, simplexml, zip, openssl`

## Mysql/MariaDB database config
There is nothing special you have to configure for this. Framelix do not require fancy edge technology out of the box. Any recent version should work.

## NodeJS
There is nothing special you have to configure for this. Any recent NodeJS version should work.

## Apache config
All you have to activate is `.htaccess` parsing and the `mod_rewrite` module, which is common and should already be activated for most out-of-the-box installations. You can choose to just open the root of the project in your browser, which then loads the module that's defined in the `index.php`.

Or you can choose to set up a virtual host, the directly points to the public folder of the module itself. This is a safer set up, as it deny browser access to files outside the public folder by default.

## Nginx config
Nginx cannot read `.htaccess`, so you have to set up url rewrite yourself in nginx. Here is a default virtual host set up with required rewrite rules.

    server {
        listen 0.0.0.0:443 ssl;
        server_name 127.0.0.1;
        root /srv/test/modules/Demo/public;
    
        ssl_certificate     /path/to/ssl/ssl.crt;
        ssl_certificate_key /path/to/ssl/ssl.key;
        
        # aggresive caching as we use anti-cache parameter anyway
        location ~* \.(woff|woff2|ttf|otf|svg|js|css|png|jpg|jpeg|gif|ico|webp)$ {
            expires 1y;
            log_not_found off;
        }
        
        # try file, folder and at least route to index.php
        location / {
            try_files $uri $uri/ @nofile;
        }
        
        # route every non existing file to index.php
        location @nofile{
            rewrite (.*) /index.php;
        }
        
        # php handling
        location ~ \.php$ {
	        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
            fastcgi_index index.php;
            include fastcgi.conf;
        }
        
        # rewrite urls starting with @ points to another module
        rewrite ^/@([A-Za-z0-9]+)/(.*) /../../$1/public/$2 last;
        
        index index.php;
        
        client_max_body_size 100M;
        
        # some security options
        add_header X-Content-Type-Options nosniff;
        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Download-Options noopen;
        add_header X-Permitted-Cross-Domain-Policies none;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    }