---
title: Terminology / How things are named in Framelix
---

You may come across some words and terms that you may not know, so let us explain the most used terms in Framelix and what they mean.

## View
A View is basically an entry point for your application, the point where the user can visit your application, or in short: A url that can be loaded by your browser.

Other frameworks often call the process `Route/Routing`. In Framelix `Routing` and actual output happens in the same place, in the `View` itself. No need of separate keep tracking of entry point routes. the place where you actually output is also the place how it can be accessed.

## Storable
A Storable as an object, that can be stored in the database. It contains all properties that can be saved in the database. Each property is a column in the database, simple as that. There is no need to create meta files or anything like that. One file, one purpose.

