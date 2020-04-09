import React from 'react'

class MessagesBody extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const channelId = this.props.match.params.channelId
        this.props.getChannelMessages(channelId);
    }

    render(){
        return (
             <div> How you doing sire?</div>
        )
    }
}
export default MessagesBody;