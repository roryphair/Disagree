# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
    
    validates :name, uniqueness: {scope: :server_id, message: 'A channel with that name already exists on this server'}
    validates :name, :server_id, presence: true

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

    has_many :messages,
    foreign_key: :channel_id,
    class_name: :ChannelMessage,
    dependent: :destroy

end
