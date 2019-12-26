import React from "react";
import {Alert} from "reactstrap"

class ValidationError extends React.Component{
    render() {
        if (!this.props.message) return "";
        else return (
                <Alert className="mt-3" color="danger">
                    {this.props.message}
                </Alert>
            );
    }
}

export default ValidationError;