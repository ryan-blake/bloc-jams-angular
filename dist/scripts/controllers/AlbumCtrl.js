var albumOne = albumPicasso;

function() {
    function CollectionCtrl() {
         this.albums = [];
      for (var i=0; i < 12; i++) {
         this.title.push(angular.copy(albumPicasso));
      }
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
