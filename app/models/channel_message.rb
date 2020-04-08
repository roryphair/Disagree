# == Schema Information
#
# Table name: channel_messages
#
#  id         :bigint           not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ChannelMessage < ApplicationRecord

    validates :user_id, :channel_id, :body, presence: true

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
