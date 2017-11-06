(function(){
    angular
        .module("YourGallery")
        .directive("userToolbar", userToolbar);
    
        userToolbar.$inject = ["directoryuri"];

        function userToolbar(directoryuri){
            return {
                restrict: "E",
                templateUri: "../views/user.toolbar.html",
                controller: "userToolbarController",
                controllerAs: "utcvm",
                bindToController: true
            };
        }

})()