require 'redmine'

if Rails.version > '6.0'
  require File.expand_path('lib/redmine_base_stimulusjs/hooks.rb', __dir__)
else
  ActiveSupport::Reloader.to_prepare do
    require_dependency 'redmine_base_stimulusjs/hooks'
  end
end

Redmine::Plugin.register :redmine_base_stimulusjs do
  name 'Redmine Base StimulusJS plugin'
  author 'Vincent ROBERT'
  description 'This is a plugin for Redmine'
  version '1.1.2'
  url 'https://github.com/nanego/redmine_base_stimulusjs'
  author_url 'contact@vincent-robert.com'
end
