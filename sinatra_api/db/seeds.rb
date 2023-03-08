# authors

authors = [
    {
        first_name: 'Joel',
        middle_name: nil,
        last_name: 'Hartse'
    },
    {
        first_name: 'Hannah',
        middle_name: 'P.',
        last_name: 'Templer'
    },
    {
        first_name: 'Marguerite',
        middle_name: 'Z.',
        last_name: 'Duras'
    },
    {
        first_name: 'Kingsley',
        middle_name: nil,
        last_name: 'Amis'
    },
    {
        first_name: 'Fannie',
        middle_name: 'Peters',
        last_name: 'Flagg'
    },
    {
        first_name: 'Camille',
        middle_name: 'Byron',
        last_name: 'Paglia'
    },
    {
        first_name: 'Rainer',
        middle_name: 'Steel',
        last_name: 'Rilke'
    }
]
Author.create(authors)

# books

books = [
    {
        title: 'American Elf',
        authors: [
            Author.where(first_name: 'Joel', last_name: 'Hartse').take!,
            Author.where(first_name: 'Hannah', middle_name: 'P.', last_name: 'Templer').take!,
            Author.where(first_name: 'Marguerite', middle_name: 'Z.', last_name: 'Duras').take!
        ],
        isbn_13: '978-1-891830-85-3',
        year_published: '2004',
        edition: 'Book 2',
        price: '1000'
    },
    {
        title: 'Cosmoknights',
        authors: [
            Author.where(first_name: 'Kingsley', last_name: 'Amis').take!
        ],
        isbn_13: '978-1-60309-454-2',
        year_published: '2019',
        edition: 'Book 1',
        price: '2000'
    },    
    {
        title: 'Essex County',
        authors: [
            Author.where(first_name: 'Kingsley', last_name: 'Amis').take!
        ],
        isbn_13: '978-1-60309-038-4',
        year_published: '1990',
        edition: '',
        price: '500'
    },    
    {
        title: 'Hey, Mister (Vol 1)',
        authors: [
            Author.where(first_name: 'Hannah', middle_name: 'P.', last_name: 'Templer').take!,
            Author.where(first_name: 'Fannie', middle_name: 'Peters', last_name: 'Flagg').take!,
            Author.where(first_name: 'Camille', middle_name: 'Byron', last_name: 'Paglia').take!
            
        ],
        isbn_13: '978-1-891830-02-0',
        year_published: '2000',
        edition: 'After School Special',
        price: '1200'
    },    
    {
        title: 'The Underwater Welder',
        authors: [
            Author.where(first_name: 'Rainer', middle_name: 'Steel', last_name: 'Rilke').take!  
        ],
        isbn_13: '978-1-60309-398-9',
        year_published: '2022',
        edition: 'Book 2',
        price: '1000'
    },
]

Book.create(books)

# publishers

publishers = [
    {
        name: 'Paste Magazine',
        books: [
            Book.find_by(title: 'American Elf')
        ]
    },
    {
        name: 'Publishers Weekly',
        books: [
            Book.find_by(title: 'Cosmoknights')
        ]
    },
    {
        name: 'Graywolf Press',
        books: [
            Book.find_by(title: 'Essex County'),
            Book.find_by(title: 'Hey, Mister (Vol 1)')
        ]
    },
    {
        name: 'McSweeney\'s',
        books: [
            Book.find_by(title: 'The Underwater Welder')
        ]
    }
]
Publisher.create(publishers)