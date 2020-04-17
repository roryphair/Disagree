# Welcome to Disagree - A Discord Clone

***

[Visit Disagree!](https://disagree-app.herokuapp.com/#/)

Disagree is a clone of the populate live-chat app Discord. In Disagree, you can join a Server and chat with many other users at the same time. You can also direct message individual users. 

![disagreee](https://user-images.githubusercontent.com/59512990/79588274-ac7a2f00-80a1-11ea-9286-be3197dab542.jpg)
***

## Technologies

Disagree was built with Ruby on Rails and POSTGRESQL for the backend, and React, Redux, HTML , and CSS for the front end.

***

## Features

### Live Chat

Users can live chat on a channel of a server or through direct messages. This requires users to subscribe to Action Cable channel.
Because of the limitations and relative importance of each websocket, a user is unsubscribed from a channel everytime they attempt to make a new connect. The Channel handles creating, updating and deleting of messages, so the response from the channel contains an action property that instructs which redux action to dispatch.
`
let sub;
function subscribeToMessages (channelId, dispatch){
    if(sub) sub = sub.unsubscribe();
    sub = App.cable.subscriptions.create( 
        {channel: 'MessagesChannel', channelId: channelId},
        {received:  message => message.action === 'delete' ? dispatch(removeMessage(message)) : dispatch(receiveMessage(message))}
    );
}
`

The Home component handles subsciptions and a check is made every time the user arrives at a new web address to see if a new subscription should be made. This is used for both channel messages and for direct messages. This allows the system to be modular and work the same for direct messages and for channel messages.

`
componentDidUpdate(prevProps){
     if(this.props.match.params.channelId && (prevProps.match.params.channelId !== this.props.match.params.channelId)) {
         this.props.getMessages(this.props.match.params.channelId);
          this.props.subscribeToChannelMessages(this.props.channelId);
     }
}  
`
In order to develop unique channelid's for the Action Channel for both DM's and Channel messages, the Home container checks if the server address is the direct message index and then develops a unique id for the channels to accomplish two things, 1) to not accidently override a channel message channel, 2) so two users have the same id despite the messaging system being based on the id of the author.
`
channelId = ownProps.match.params.channelId;
if (ownProps.match.params.serverId === '@me'){
  [id1, id2] = [ownProps.match.params.channelId, state.entities.users[state.session.id].id];
  channelId = id1 < id2 ? `dm${id1}-${id2}` : `dm${id1}-${id2}`;
}
`


***

## Future Plans
* Integrate Aws so users can upload invidual server and user icons
* Integrate giphy api so users can post gifs in chat
* Add more custom roles and the ability for an admin to promote and demote users
* Add feature so user is alerted when a channel has a new posting or a new direct message is received.
