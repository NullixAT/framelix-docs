---
title: Modules
---

A module is where it all begins. The core itself is also a module with the name `Framelix`.

Each module must be placed in a folder with the module name in the folder `modules`

## File Structure

This is the structure that is required, you are free to add any more folder you need and want

**/_meta** - Some automatically compiled metadata comes in here. For view mapping, etc...

**/config** - This is where the basic and user configuration comes in

**/js** - All javascript source files comes into here

**/lang** - Translation files comes into here Name must be `xx.json` where `xx` is the official 2-char iso code of your language

**/public** - This folder and all files in here are reachable by the browser So public files placed here

**/public/dist** - Automatically compiled JS/CSS files will be placed here

**/scss** - SCSS files comes into here

**/src** - All PHP classes that should be available in your application should be placed here

**/tmp (Optional)** - Should be used when you generate temporary files

**/vendor (Optional)** - Place 3rd party PHP library into here Which is also the default folder when you install something with composer

**/package.json** - Contains some basic module information and possibly npm modules that your app requires

## Module Loading Order

Modules are initially loaded in the following order:

* Framelix
* CurrentModule (Which is the module you have as entry point)
* Other optional modules defined in the config key `modules` defined in your [configuration](configuration.md)

Only classes of loaded modules can be autoloaded, other modules classes are not available automatically, even if they exist on disk.
