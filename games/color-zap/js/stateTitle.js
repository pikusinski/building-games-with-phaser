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
      
      this.logo = game.add.sprite(0, 0, "logo");
   },
   
   //Constant running loop.
   update: function () {
      'use strict';
      
   }
};