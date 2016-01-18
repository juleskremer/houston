System.register(['./mock-countries'], function(exports_1) {
    var mock_countries_1;
    var CountryService;
    return {
        setters:[
            function (mock_countries_1_1) {
                mock_countries_1 = mock_countries_1_1;
            }],
        execute: function() {
            CountryService = (function () {
                function CountryService() {
                }
                CountryService.prototype.getCountries = function () { return Promise.resolve(mock_countries_1.COUNTRIES); };
                CountryService.prototype.getCountry = function (id) {
                    return Promise.resolve(mock_countries_1.COUNTRIES).then(function (countries) {
                        for (var _i = 0; _i < countries.length; _i++) {
                            var country = countries[_i];
                            if (country.code === id) {
                                return country;
                            }
                        }
                    });
                };
                return CountryService;
            })();
            exports_1("CountryService", CountryService);
        }
    }
});
//# sourceMappingURL=country.service.js.map