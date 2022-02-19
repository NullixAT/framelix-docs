---
title: Update DB scheme
---

If you have created, deleted or updated a property or storable, it is required to update the database scheme to reflect
those changes in the database.

The system does all that for you.

We distinguish between two type of queries. `safe` and `unsafe`.

## Safe queries

This queries only does `add` new things to the database. New tables, columns, indexes. They do not modify any existing
column/index. So you can execute those queries on production without problems.

## Unsafe queries

This queries does `modify`/`delete`  things in the database. Change column types, delete unused columns, remove indexes.
Before running that kind of queries, you should look over the queries that would be executed and make a backup just in
case.

## Updating Scheme in Backend UI

In the backend, in `Developer Options -> Update Database` you have a UI to execute and preview those queries. Note that
you need to have the `Developer` role to enter this page. By default, the admin user don't have this role. Add it to you
with the backend UI at `User Management`.

## Updating Scheme in Command Line

You can run those queries also via CLI.

`php modules/Framelix/console.php updateDatabaseSafe` to execute all safe queries

`php modules/Framelix/console.php updateDatabaseUnsafe` to execute all unsafe queries