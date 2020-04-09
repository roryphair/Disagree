import React from 'react';

class ChannelsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getChannels(this.props.match.params.serverId);
    }

    render(){
        if (this.props.channels.length === 0) return (<div className='text-channels'> loading</div>)
        return(
            <>
            <div className='text-channels'><h2 className='grey'>TEXT CHANNELS</h2> <h2 className='grey'>+</h2></div>
            
            <ul className='channels-names-list'>
                {this.props.channels.map( (channel) => (
                    <li>#{channel.name}</li>
                ) )}
            </ul>
            </>
       )
    }
}
export default ChannelsIndex;