import React, { Component } from 'react'
import zip from 'zippo'

export default class ZipCode extends Component {
  constructor () {
    super()

    this.state = {
      code: ''
    }

    this.format = this.format.bind(this)
  }

  format (event) {
    let { value } = event.target

    this.setState({
      code: zip.parse(value)
    })

    if (zip.validate(value) && this.props && this.props.onValue) {
      this.props.onValue(value)
    }
  }

  render () {
    const { code } = this.state

    return (
      <input type='text' pattern='[0-9]*' value={code} onChange={this.format} />
    )
  }
}
