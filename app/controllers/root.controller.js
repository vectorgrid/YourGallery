/// <reference path="../dist/_all.js" />
(function(){
    
    angular
        .module("YourGallery")
        .controller("rootController", rootController);

    rootController.$inject = ["userService"];
    function rootController(userService){
        var rvm = this;
        activate();
        function activate(){
            rvm.user = {};
            userService.getUserModel().then(function(){
                angular.copy(userService.userModel, rvm.user);
                console.log("Logged successfully", userService.userModel);
            });
        }
        
    }
})();