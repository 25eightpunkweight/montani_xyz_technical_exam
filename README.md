# React and Sinatra Boilerplate

## Montani International

Hello, this is my submission of the coding challenge for applying as a full-stack developer at Montani International Inc. . This repository comes with a docker-compose.yml to save the hassle of getting correct versions of ruby/node/postgresql. Before proceeding, please go over to the **Installation - Docker** under the **Sinatra Model-Controller API** section to build the containers.

Once you have the containers built and running, please run the following command to seed the database:

```
docker exec montani_xyz_technical_exam-sinatra-api-1 bundle exec rake db:create db:migrate db:seed
```

from here, the frontend app is accessible via `http://localhost:1337`, and the backend API is accessible via `http://localhost:55755`.

the following two subsections are notes for the test requirements:

### Front End
  - At the frontend app, the search bar at the top accepts any valid ISBN-10 or ISBN-13 as an input, and is submitted by hitting Enter.
  - At the Book view page, I am only using some other book cover given at the assets as a placeholder.
  - ISBN-related methods at the frontend are located at `react_app/src/helpers/ISBNHelpers.js`: 
    - `isValidISBN10(isbn)` and `isValidISBN13(isbn)` are helper functions that return true/false if the given `isbn` string argument is a valid ISBN-10/13
    - `isbnConvert(isbn)` is a helper function that accepts an ISBN string, checks for whether it is a valid ISBN-10 or ISBN-13 (returns `"input is not a valid ISBN"` otherwise), and then converts the ISBN to its counterpart. Entering a valid ISBN-10 will return a valid ISBN-13, and entering a valid ISBN-13 will return a valid ISBN-10.

### Back End
  - For the backend I am using Sinatra API. Lightweight enough just for prototyping.
  - Using Sinatra and ActiveRecord, I've created a schema that matches the following models, attributes, and associations given. You can find the database schema at `sinatra_api/db/schema.rb`, and the model associations at `sinatra_api/lib/models/`.
  - The mock data you have provided for this exercise are seeded (via `db:seed` using ActiveRecord) on the first time of building the containers. The seed file and its ActiveRecord statements are in `sinatra_api/db/seeds.rb`.
  - ISBN-related endpoints are located at `sinatra_api/lib/controllers/default.rb`:
    - `http://localhost:55755/book` accepts an ISBN-13 as a param, and returns a json of the Book, along with the un-nested attribute of the Book's publisher. It returns an error 404 if the Book is not found, and returns an error 400 if the ISBN-13 is invalid.
    - `http://localhost:55755/convert_isbn` accepts any valid ISBN-13 or ISBN-10, and it responds with a JSON of its corresponding ISBN-13 or ISBN-10.
  - ISBN-related functions are in `sinatra_api/lib/helpers/isbn_helper.rb`:  
    - `self.isValidISBN10(isbn)` and `self.isValidISBN13(isbn)` are helper functions that return true/false if the given `isbn` string argument is a valid ISBN-10/13
    - `self.isbnConvert(isbn)` is a helper function that accepts an ISBN string, checks for whether it is a valid ISBN-10 or ISBN-13 (returns `nil` otherwise), and then converts the ISBN to its corresponding ISBN counterpart. Entering a valid ISBN-10 will return a valid ISBN-13, and entering a valid ISBN-13 will return a valid ISBN-10.

## Sinatra Model-Controller API

Forked from [Wixel's Frank-Sinatra boilerplate](https://github.com/Wixel/Frank-Sinatra) with bunch of adjustments to make it work as a barebones model & controller API that's meant to be paired with a different frontend app of your choice. (Frontend app not included)

You should read Wixel's README from the source repo first before continuing with this repo's README to give you more context.

### Installation - Requirements

Aside from Wixel's original requirements of [Ruby](http://www.ruby-lang.org/), [Rubygems](http://rubygems.org/), [Git](http://git-scm.com/), and [Bundler](http://rubygems.org/gems/bundler), you will need:
  * [PostgreSQL 14.4 or newer](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart) (instead of SQLite3 from the original)


#### Installation - Docker

Alternatively, this repo comes with a Dockerfile and a docker-compose.yml. You will need:
  * [Docker 20.10.17 or newer](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
  * [docker-compose 1.27.4 or newer](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

This docker-compose.yml uses a latest image of ruby, a create-react-app container, and a separate container for the postgresql db. Here are some commands to get you started:

  * `docker-compose up` starts the sinatra-api and postgres containers (and any other containers you have specified in your `docker-compose.yml` file)
  * `docker-compose up --build` rebuilds the containers first before starting it.
  * `docker-compose up --detach` Detached mode: Run containers in the background, print new container names. Incompatible with `--abort-on-container-exit`.
  * `docker-compose build` just builds the containers.
  * `docker-compose build --no-cache` builds the containers from scratch.
  * `docker-compose down` stops your containers.
  * when you have containers up, `docker ps` shows your currently up containers.
  * if you want to access a container's STDOUT, open a separate terminal and enter `docker attach <container name>`
  * if you want to ssh into a container, you can use `docker exec -it <container name> /bin/bash -l`

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

