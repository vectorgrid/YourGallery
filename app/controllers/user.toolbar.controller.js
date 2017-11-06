(function(){
    angular
        .module("YourGallery")
        .controller("userToolbarController", userToolbarController);

    userToolbarController.$inject = ["directoryuri"];
    function userToolbarController(directoryuri){
        var utcvm = this;
        utcvm.title = "Title";

    }
})();