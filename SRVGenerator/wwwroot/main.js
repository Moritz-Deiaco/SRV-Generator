
window.app =
    {
        getBrowserLanguage: function () {
            return (navigator.languages && navigator.languages.length) ? navigator.languages[0] :
                navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
        },
        copyText: function (text) {
            navigator.clipboard.writeText(text);
        }
    }
    