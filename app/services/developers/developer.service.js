//this service will get replaced entirely
//with some magical firebase lib
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DeveloperService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DeveloperService = (function () {
                function DeveloperService() {
                }
                DeveloperService.prototype.getDeveloper = function (id) {
                    var firebaseUrl;
                    var developerRef;
                    var ngDeveloper;
                    firebaseUrl = "https://ngmain.firebaseio.com/developers/" + id;
                    developerRef = new Firebase(firebaseUrl);
                    developerRef.once("value", function (snapshot) {
                        ngDeveloper = snapshot.val();
                        // data === "hello"
                    });
                    return Promise.resolve(ngDeveloper);
                };
                DeveloperService.prototype.getDevelopers = function () {
                    var firebaseUrl;
                    var developersRef;
                    var ngDevelopers = new Array();
                    firebaseUrl = "https://ngmain.firebaseio.com/developers";
                    developersRef = new Firebase(firebaseUrl);
                    developersRef.on("value", function (snapshot) {
                        snapshot.forEach(function (childSnap) {
                            ngDevelopers.push(childSnap.val());
                        });
                    });
                    return Promise.resolve(ngDevelopers);
                };
                DeveloperService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DeveloperService);
                return DeveloperService;
            })();
            exports_1("DeveloperService", DeveloperService);
        }
    }
});
//# sourceMappingURL=developer.service.js.map