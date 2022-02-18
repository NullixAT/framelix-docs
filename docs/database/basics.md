---
title: Database Basics
---

Framelix support only mysql/mariadb databases out of the box.

After you have run the initial set up in your browser, where you add db credentials and initialize the database, you
have a fully functional application.

## Configuration

All your db connections and credentials are stored in the [configuration](../basics/configuration.md), which is already
created after set up.

A connection have an "id", which is the key in the configuration. The `default` connection is the standard for all
further db actions. You can add more database connection with different connection ids.

Example:

    ....
    "database": {
        "default": {
          "host": "localhost",
          "username": "root",
          "password": "",
          "database": "demo",
          "port": 3306,
          "socket": ""
        },
        "anotherdb": {
          "host": "localhost",
          "username": "root",
          "password": "",
          "database": "anotherdb",
          "port": 3306,
          "socket": ""
        }
    }
    ....

Here you have 2 connections, one with id `default` and one with `anotherdb`.

## Executing queries

If you ever need to execute raw queries, you can do that.

````php
// using default db
$db = \Framelix\Framelix\Db\Mysql::get();
// raw
$db->query("INSERT ...");
// just a nicer way to insert something
$db->insert("table", ['name' => 'foo']);
// simple update
$db->update("table", ['name' => 'foo'], 'id = {0}', [3018]);
// simple delete
$db->delete("table",'id = {0}', [3018]);

// using anotherdb db
$db = \Framelix\Framelix\Db\Mysql::get('anotherdb');
$db->query("INSERT ...");
````

## Fetch data

If you ever need to fetch raw data, you can do that too.

````php
// using default db
$db = \Framelix\Framelix\Db\Mysql::get();
// returns an array-array with column names as indexes
$db->fetchAssoc("SELECT ...");
// same as above but with parameters automatically escaped properly
$db->fetchAssoc("SELECT ... FROM xxx WHERE name = {0}", ['brainfoolong']);
// same as fetchAssoc, but only returns the first entry of it
$db->fetchAssocOne("SELECT ...");
// returns an array-array without column names
$db->fetchArray("SELECT ...");
// returns an array with the first column as value
$db->fetchColumn("SELECT ...");
// returns the first column of the first row
$db->fetchOne("SELECT ...");
````