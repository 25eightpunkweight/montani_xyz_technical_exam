class App < Sinatra::Base
	get '/hello' do
		{foo: 'hello world!'}
	end

	get '/convert_isbn' do
		isbn = params["isbn"]
		converted_isbn = ISBNHelper.convert(isbn)

		!converted_isbn.nil? ? { response: JSON.parse(converted_isbn.to_json) } : 422
	end

	get '/book' do
		isbn = params["isbn"]
		if ISBNHelper.isValidISBN10?(isbn)
			converted_isbn = ISBNHelper.convert(isbn)
			query_string = converted_isbn.gsub(/[^[[:alnum:]]]/, '')
			book = Book.where("regexp_replace(isbn_13, '[^A-Za-z0-9]', '', 'g') = '#{query_string}'")
		elsif ISBNHelper.isValidISBN13?(isbn)
			book = Book.find_by(isbn_13: isbn)
		else
			400
		end

		if book
			{ book: JSON.parse( 
				book.to_json(
					include: {
						authors: {only: [:first_name, :middle_name, :last_name]}
					}
				)
			  ).merge({publisher: book.publisher.name})
			}
		else
			404
		end
	end
end