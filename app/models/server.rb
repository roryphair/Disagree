# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  admin_id   :integer          not null
#  public     :boolean
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord

    validates :name, :admin_id, presence: true
    validates :public, inclusion: { in: [true, false] }

    belongs_to :admin,
    foreign_key: admin_id,
    class: :User



end
