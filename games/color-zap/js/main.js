//Global everything basically
var game;

window.onload = function() {
   
   //Not mobile
   if(screen.width > 1500){

      game = new Phaser.Game(480, //Width
                             640, //Height 
                             Phaser.AUTO, //WebGL or Canvas. If auto, tries to go for webGL first, then canvas 
                             "ph_game"); //Game div
   }
   
   //Mobile
   else{

      game = new Phaser.Game(Window.innerHeight,
                             Window.innerHeight,
                             Phaser.AUTO, "ph_game");
   }
   
   //A state is like a level/stage
   game.state.add("StateMain", stateMain);
   game.state.add("StateTitle", stateTitle);
   game.state.start("StateTitle");
}