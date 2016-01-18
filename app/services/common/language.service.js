System.register(['./mock-language'], function(exports_1) {
    var mock_language_1;
    var LanguageService;
    return {
        setters:[
            function (mock_language_1_1) {
                mock_language_1 = mock_language_1_1;
            }],
        execute: function() {
            LanguageService = (function () {
                function LanguageService() {
                }
                LanguageService.prototype.getLanguages = function () { return Promise.resolve(mock_language_1.LANGUAGES); };
                LanguageService.prototype.getLanguage = function (id) {
                    return Promise.resolve(mock_language_1.LANGUAGES).then(function (languages) {
                        for (var _i = 0; _i < languages.length; _i++) {
                            var language = languages[_i];
                            if (language.code === id) {
                                return language;
                            }
                        }
                    });
                };
                return LanguageService;
            })();
            exports_1("LanguageService", LanguageService);
        }
    }
});
//# sourceMappingURL=language.service.js.map