class App < Sinatra::Base
	get '/hello' do
		# binding.pry
		{foo: 'hello world!'}
	end

	get '/convert_isbn' do
		isbn = params['isbn']
		response = ISBNHelper.convert(isbn)

		if (response.nil?) {
			{ response: response }
		} else {
			{ error: 'invalid ISBN number' }
		}
	end
end