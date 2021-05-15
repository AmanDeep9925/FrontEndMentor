const faqs = document.querySelectorAll(".accordion__question");

faqs.forEach((item) => {
    let curAccordion = item;

    curAccordion.addEventListener("click", (e) => {
        let accorCollapse = curAccordion.nextElementSibling;

        if (!curAccordion.classList.contains("collapsing")) {
            if (!accorCollapse.classList.contains("open")) {
                accorCollapse = openAccordion(accorCollapse);
            } else {
                accorCollapse = closeAccordion(accorCollapse);
            }
            curAccordion.classList.toggle("open");
        }
    });
});

const openAccordion = (accordion) => {
    accordion.style.display = "block";

    let accordionHeight = accordion.clientHeight;

    setTimeout(() => {
        accordion.style.height = accordionHeight + "px";
        accordion.style.display = "";
    }, 1);

    accordion.classList = "accordion__collapse collpasing";

    setTimeout(() => {
        accordion.classList = "accordion__collapse collapse open";
    }, 300);

    return accordion;
};

const closeAccordion = (accordion) => {
    accordion.classList = "accordion__collapse collapse collapsing";

    setTimeout(() => {
        accordion.style.height = "0px";
    }, 1);

    setTimeout(() => {
        accordion.classList = "accordion__collapse collapse";
        accordion.style.height = "";
    }, 300);

    return accordion;
};
