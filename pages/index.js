import React, {Fragment} from 'react'
import redirect from '../helpers/redirect'

const Something = ({area, color}) => {
  // Don't SSR red
  if (!process.browser && color === 'red') return null

  return (
  <Fragment>
    <div className='something'>
      <span className={`text-${area}`}>{area}</span>
    </div>

    <style jsx>{`
        .something {
          grid-area: ${area};
          width: 20px;
          height: 20px;
          background-color: ${color};
          display: grid;
          align-items: center;
          justify-content: center;
        }

        .text-1 {
          color: white;
        }

        .text-2 {
          color: black;
        }

        .text-3 {
          color: orange;
        }
      `}</style>
  </Fragment>
  )
}

export default () => {
  const goForARide = () => {
    redirect({href: '/redirect'})
  }

  return (
    <div className='root'>
      <div className='test'>
        <Something area='1' color='green'/>
        <Something area='2' color='red'/>
        <Something area='3' color='green'/>
      </div>

      <p>Refreshing this page will show the unexpected behavior during a server-side render.</p>
      <p>Clicking this button will redirect to /redirect, which redirects back to this page after mount, showing the expected layout on a client-side render.</p>
      <button onClick={goForARide}>Go for a ride..</button>

      <p>You can also manually navigate to `localhost:3000/redirect` in your browser.</p>

      <style jsx>{`
      .test {
        width: 100px;
        height: 100px;
        background-color: blue;

        display: grid;
        grid-template-areas: '1 2 3';
        align-items: center;
        justify-content: center;
      }
    `}</style>
    </div>
  )
}
