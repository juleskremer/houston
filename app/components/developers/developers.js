System.register(['angular2/core', '../../services/developers/developer.service', 'angular2/router', './developers-listing', './developer-detail', './developer-edit'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, developer_service_1, router_1, developers_listing_1, developer_detail_1, developer_edit_1;
    var DevelopersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (developer_service_1_1) {
                developer_service_1 = developer_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (developers_listing_1_1) {
                developers_listing_1 = developers_listing_1_1;
            },
            function (developer_detail_1_1) {
                developer_detail_1 = developer_detail_1_1;
            },
            function (developer_edit_1_1) {
                developer_edit_1 = developer_edit_1_1;
            }],
        execute: function() {
            DevelopersComponent = (function () {
                function DevelopersComponent() {
                }
                DevelopersComponent = __decorate([
                    core_1.Component({
                        template: "\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.RouterOutlet],
                        providers: [developer_service_1.DeveloperService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'DevelopersListing', component: developers_listing_1.DevelopersListingComponent, useAsDefault: true },
                        { path: '/:id', name: 'DeveloperDetail', component: developer_detail_1.DeveloperDetailComponent },
                        { path: '/developer-detail/:id', name: 'DeveloperEdit', component: developer_edit_1.DeveloperEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], DevelopersComponent);
                return DevelopersComponent;
            })();
            exports_1("DevelopersComponent", DevelopersComponent);
        }
    }
});
//# sourceMappingURL=developers.js.map