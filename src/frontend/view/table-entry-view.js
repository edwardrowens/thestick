import React from 'react'

import { Tr } from 'reactable'

export default (props) => {
    return (
        <Tr>
            {props.data}
        </Tr>
    )
}