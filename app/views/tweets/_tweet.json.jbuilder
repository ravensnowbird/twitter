json.extract! tweet, :id, :body, :retweet_count, :created_at, :updated_at
json.url tweet_url(tweet, format: :json)
