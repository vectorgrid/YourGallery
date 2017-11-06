(function(){
  
    'use strict';
    angular.module('YourGallery')
           .factory("userService", userService);
    
    userService.$inject = ["$q", "yourGalleryData", "directoryuri"];
    function userService($q, yourGalleryData, directoryuri){
        var service = {
            userModel: {
                _uid: "",
                _name: "",
                _email: "",
                _dob: "",
                _bio: "",
                _uploadedImgLinks:[]
            },
            getUserModel: getUserModel
        };
    
        return service;   
     function getUserModel(){
            return yourGalleryData.User.getUserData().then(function(userData){
                        for(var key in userData.data){
                            service.userModel[key] = userData.data[key];
                        }
                        return $q.when();
                    },function(e){
                        $q.reject("Failed to load data");
                        console.log(e);
                    });
        }
    
    }
})()
