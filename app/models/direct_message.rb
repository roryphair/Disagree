# == Schema Information
#
# Table name: direct_messages
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  author_id   :integer          not null
#  receiver_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class DirectMessage < ApplicationRecord
    
   validates :body, :author_id, :receiver_id, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :receiver,
    foreign_key: :receiver_id,
    class_name: :User

end
