# scale-factory

Returns a variety of musical scales as arrays of values (as frequency in Hertz or cents for use as a detune) for use in the Web Audio Javascript API and other Javascript-based audio environments.

This is very much work in progress. When it is complete, it will be available to install as an NPM or Bower dependency.

## Installation

To be completed...

## Basic useage

To be completed...

## Methods

### getScale(scaleType, startNote, noteCount)

Insert description, including return value...

#### Arguments
`scaleType` description 
`startNote` description
`noteCount` description

To be completed...

### getNoteByName(noteString)

To be completed...

### TODO: addScaleType(intervalsArray)

To be completed...

## Development

### Dependencies

* [grunt](http://gruntjs.com/)
* [node](https://nodejs.org/)

Source files live in `src/`

Mocha unit tests live in `test/`

### Set up

```bash
$ npm install
```

### Running the grunt tasks

```bash
#linting and unit tests
$ grunt
```

*See `gruntfile.js` for more details of the grunt tasks*

## Release History:

### 0.0.1
* Initial commit; grunt, jshint & mocha tests hooked up

### 0.0.2
* getScale() now returns result in hertz, semitones and cents; refactored tests and added additional tests for semitones & hertz; removed test scale & note references into a separate module
