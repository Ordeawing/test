(() => {
    window.addEventListener('DOMContentLoaded', () => {
        console.log(window.location.href);
        let toDelete = "Toy Story";
        if (window.location.href.includes("details?")) {
            let parentCollection = Array.from(document.getElementsByClassName('parentNameLast'));
            let childCollection = Array.from(document.getElementsByClassName('parentName'));

            console.log(parentCollection);
            console.log(childCollection);

            parentCollection.forEach(item => {
                let text = item.innerText;
                let html = item.innerHTML;
                if (text == toDelete) {
                    item.innerHTML = `${html} | <span style="color:red"> Va bientôt quitter le catalogue !</span>`;
                }
            });

            childCollection.forEach(item => {
                let text = item.innerText;
                let html = item.innerHTML;
                if (text == toDelete) {
                    item.innerHTML = `${html} | <span style="color:red"> Va bientôt quitter le catalogue !</span>`;
                }
            });
        }
    });
})();