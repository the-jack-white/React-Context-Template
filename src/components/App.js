import React from 'react';
import { Consumer } from './Context'

const App = () => {
    return (
        <Consumer>
            { context => (
                <div>
                    <h1>App State: {context.actions.appStatus()}</h1>
                </div>
            )}
        </Consumer>
    )
}

export default App;