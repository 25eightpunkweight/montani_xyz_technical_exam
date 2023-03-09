# encoding: utf-8
require "sinatra/base"
require "yaml"
require "digest/md5"
require "sinatra/activerecord"
require "sinatra/reloader"
require "sinatra/json"
require "config"
require "awesome_print"
require "pry"
require "json"

class App < Sinatra::Base
  set :bind, '0.0.0.0'

  helpers Sinatra::JSON

  configure do 
    enable :cross_origin
  end

  # Register Sinatra Flash
  # register Sinatra::Flash

  # Register Config
  register Config

  # Include Session Cookie Module
  use Rack::Session::Cookie, :secret => "<secret>"

  # Development Specific configs
  configure :development do
    register Sinatra::Reloader
  end

  # Production specific configs
  configure :production do
    YAML.load_file(File.dirname(__FILE__)+'/config/production.yml').each do |k, v|
      set k, v
    end
  end

  # General ENV configuration
  configure do

    # dbconf = YAML.load_file(File.dirname(__FILE__)+'/config/database.yml')
    # set :database, {adapter: dbconf["adapter"]}

    # case dbconf["adapter"]
    #   when "mysql"
    #     dbconf = dbconf[ENV['RACK_ENV']]
    #     DataMapper.setup(:default, "mysql://#{dbconf["username"]}:#{dbconf["password"]}@#{dbconf["host"]}/#{dbconf["database"]}")
    #   when "postgres"
    #     dbconf = dbconf[ENV['RACK_ENV']]
    #     DataMapper.setup(:postgres, "postgres://#{dbconf["username"]}:#{dbconf["password"]}@#{dbconf["host"]}/#{dbconf["database"]}")
    #   when "sqlite3"
    #     DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/db/application.db")
    # end


    # Enable sessions for all ENV's
    enable :sessions

    # Set up our general configs
    set :root          , File.dirname(__FILE__)
    set :public_folder , File.dirname(__FILE__) + '/public'
    set :app_file      , __FILE__
    set :views         , File.dirname(__FILE__) + '/views'
    set :tests         , File.dirname(__FILE__) + '/tests'
    set :dump_errors   , true
    set :logging       , true
    set :raise_errors  , true
    set :default_content_type, 'application/json'

    # Load general configs from the file
    YAML.load_file(File.dirname(__FILE__)+'/config/development.yml').each do |k, v|
      set k, v
    end
  end

  helpers do
    # # Set an error in the flash and redirect
    # def set_error(message, path)
    #   flash[:error] = message
    #   redirect path
    # end

    # # Set a notice in the flash and redirect
    # def set_notice(message, path)
    #   flash[:notice] = message
    #   redirect path
    # end
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:1337'
    content_type :json
  end

  after do
    response.body = JSON.dump(response.body)
  end

  # Log error and redirect
  error do
    logger.error env['sinatra.error'].message # log this to the output
    # redirect to('500.html')
  end

  # Redirect to static 404 page
  # not_found do
  #     {error: 'not found'}
  # end

  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end


end

# Load up all initializers first (NB)
Dir[File.dirname(__FILE__) + "/config/initializers/*.rb"].each do |file|
  require file
end

# Load up all helpers second (NB)
Dir[File.dirname(__FILE__) + "/lib/helpers/*.rb"].each do |file|
  require file
end

# Load up all models next
Dir[File.dirname(__FILE__) + "/lib/models/*.rb"].each do |file|
  require file
end

# Load up all service objects next
Dir[File.dirname(__FILE__) + "/lib/services/*.rb"].each do |file|
  require file
end

# Load up all controllers last
Dir[File.dirname(__FILE__) + "/lib/controllers/*.rb"].each do |file|
  require file
end