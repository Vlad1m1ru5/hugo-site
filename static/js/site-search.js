(function (window) {

    function start() {

        const $siteSearchTitleInput = document.getElementsByClassName("site-search__title-input")[0];
        const $siteSearchResults = document.getElementsByClassName("site-search__results")[0];

        $siteSearchResults.classList.add("hidden");

        $siteSearchTitleInput.addEventListener("input", function (event) {

            if (
                event.currentTarget.value &&
                $siteSearchResults.classList.contains("hidden")
            ) {

                $siteSearchResults.classList.remove("hidden");

            }

        });

        $siteSearchTitleInput.addEventListener("blur", function () {

            $siteSearchResults.classList.add("hidden");

        });

    };

    window.addEventListener("load", start);

})(window);
