import * as MODEL from "../model/model.js";

function init() {
    let currentHeroImage = "home";

    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";

        $(".hero")
            .removeClass(`${currentHeroImage}-hero-image`)
            .addClass(`${btnId}-hero-image`);
        currentHeroImage = btnId;
        MODEL.getPageContent(contentId);
    })
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
});