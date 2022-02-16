---
title: Configuration
---

Each module contains a `config` folder, which can contain 2 files:

* `config-module.php` - Which is the modules default configuration which you can safily add to your version control
* `config-editable.php` - That's the application and server specific configuration which contains database access and every other flag that is dedicated to the point where it installed - This should never be included in version control

## Config load order and overrides

Configs are loaded when a [module is loaded](modules.md), in the same order as the modules. Each module first loads `config-module.php`, then the user config in `config-editable.php` Config is global and a config key can only exist ones, which means, if 2 modules have the same config key, one override another depending on loading order.

This give you the benefit to define default config in `config-module.php` and then override specific keys in `config-editable.php`. Also `Framelix` has many default configuration values then you can override to your needs in your own module.

## Explaining some built-in config keys that are not changable in the backend

* `modules` - An array of module names to load additionally
* `modulesCallable` - Pointing to a static method the returns an array of modules to load
* `devMode` - A boolean flag to enable dev mode (Which never should be enabled in production)
* `salts` - An array containing random general salts on first installation, which are used by hashing functions
* `shellAliases` - An array of alias to path mapping for shell executables - Used when calling shell executables in scripts
* `clientIpKey` - Default is `REMOTE_ADDR`, which is the `$_SERVER` variable key which holds the users ip - Use it to change when you have a proxy that pass the IP in another header
* `compiler` - Is explained separatly in the [compiler](compiler.md) tutorial
* `userRoles` - An array of key/value pair (See `Framelix\config-module.php` for examples)
* `userTokenCookieName` - The cookie name where login hash will be stored
* `backendLogo` - A relative path from module public folder to a image file for your backend logo
* `backendIcon` - A relative path from module public folder to a image file for your backend favicon

## Example config

    <?php
    // prevent loading directly in the browser without framelix context
    if (!defined("FRAMELIX_MODULE")) {
        die();
    }
    // this config represents the editable configuration that can be changed by the user in the admin interface
    // this should not be under version control
    ?>
    <script type="application/json">
        {
        "modules": ["AnotherModule", "MoreModules"],
        "devMode": true,
        "applicationHttps": true,
        "applicationHost": "test.framelix",
        "applicationUrlBasePath": "\/",
        "database": {
            "default": {
                "host": "127.0.0.1",
                "username": "root",
                "password": "",
                "database": "framelixdocs",
                "port": 3306,
                "socket": ""
            }
        },
        "salts": {
            "general": "randomgeneratedsalt"
        },
        "languageDefault": "de",
        "languageFallback": "en",
        "languageMultiple": false,
        "shellAliases": {
            "php": "php"
        },
        "errorLogDisk": true,
        "mailSendType": "mail"
    }
    </script>