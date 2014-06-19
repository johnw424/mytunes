// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', function(){
      this.remove(this.at(0));
      this.playFirst();
    }, this);
  },

  playFirst: function(){
    console.dir(this.at(0).play);
    this.at(0).play();
  }

  // dequeue: function(){
  //   this.at(0).on('ended', function(){
  //     this.remove(this.at(0));
  //   }, this);
  // }

});
