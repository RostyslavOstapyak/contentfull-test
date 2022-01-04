import { Link } from 'gatsby'
import React from 'react'


class RootIndex extends React.Component {
  render() {

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}><div>some index page</div>
        <Link to='/KEK/test-1'>to kek 1</Link>

        <Link to='/KEK/test-2'>to kek 2</Link>

        <Link to='/KEK/test-3'>to kek 3</Link>
      </div >
    )
  }
}

export default RootIndex


