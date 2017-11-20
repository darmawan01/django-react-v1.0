import React from 'react'
import SideMenu from './Menu'
import NavBar from './Navbar'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <SideMenu />
            </div>
        )
    }
}

export default IndexPage;
