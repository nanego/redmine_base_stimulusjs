Redmine base_stimulusjs plugin
======================

> **⚠️ DEPRECATION NOTICE**
> This plugin is **no longer needed for Redmine 6.1 and later versions**.
> Starting with Redmine 6.1, Stimulus is included in the core application.
> Only use this plugin if you are running Redmine 6.0 or earlier.


This plugin adds the StimulusJS framework to your Redmine application, so it can easily be used by other plugins

Installation
------------

This plugin has been tested with Redmine 3.4+.

Please apply general instructions for plugins [here](http://www.redmine.org/wiki/redmine/Plugins).

Download the source or clone the plugin and put it in the "plugins/" directory of your redmine instance. Note that this is crucial that the directory is named redmine_base_stimulusjs!
Finally, restart your Redmine instance.

Hello world example
-----------------------------

Html markup

    <h1>Hello, Stimulus</h1>
    <div data-controller="hello">
      <input data-target="hello.name" type="text">
      <button data-action="click->hello#greet">Greet</button>
      <br>
      <input data-target="hello.output" type="text" readonly>
    </div>

JS Controller

    (function() {
      stimulus_application.register("hello", class extends Stimulus.Controller {
      
        static targets = [ "name", "output" ]
        
        greet() {
          const greeting = "Hello, " + this.nameTarget.value
          this.outputTarget.value = greeting
        }

      })
    })();

This plugin provides the <code>window.stimulus_application</code> global variable which make it easy to register new controllers.

Contributing
------------

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


License
-------

This project is released under the MIT license, see LICENSE file.
