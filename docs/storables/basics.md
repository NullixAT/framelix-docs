---
title: Basics
---

Storables are a very important core feature of Framelix. Before that, you should read
the [database section](../database/basics.md) how to set up the database.

With Storables you basically store, modify, update, delete everything in your database.

A storable is a class with properties. Each property is a column in the database. The database scheme is automatically
managed by the framework, you never need to write queries to update your database structure.

Don't worry, the system does nothing what can cause data-loss by default. You always have full control of when and what
actually get updated in the database.

More on that later.

Let's see a very basic Storable here, our SimpleDemo storable.

```php
<?php

namespace Framelix\Demo\Storable;

use Framelix\Framelix\DateTime;
use Framelix\Framelix\Db\StorableSchema;
use Framelix\Framelix\Storable\Storable;

/**
 * Simple Demo
 * @property string $email
 * @property string|null $name
 * @property string|null $muchoMachoText
 * @property int|null $logins
 * @property DateTime|null $lastLogin
 * @property bool $flagActive
 */
class SimpleDemo extends Storable
{
    /**
     * Setup self storable schema
     * @param StorableSchema $selfStorableSchema
     */
    protected static function setupStorableSchema(StorableSchema $selfStorableSchema): void
    {
        parent::setupStorableSchema($selfStorableSchema);
        $selfStorableSchema->properties['muchoMachoText']->databaseType = 'longtext';
        $selfStorableSchema->properties['muchoMachoText']->lazyFetch = true;
        $selfStorableSchema->addIndex('email', 'unique');
    }
}
```

Let's break it down.

## Ids

Each saved storable has a unique id across ALL storables in the database. This is done by only one table has an
auto_increment id, which is on `framelix__id`. At the time a storable is inserted the first time, a entry
in `framelix__id` is generated which generates a new unique. This id is then used in the storables own table as primary
key on column `id`.

So the result is, if you only have an id and know nothing elase, you can find out the exact entry from the database,
even you don't know the storable type, because this id is gueranteed to not be used for another storable.

## Property definition

Properties in storables are defined via `PhpDoc` on the class with the `@property` annotation. The first section in the
annoation is the property type, the second is the property variable name.

So in this example we have 5 properties.

Property types can be:

* Any scalar value (`bool, int, float, string`), which become almost the same types in the database. String is by
  default varchar with max length of 191, because this is the max that can be indexed in `utf8mb4` collation.
* Any other storable - You can reference any other storable by just putting in the class name as type. Other storables
  are just simply stored as integer in the database. Each storable have unique integer ids in this framework.
* Any other class that implement the `StorablePropertyInterface` interface, like the built-in `DateTime` or `Date` class
  from Framelix
* All of the above-mentioned types can also be an array by adding `[]` to the type, so example: `float[]`
* `mixed` - Which can store ANY data that can be converted to a json string. The value stored in this will be
  automatically stored as a JSON string in the database in a LONGTEXT field.
* Each property can also be declared with `null` which then is considered optional - In this example only `email`
  and `flagActive` must be set in order to store it in the database

An [extreme example](https://github.com/NullixAT/framelix-tests/blob/main/modules/FramelixTests/src/Storable/TestStorable2.php)
of all possible datatypes is in our unit test repository

## Changing default datatypes

By default, string is just a varchar, and there are other default conversation types. You can override all that in a
method with this interface `protected static function setupStorableSchema(StorableSchema $selfStorableSchema): void`

In this example, we override the final database type for mysql with `longtext`, because we expect `muchoMachoText` to be
a huge string. Also we define it to `lazyFetch` to only fetch in from database when the getter is actually called. For
now, if you need more details, just read the PhpDocs directly in
the `modules/Framelix/src/Db/StorableSchemaProperty.php`

#### Adding indexes

Also in this method, we add a unique index to `email` with `$selfStorableSchema->addIndex()` - This method accept
multiple property names for multiple column indexes and all most common index types.

## Inheritance and make a class a storable

To make a storable, you have to extend your class at least from `Storable` or `StorableExtended`. `Storable` just
provides all features for a storable, with one property, `id`. `StorableExtended` includes 4 more properties which
automatically stores `createTime`, `updateTime`, `createUser`, `updateUser` on the corresponding store action. This is
recommended for almost all Storables, when you ever want to know the create and update infos.

## Store/Update/Delete

Storing is as easy as you may think - You only have to call `->store()`

````php
// create new object
$obj = new \Framelix\Demo\Storable\SimpleDemo();
$obj->email = "my@email.com";
$obj->flagActive = true;
$obj->store();
````

Updating is just the same...

````php
// fetching object, more on fetching in a separate page...
$obj = \Framelix\Demo\Storable\SimpleDemo::getByConditionOne('email = {0}', ['my@email.com']);
$obj->email = "myothermail@email.com";
$obj->store();
````

Deleting, also a one-liner...

````php
$obj = \Framelix\Demo\Storable\SimpleDemo::getByConditionOne('email = {0}', ['my@email.com']);
$obj->delete();
````




