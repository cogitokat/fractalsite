define([
        'backbone_tastypie',
        'app'
], function(Backbone, app) {
    'use strict';

    // Fractal Image Model
    // ----------

    app.FractalMod = Backbone.Model.extend({
        
        urlRoot: '../create',

        // Default attributes for the fractal
        defaults: {
            author : "",
            pubDate : "",
            fractalImg : "",
            title : "",
            rawFractal : "", 
            useHeat : true,
            
        }, 
       
    });
    
    app.CurrentFilter = 0;
    return new app.FractalMod();
});
