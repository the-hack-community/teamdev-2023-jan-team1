require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SnackReviewRails
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # fakerを日本語化
    Rails.application.config.i18n.default_locale = :ja
    Faker::Config.locale = :ja

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true

    config.session_store :cookie_store, key: '_interslice_session'
    config.middleware.use ActionDispatch::Cookies # Required for all session management
    config.middleware.use ActionDispatch::Session::CookieStore, config.session_options
    config.middleware.use ActionDispatch::Flash
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins ENV.fetch("FRONT_URL")
        resource '*',
                 :headers => :any,
                 :expose => ['access-token', 'expiry', 'token-type', 'uid', 'client'],
                 :methods => [:get, :post, :options, :delete, :put]
      end
    end
  end
end
