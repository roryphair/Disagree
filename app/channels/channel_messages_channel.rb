class ChannelMessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_messages_#{params[:channelId]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def self.speak(room, message)
    ActionCable.server.broadcast "channel_messages_#{room}", message
  end

end
