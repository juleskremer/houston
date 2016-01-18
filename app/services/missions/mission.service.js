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
    var MissionsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MissionsService = (function () {
                function MissionsService() {
                }
                MissionsService.prototype.getMission = function (id) {
                    var firebaseUrl;
                    var missionRef;
                    var ngMission;
                    firebaseUrl = "https://ngmain.firebaseio.com/missions/" + id;
                    missionRef = new Firebase(firebaseUrl);
                    missionRef.once("value", function (snapshot) {
                        ngMission = snapshot.val();
                        // data === "hello"
                    });
                    return Promise.resolve(ngMission);
                };
                MissionsService.prototype.getMissions = function () {
                    var firebaseUrl;
                    var missionsRef;
                    var ngMissions = new Array();
                    firebaseUrl = "https://ngmain.firebaseio.com/missions";
                    missionsRef = new Firebase(firebaseUrl);
                    missionsRef.on("value", function (snapshot) {
                        snapshot.forEach(function (childSnap) {
                            ngMissions.push(childSnap.val());
                        });
                    });
                    return Promise.resolve(ngMissions);
                };
                MissionsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MissionsService);
                return MissionsService;
            })();
            exports_1("MissionsService", MissionsService);
        }
    }
});
//# sourceMappingURL=mission.service.js.map