import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import { Message } from "semantic-ui-react";

class MessageDismissibleBlock extends Component {
    state = { visible: true }

    handleDismiss = () => {
        this.setState({ visible: false})
    }

    render() {
        if (this.state.visible){
            return (
                <Message
                onDismiss={this.handleDismiss}
                header='Welcome!'
                content='Add your To-do list here and we will keep track!'
                />
            )
        }
        return(<p></p>)
    }

}
export default MessageDismissibleBlock