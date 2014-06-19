// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.remove(this.at(0));
      if(this.length){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      console.log(song);
      this.remove(song);

    }, this);

  },

  playFirst: function(){
    this.at(0).play();
  },

});
