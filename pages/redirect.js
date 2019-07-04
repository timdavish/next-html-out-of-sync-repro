import React, {Fragment, useEffect} from 'react'
import redirect from '../helpers/redirect'

export default () => {
  useEffect(() => {
    const id = setTimeout(() => {
      redirect({href: '/'})
    }, 2000)

    return () => clearTimeout(id)
  }, [])

  return <p>Redirecting back to / in 2 seconds..</p>
}
