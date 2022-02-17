---
title: JS and SCSS Compiler
---

Framelix has a built-in compiler and bundler. You can write code in newest Javascript/SCSS syntax and will automatically
be compiled on-demand for you. You never have to manually compile anything.

Whenever you change a JS/SCSS file, it will be compiled automatically when you visit any view/page. This happens so
fast, you barely may notice it.

To enable automatic compiling you have to enable `devMode` in [configuration](configuration.md) and you need to have to
properly `npm install` in `Framelix` module, see [setup](../setup/index.md).

## Configuration

Each bundle, and therefore all files in it, will be defined via configuration keys. There are many possible options and
flags, but first lets see an example and then break it down.

Please see all comments directly on each config line:

``` javascript
"compiler": { // the basic config key for the compiler
    "Demo": { // your module name
        "js": { // all JS related config comes under this key
            "demo": { // a group name which will be finally in the filename
                "files": [ // an array of files/folders to include
                    {
                        "type": "folder", // can be file/folder
                        "path": "js", // foldername relative to module directory
                        "recursive": true // want to include all .js files recursively as well
                    }
                ],
                "options": {
                    "noInclude": false, // if true, it will not include files automatically on the page
                    "noCompile": false // if true, it will not compile files, just bundle them (for vendor libraries)
                }
            }
        },
        "scss": { // for SCSS files groups
            "demo": { // a group name which will be finally in the filename
                "files": [ // an array of files/folders to include
                    {
                        "type": "file", // here we just include explicit files instead of a folder
                        "path": ["scss/demo.scss"] // an array of files to include
                    }
                ],
                "options": { // same as above
                    "noInclude": false,
                    "noCompile": false
                }
            }
        }
    }
}
```