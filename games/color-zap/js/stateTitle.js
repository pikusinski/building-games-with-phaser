var stateTitle = {
   
   //Loads images, sounds and all other assets
   preload: function () {
      'use strict';
      
      //Loads out logo image to the library
      game.load.image("logo", "images/title/gameLogo.png");
   },
   
   //Set up objects, variables, sounds, texts, everything
   create: function () {
      'use strict';
      
      this.logo = game.add.sprite(game.world.centerX, 180, "logo");
      this.logo.anchor.set(0.5, 0.5);
   },
   
   //Constant running loop.
   update: function () {
      'use strict';
      
   }
};