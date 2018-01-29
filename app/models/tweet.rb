class Tweet < ApplicationRecord

  default_scope { order(retweet_count: sort_order).limit(10) }

  validates :body, length: { maximum: 140 }

  def self.sort_order
    if Rails.env.production?
      :asc
    else
      :desc
    end
  end
end
