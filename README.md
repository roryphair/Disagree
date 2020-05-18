# Welcome to Disagree - A Discord Clone

***

[Visit Disagree!](https://disagree-app.herokuapp.com/#/)

Disagree is a clone of the populare live-chat app Discord. In Disagree, you can join a Server and chat with many other users at the same time. You can also direct message individual users.


![disagreee](https://user-images.githubusercontent.com/59512990/79588274-ac7a2f00-80a1-11ea-9286-be3197dab542.jpg)


***

## Technologies

- Ruby on Rails for Backend
- PostgreSQL for Database
- Javascript with React-Redux for frontend
- HTML and CSS

***

## Features

- Create and Delete servers
- Join and Leave other's servers
- Create/Update/Destroy Channels on a server.
- Live Chat with multiple users on a Channel
- Direct live chat with individual Users
- Both Direct Messages and Channel Messages can be updated and deleted with changes being broadcasted live.

### Live Chat

Users can live chat on a channel of a server or through direct messages. This requires users to subscribe to a Action Cable channel.
Because of the limitations and relative importance of each websocket, a user is unsubscribed from a channel everytime they attempt to make a new connection. The Channel handles CRUD of messages, so the response from the channel contains an action property that instructs which redux action to dispatch, either removeMessage or receiveMessage. The receiveMessage method is built to either add a new message or update a pre-existing message.

```javascript
let sub;
function subscribeToMessages (channelId, dispatch){
    if(sub) sub = sub.unsubscribe();
    sub = App.cable.subscriptions.create(
        {channel: 'MessagesChannel', channelId: channelId},
        {received:  message => message.action === 'delete' ? dispatch(removeMessage(message)) : dispatch(receiveMessage(message))}
        );
}
```

The Home component handles subsciptions and a check is made every time the user arrives at a new web address to see if a new subscription should be made. This is used for both channel messages and for direct messages. This allows the system to be modular and work the same for direct messages and for channel messages.

```javascript
componentDidUpdate(prevProps){
    if(this.props.match.params.channelId && (prevProps.match.params.channelId !== this.props.match.params.channelId)) {
    this.props.getMessages(this.props.match.params.channelId);
    this.props.subscribeToChannelMessages(this.props.channelId);
    }
}
```

In order to develop unique channelid's for the Action Channel for both DM's and Channel messages, the Home container checks if the server address is the direct message index and then develops a unique id for the channels to accomplish two things, 1) to not accidently override a channel message channel, 2) so two users have the same id despite the messaging system being based on the id of the author.

```javascript
channelId = ownProps.match.params.channelId;
if (ownProps.match.params.serverId === '@me'){
  [id1, id2] = [ownProps.match.params.channelId, state.entities.users[state.session.id].id];
  channelId = id1 < id2 ? `dm${id1}-${id2}` : `dm${id1}-${id2}`;
}
```

***

## Future Plans
* Integrate AWS so users can upload individual server and user icons
* Integrate giphy api so users can post gifs in chat
* Add more custom roles and the ability for an admin to promote and demote users
* Add feature so user is alerted when a channel has a new posting or a new direct message is received.
