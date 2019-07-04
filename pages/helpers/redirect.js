import Router from 'next/router'

export default ({res = undefined, href, as = href}) => {
  if (typeof as !== 'string') throw new Error('Expected as to be a string.')

  if (res) {
    // Server side
    res.writeHead(302, {Location: as})
    res.end()
  } else {
    // Client side
    Router.push(href, as)
  }
}
