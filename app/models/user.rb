# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :string
#
class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 6}
    after_initialize :ensure_session_token!
    attr_reader :password

    has_many :owned_servers,
    foreign_key: :admin_id,
    class_name: :Server

    has_many :servers_users,
    foreign_key: :user_id,
    class_name: :ServerUser,
    dependent: :destroy

    has_many :servers,
    through: :servers_users,
    source: :servers
    
    has_many :channel_posts,
    foreign_key: :user_id,
    class_name: :ChannelMessage,
    dependent: :destroy

    has_many :dms_authored,
    foreign_key: :author_id,
    class_name: :DirectMessage,
    dependent: :destroy

    has_many :dms_received,
    foreign_key: :receiver_id,
    class_name: :DirectMessage,
    dependent: :destroy

    has_many :messaged_users,
    through: :dms_authored,
    source: :receiver
    
    has_many :received_users,
    through: :dms_received,
    source: :author


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token!
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

end
