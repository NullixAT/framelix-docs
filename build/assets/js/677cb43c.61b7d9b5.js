"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[895],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5583:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Basics"},s=void 0,p={unversionedId:"storables/basics",id:"storables/basics",title:"Basics",description:"Storables are a very important core feature of Framelix. Before that, you should read",source:"@site/docs/storables/basics.md",sourceDirName:"storables",slug:"/storables/basics",permalink:"/docs/storables/basics",draft:!1,tags:[],version:"current",frontMatter:{title:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Storables",permalink:"/docs/category/storables"},next:{title:"Fetch storables from database",permalink:"/docs/storables/fetch"}},d={},c=[{value:"Ids",id:"ids",level:2},{value:"Property definition",id:"property-definition",level:2},{value:"Changing default datatypes",id:"changing-default-datatypes",level:2},{value:"Adding indexes",id:"adding-indexes",level:4},{value:"Inheritance and make a class a storable",id:"inheritance-and-make-a-class-a-storable",level:2},{value:"Store/Update/Delete",id:"storeupdatedelete",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Storables are a very important core feature of Framelix. Before that, you should read\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/database/basics"},"database section")," how to set up the database."),(0,o.kt)("p",null,"With Storables you basically store, modify, update, delete everything in your database."),(0,o.kt)("p",null,"A storable is a class with properties. Each property is a column in the database. The database scheme is automatically\nmanaged by the framework, you never need to write queries to update your database structure."),(0,o.kt)("p",null,"Don't worry, the system does nothing what can cause data-loss by default. You always have full control of when and what\nactually get updated in the database."),(0,o.kt)("p",null,"More on that later."),(0,o.kt)("p",null,"Let's see a very basic Storable here, our SimpleDemo storable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace Framelix\\Demo\\Storable;\n\nuse Framelix\\Framelix\\DateTime;\nuse Framelix\\Framelix\\Db\\StorableSchema;\nuse Framelix\\Framelix\\Storable\\Storable;\n\n/**\n * Simple Demo\n * @property string $email\n * @property string|null $name\n * @property string|null $muchoMachoText\n * @property int|null $logins\n * @property DateTime|null $lastLogin\n * @property bool $flagActive\n */\nclass SimpleDemo extends Storable\n{\n    /**\n     * Setup self storable schema\n     * @param StorableSchema $selfStorableSchema\n     */\n    protected static function setupStorableSchema(StorableSchema $selfStorableSchema): void\n    {\n        parent::setupStorableSchema($selfStorableSchema);\n        $selfStorableSchema->properties['muchoMachoText']->databaseType = 'longtext';\n        $selfStorableSchema->properties['muchoMachoText']->lazyFetch = true;\n        $selfStorableSchema->addIndex('email', 'unique');\n    }\n}\n")),(0,o.kt)("p",null,"Let's break it down."),(0,o.kt)("h2",{id:"ids"},"Ids"),(0,o.kt)("p",null,"Each saved storable has a unique id across ALL storables in the database. This is done by only one table has an\nauto_increment id, which is on ",(0,o.kt)("inlineCode",{parentName:"p"},"framelix__id"),". At the time a storable is inserted the first time, a entry\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"framelix__id")," is generated which generates a new unique. This id is then used in the storables own table as primary\nkey on column ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,o.kt)("p",null,"So the result is, if you only have an id and know nothing elase, you can find out the exact entry from the database,\neven you don't know the storable type, because this id is gueranteed to not be used for another storable."),(0,o.kt)("h2",{id:"property-definition"},"Property definition"),(0,o.kt)("p",null,"Properties in storables are defined via ",(0,o.kt)("inlineCode",{parentName:"p"},"PhpDoc")," on the class with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@property")," annotation. The first section in the\nannoation is the property type, the second is the property variable name."),(0,o.kt)("p",null,"So in this example we have 5 properties."),(0,o.kt)("p",null,"Property types can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any scalar value (",(0,o.kt)("inlineCode",{parentName:"li"},"bool, int, float, string"),"), which become almost the same types in the database. String is by\ndefault varchar with max length of 191, because this is the max that can be indexed in ",(0,o.kt)("inlineCode",{parentName:"li"},"utf8mb4")," collation."),(0,o.kt)("li",{parentName:"ul"},"Any other storable - You can reference any other storable by just putting in the class name as type. Other storables\nare just simply stored as integer in the database. Each storable have unique integer ids in this framework."),(0,o.kt)("li",{parentName:"ul"},"Any other class that implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"StorablePropertyInterface")," interface, like the built-in ",(0,o.kt)("inlineCode",{parentName:"li"},"DateTime")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Date")," class\nfrom Framelix"),(0,o.kt)("li",{parentName:"ul"},"All of the above-mentioned types can also be an array by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"[]")," to the type, so example: ",(0,o.kt)("inlineCode",{parentName:"li"},"float[]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mixed")," - Which can store ANY data that can be converted to a json string. The value stored in this will be\nautomatically stored as a JSON string in the database in a LONGTEXT field."),(0,o.kt)("li",{parentName:"ul"},"Each property can also be declared with ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," which then is considered optional - In this example only ",(0,o.kt)("inlineCode",{parentName:"li"},"email"),"\nand ",(0,o.kt)("inlineCode",{parentName:"li"},"flagActive")," must be set in order to store it in the database")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NullixAT/framelix-tests/blob/main/modules/FramelixTests/src/Storable/TestStorable2.php"},"extreme example"),"\nof all possible datatypes is in our unit test repository"),(0,o.kt)("h2",{id:"changing-default-datatypes"},"Changing default datatypes"),(0,o.kt)("p",null,"By default, string is just a varchar, and there are other default conversation types. You can override all that in a\nmethod with this interface ",(0,o.kt)("inlineCode",{parentName:"p"},"protected static function setupStorableSchema(StorableSchema $selfStorableSchema): void")),(0,o.kt)("p",null,"In this example, we override the final database type for mysql with ",(0,o.kt)("inlineCode",{parentName:"p"},"longtext"),", because we expect ",(0,o.kt)("inlineCode",{parentName:"p"},"muchoMachoText")," to be\na huge string. Also we define it to ",(0,o.kt)("inlineCode",{parentName:"p"},"lazyFetch")," to only fetch in from database when the getter is actually called. For\nnow, if you need more details, just read the PhpDocs directly in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"modules/Framelix/src/Db/StorableSchemaProperty.php")),(0,o.kt)("h4",{id:"adding-indexes"},"Adding indexes"),(0,o.kt)("p",null,"Also in this method, we add a unique index to ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"$selfStorableSchema->addIndex()")," - This method accept\nmultiple property names for multiple column indexes and all most common index types."),(0,o.kt)("h2",{id:"inheritance-and-make-a-class-a-storable"},"Inheritance and make a class a storable"),(0,o.kt)("p",null,"To make a storable, you have to extend your class at least from ",(0,o.kt)("inlineCode",{parentName:"p"},"Storable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"StorableExtended"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Storable")," just\nprovides all features for a storable, with one property, ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"StorableExtended")," includes 4 more properties which\nautomatically stores ",(0,o.kt)("inlineCode",{parentName:"p"},"createTime"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"updateTime"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"updateUser")," on the corresponding store action. This is\nrecommended for almost all Storables, when you ever want to know the create and update infos."),(0,o.kt)("h2",{id:"storeupdatedelete"},"Store/Update/Delete"),(0,o.kt)("p",null,"Storing is as easy as you may think - You only have to call ",(0,o.kt)("inlineCode",{parentName:"p"},"->store()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// create new object\n$obj = new \\Framelix\\Demo\\Storable\\SimpleDemo();\n$obj->email = "my@email.com";\n$obj->flagActive = true;\n$obj->store();\n')),(0,o.kt)("p",null,"Updating is just the same..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// fetching object, more on fetching in a separate page...\n$obj = \\Framelix\\Demo\\Storable\\SimpleDemo::getByConditionOne('email = {0}', ['my@email.com']);\n$obj->email = \"myothermail@email.com\";\n$obj->store();\n")),(0,o.kt)("p",null,"Deleting, also a one-liner..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$obj = \\Framelix\\Demo\\Storable\\SimpleDemo::getByConditionOne('email = {0}', ['my@email.com']);\n$obj->delete();\n")))}u.isMDXComponent=!0}}]);