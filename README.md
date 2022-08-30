# React and Sinatra Boilerplate

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

This dockerfile uses a latest image of ruby, and a separate container for the postgresql db. Here are some commands to get you started:

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

