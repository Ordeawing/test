(() => {
    window.addEventListener('load', () => {
        console.log("Hello !");
        if (window.location.href.includes("details?")) {
            let parentCollection = document.getElementsByClassName('parentNameLast')
            let childCollection = document.getElementsByClassName('parentName')

            parentCollection.forEach(item => {
                let text = item.innerText;
                let html = item.innerHTML;
                if (text == "Toy Story") {
                    item.innerHTML = `${html} | <span style="color:red"> Va bientôt quitter le catalogue !</span>`;
                }
            });

            childCollection.forEach(item => {
                let text = item.innerText;
                let html = item.innerHTML;
                if (text == "Toy Story") {
                    item.innerHTML = `${html} | <span style="color:red"> Va bientôt quitter le catalogue !</span>`;
                }
            });
        }
    });
})();