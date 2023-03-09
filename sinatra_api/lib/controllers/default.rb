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
		if ISBNHelper.isValidISBN13?(isbn)
			query_string = isbn.gsub(/[^[[:alnum:]]]/, '')
		elsif ISBNHelper.isValidISBN10?(isbn)
			converted_isbn = ISBNHelper.convert(isbn)
			query_string = converted_isbn.gsub(/[^[[:alnum:]]]/, '')
		else
			400
		end

		book = Book.where("regexp_replace(isbn_13, '[^A-Za-z0-9]', '', 'g') = '#{query_string}'").first

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