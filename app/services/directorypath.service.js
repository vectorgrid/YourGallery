(function(){
    angular
    .module("YourGallery")
    .factory("directoryuri", directoryuri);

    directoryuri.$inject = [];
    function directoryuri(){
        var service = {
            rootpath:"../",
            controllerpath: "../controllers/",
            servicepath: "../services/",
            modulepath: "../modules/",
            directivepath: "../directives/",
            viewpath: "../views/"
        }

        return service;
    }
})()