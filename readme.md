# The War of the Five Kings

<img src="images/game-of-thrones-illustrated-guide-to-houses-and-character-relationships.png" width="600px"/>

## The Exercises

Repetitive and deep intro to the basics of programming JavaScript.

### [Book 1: A Game of Thrones](book1_gameOfThrones/starter/prompt.md)

- variables, object (literals), functions
- loops (`for`, `while`)
- conditionals (`if`-`else`, `switch`)
- l-to-r operators (`||`, `&&`) and assignment

### [Book 2: A Game of Thrones redux, now with:](book2_gameOfThrones/starter/prompt.md)

- callbacks, anonymous functions
- enumerations
- methods

### [Book 3: The Clash of Kings](book3_clashOfKings/starter/prompt.md)

- scope and closures
- pass-by-val, pass-by-ref

### [Book 4: The Storm of Swords](book4_stormOfSwords/starter/prompt.md)

- context
- object constructors, prototyping
- `call`, `apply`, `bind`

### [Book 5: The Dragon Awakes](book5_dragonAwakes/starter/prompt.md)

- application structure, modules and loading (node and browser)
- make an actual game

### [Book 6: The Winds of Winter](book6_windsOfWinter/starter/prompt.md)

- DOM interaction
- event-driven application design

The lessons are stepped, and each leads to some output at the conclusion (and hopefully a feeling of success). Each is focused on creating and using the fundamental structures of JavaScript (functions, objects, arrays, loops/enumerations, and conditionals), and multiple reps of doing each of these things, each time. The lessons build on one another, and prompt the students when they need to remember to use difficult or tricky concepts from previous steps.

At the end, they will have built a complex game with a terminal and a visual HTML/CSS front end.

## The Structure

The exercises can be used in class WHILE teaching the concepts (code-alones), or as a lab; most importantly, they are designed to be automatic and they don't need to be supervised. Thus they can be homework, or even just enrichment to fit any part of the intro to JS.

Each Book is presented in four forms: Node- and browser-based, and tested and not-tested. This way, you can mix and match the lessons with whatever format you want to introduce JS.

Also, **Book 2** is optional, and the rest can be used without it, if you want to avoid introducing ECMAScript5 enumerations. You can also use it with Underscore, if you wish.

Thus the tree (of directories, minus spec directories) for any Book should look like this:

```
.
├── book1_gameOfThrones
│   ├── browserNoTests
│   │   ├── solution
│   │   └── starter
│   ├── browserTested
│   │   ├── solution
│   │   │   └── spec
│   │   └── starter
│   │       └── spec
│   ├── nodeNoTests
│   │   ├── solution
│   │   └── starter
│   └── nodeTested
│       ├── solution
│       └── starter
│           └── spec
...
```

While you copy the starter to the students' directory as such (for a class doing a Jasmine-test-based, browser environment intro to JS):

```
.
└── gameOfThrones
    ├── spec
    │   └── javascripts
    │       ├── helpers
    │       └── support
    │       │   ├── jasmine.yml
    │       │   └── jasmine_helper.rb
    │       └── mainSpec.js
    ├── Rakefile
    └── main.js
```

> Note: the exercises use the Jasmine Ruby Gem and `jasmine init; rake jasmine` for browser-based testing, not the downloadable zip folder from Pivotal...

## Using `rake x`

There is a Rakefile in the base of this exercise banklet with a single task in it: `rake exercise`, aliased to `rake x`. Pass it the book and type of exercise, and it will create a folder in the base that can be copied directly to the student repo (correctly named starter code). Pass it an optional third argument of the directory you want to add it to, and it will build it there!

Example:

```bash
rake x[1] # defaults to browserNoTests
# => 'Exercise directory ./gameOfThrones created! Move it to the student repo as is.'

rake x[2,nodeTested,~/dev/wdi/godot/w6/d03/Classwork]
# => 'Exercise directory ~/dev/wdi/godot/w6/d03/Classwork/gameOfThrones created!'
```

## The Style

Since these exercises are meant to track the intro to JS, their style should represent WDI-NYC's exemplary JS style. If you have issues with the style, please lodge a complaint. We can hash this out, and make sure that we are enforcing good standards across the board, and that our examples and solutions are interchangeable between cohorts!

Some important decisions:

### Naming

- **headless-camel/bactrian case, always!**
- using numbers instead of numeral strings is encouraged where appropriate (`book1` instead of `bookOne`, eg), since this helps for auto-sorting
- using underscores in names is allowed when making a clear seperation between parts of a name, like `::` in Ruby modules, or `:` in plain English... For example:
  - English `Book One: Game of Thrones` becomes JavaScript `book1_gameOfThrones`
- **variables**: all characters allowed in JS variables are acceptable
  - begin variables names with **a**-**z** (lower case English characters) only, unless:
    - (optional) `$` may begin references to DOM elements wrapped in jQuery objects
    - (optional) `__` (2 underscores) may begin references to methods that are not meant to be a part of that object's public interface
- **files**: follow the general naming rules
  - files that hold only a prototype and constructor declaration should be named after the constructor function, `User.js` for example
  - acceptable names for default (or build-task target) JavaScript files loaded are: `main.js`, `application.js`, `app.js`
    - **NEVER** `index.js`!
    - use the same name for the default CSS file: `main.css` & `main.js`, for example
    - when declaring a global module-namespace for an application, use the `application.js` or `app.js` solely for declaring this namespace, not for other setup (like any `onload` callbacks)
    - put those in `main.js`, `onLoad.js`, `onload.js`, or `setup.js`
- **HTML**
  - lower case all tag names!
  - for HTML attributes, `id`s or `class`es, do not use bactrian case, **use dashed-snake case**!
    - for example: `target-input`, or `.large-modal-box`
  - use double-quotes for HTML attribute values

### `var` declarations

- every variable, including global-context variables, should have a `var` declaration
- no use of `let` or newer scope constructs (post ECMAScript3 additions), **except** `const`
- all `var` declarations are made at the top of their **scope** (to avoid hoisting confusions, though that reasoning must be taught instead of demanded!); ***this means function, not block***!
  - multiple declarations are made with the `,` operator: `var a = 1, b = 2, c, d;`; this can be done on multiple lines (each line ending with a `,`) or a single, depending on aesthetics
  - declarations may be made with multiple `var`s only if they need to cover more than one line each (big declarations: arrays of arrays, or large objects, for example)
  - variables used only in a for loop should all be declared in the first section of the loop declaration: for example `for (var i = 0, len = names.length, date, move, decision; i < len; i++) {...}`

### String declarations

- use single-quotes, and escape them where necessary
- did I stutter?
