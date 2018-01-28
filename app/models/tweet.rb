class Tweet < ApplicationRecord
  default_scope { order(retweet_count: :desc).limit(10) }
end
