import React, { Component } from 'react';

const DashboardContext = React.createContext();

export class Provider extends Component {

    state = {
        appIsWorking: true
    }

    appStatus = () => {
        if (this.state.appIsWorking) {
            return(
                <div>
                    <h1>Working</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <DashboardContext.Provider value={{
                actions: {
                    appStatus: this.appStatus
                }
            }}>
                {this.props.children}
            </DashboardContext.Provider>
        )
    }
}

export const Consumer = DashboardContext.Consumer;