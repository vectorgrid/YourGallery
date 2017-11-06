(function(){
    "use strict";

    angular.module("YourGallery")
        .factory("yourGalleryData", yourGalleryData);

    yourGalleryData.$inject=["$http", "$q"];

    function yourGalleryData($http, $q){
        var service = {
            User:{
                getUserData: getUserData
            }
        }
        return service;

        function getUserData(){
            return $http.get('../app/dummy-data/userdata.json').then(function(userData){
                        return userData;
                    }, function(err){
                        console.log("exception from data.service.js/getUserData"+ err);
                    });
        }
    }
})()