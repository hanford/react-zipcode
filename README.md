# react-zipcode

> ZIP input component for react

* Validates inputs using [zippo](https://github.com/bendrucker/zippo)
* Strips non-numeric characters
* Limits to 5 characters
* Triggers the [large numeric keypad](https://github.com/bendrucker/numeric-pattern) on mobile


## Install

```
$ npm install --save react-zipcode
```


## Usage

```js
import Zip from 'react-zipcode'

..

render () {
  <Zip onValue={(value) => console.log(`validated zip code: ${value}`)}
}
```

## License

MIT © [Jack Hanford](http://jackhanford.com)
