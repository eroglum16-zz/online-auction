import NavigationBar from './NavigationBar';
import React from "react";

class Layout extends React.Component{
    render() {
        return (
            <div style={{backgroundColor:'whitesmoke', paddingBottom:'30px'}}>
                <NavigationBar page={this.props.page} />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;