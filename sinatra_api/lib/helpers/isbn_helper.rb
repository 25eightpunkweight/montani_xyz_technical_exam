class ISBNHelper
    def self.isValidISBN10? (isbn)
        total = 0
        isbn.split('-').join('').split('').each_with_index do |num, idx|
            total = total + (num.to_i * (10 - idx))
        end

        return total % 11 == 0
    end

    def self.isValidISBN13? (isbn)
        total = 0
        # return unless isbn.start_with?('978-')

        isbn.split('-').join('').split('').each_with_index do |num, idx|
            total = total + (num.to_i * (1 + (idx % 2) + (idx % 2)))
        end

        return total % 10 == 0
    end

    def self.convert (isbn)
        total = 0
        if self.class.isValidISBN10?(isbn)
            isbn = "978-#{isbn[0...-2]}"
            isbn_array = isbn.split('-').join('').split('')
            
            isbn_array.each_with_index do |num, idx|
                total = total + (num.to_i * (1 + (idx % 2) + (idx % 2)))
            end
            
            last_digit = 10 - (total % 10)
            
            return [isbn, last_digit].join('-')
        elsif self.class.isValidISBN13?(isbn)
            isbn = isbn[4...isbn.length-2]
            isbn_array = isbn.split('-').join('').split('')

            isbn_array.each_with_index do |num, idx|
                total = total + (num.to_i * (10 - idx))
            end

            total_mod = 11 - (total % 11)
            last_digit = (total_mod == 10) ? 'X' : total_mod
            
            return [isbn, last_digit].join('-')
        else
            return nil
        end
    end
end