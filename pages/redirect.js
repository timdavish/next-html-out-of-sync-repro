import React, {Fragment} from 'react'
import Page from '../components/page'
import redirect from './helpers/redirect'

export default class extends Page {
  componentDidMount() {
    redirect({href: '/'})
  }

  render() {
    return null
  }
}
