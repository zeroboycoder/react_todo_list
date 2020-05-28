import React, { Component } from 'react'

import Layout from './hoc/Layout/Layout';
import BuildApp from './container/BuildApp/BuildApp';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <BuildApp />
                </Layout>
            </div>
        )
    }
}

export default App;