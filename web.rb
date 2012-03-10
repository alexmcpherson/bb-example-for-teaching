require 'sinatra'






get '/:key' do
	# Lookup URL by key, and redirect in that direction
	params[:key]
end

post '/url' do
	# save url and pair it with next shortest available key
end

get '/' do
	"URL shortener. Dot com."
	# Show all url's
	# show bookmarklet to shorten URL
end
