---
title: Fetch storables from database
---

So, in [the basics](basics.md) you have learned how to create and store data in the database. Now let's learn how to
fetch existing entries from database. There are really handy features in here.

For all this examples, we use the existing storable `User` and `UserToken` from the `Framelix` module for reference.

## General

The base `Storable` class provide the fetch methods down bellow. Each storable must inherit from this class, so every
storable has this classes.

The system does check, from which class you call this and does fetch only objects from that class from the database.
With this way, we have 100% auto-completion, because the editor knows exactly what instances are returned. You don't
have to guess strings and you don't need special editor extensions to make this working.

## Fetch methods

* getByIdOrNew
* getById
* getByIds
* getByCondition
* getByConditionOne

### getById

This is the most basic fetch method. It expects just an id and it will return the object if the id matches to the
storable from which it is called.

The system does some clever caching for you, so if you call this 1000x times, only 1 query is executed.

````php
$user = \Framelix\Framelix\Storable\User::getById(666);
if($user) {
    // this variable only contains a User storable
    // if the id 666 is used in the database, but is not a User storable, it will be null and not returned
    echo $user->email;
}
````

#### But what if you don't know the type

You can always also call any fetch method from the abstract storable class, which return the matching storable with that
id from the database.

````php
$storable = \Framelix\Framelix\Storable\Storable::getById(222);
if($storable) {
    // this variable a storable with id 222 if it exists
    // at this point, the editor cannot know what storable it is, it only knows it's a Storable
    // so it depends on you what you now do with this storable
}
````

### getByIdOrNew

It's almost the same as `getById`, with the difference as it always returns an instance of given type. If the instance
doesn't exist in the database, it returns a new instance of that type, that's not yet is stored in the database.

This is usefull when you are on a page where you can create/edit an entry.

The system does also here some clever caching for you, each id that already have been fetching, will not be fetched
again, which save performance.

### getByIds

Same as `getById`, expect it excepts an array of ids and then returns an array of objects. If none of the given ids are
found in the database, the array just empty but is still an array.

### getByCondition/getByConditionOne

Here it is where the fun begins. All above methods internally uses `getByCondition` at the end. Both methods are the
same, except `getByCondition` returns an array with all found storables where `getByConditionOne` return just the first
storable of that array.

A condition in this context is basically everything in the `WHERE` clause in the query.

Let's have a simple example:

````php
$user = \Framelix\Framelix\Storable\User::getByConditionOne('email = {0}', ['my@email.com']);
// this is set when a user with email 'my@email.com'

$user = \Framelix\Framelix\Storable\User::getByConditionOne('email = {0} && flagLocked = {1}', ['my@email.com', false]);
// this is set when a user with email 'my@email.com' and flagLocked is false

$users = \Framelix\Framelix\Storable\User::getByCondition(sort: '-id', limit: 10);
// this array contains the last 10 users from the database
````

### Depth joins

One awesome feature are automatic depth joins, or reference joins, however you call it. Let's say you want
all `UserToken` where the referenced user is not locked.

````php
$userTokens = \Framelix\Framelix\Storable\UserToken::getByCondition('user.flagLocked = {0}', [false]);
// here you have all tokens, where the referenced user in the token has a flagLocked value with false
````

You can go as deep as you want, let's have another example. Let's say you the same as before, but only that token where
the user data has been last updated by another user with a specific email. To find out if a specific administrator has
modified a user.

````php
$userTokens = \Framelix\Framelix\Storable\UserToken::getByCondition('user.flagLocked = {0} && user.updateUser.email = {1}', [false, 'user@gmail.foo']);
// this checks if token->user->updateUser->email is = 'user@gmail.foo'
````







