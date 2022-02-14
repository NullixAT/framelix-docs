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

That's all. We recommend PhpStorm or VisualStudio Code to develop with Framelix. But if you are bad-ass, just use `vi`. Whatever you like.
