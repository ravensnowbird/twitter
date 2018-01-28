class Tweet < ApplicationRecord
  default_scope { order(retweet_count: :desc).limit(10) }

  validates :body, length: { maximum: 140 }
end
