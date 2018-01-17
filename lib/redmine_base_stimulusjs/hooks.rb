module RedmineBaseStimulusJS
  class Hooks < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context)
      tags = javascript_include_tag("stimulusjs-0.9.0.js", :plugin => "redmine_base_stimulusjs")
      tags += javascript_tag("var stimulus_application;(function() {stimulus_application = Stimulus.Application.start();})()")
      tags += javascript_include_tag("helper_functions.js", :plugin => "redmine_base_stimulusjs")
    end
  end
end
