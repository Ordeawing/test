(() => {
    window.addEventListener("popstate", () => {
        console.log("change");
    });
    
    window.addEventListener('load', async () => {
        console.log(window.location.href);
        if (window.location.href.includes("details?")) {
            let url = 'https://raw.githubusercontent.com/Ordeawing/test/refs/heads/main/willGo.lst';
            let res = await fetch(url);
            if (res.status !== 200) return;
            let list = (await res.text()).split('\n');

            setTimeout(() => {
                let parentCollection = Array.from(document.getElementsByClassName('parentNameLast'));
                let childCollection = Array.from(document.getElementsByClassName('parentName'));

                list.some(willGo => {
                    if ((parentCollection[0] || childCollection[0]).innerText == willGo) {
                        parentCollection.forEach(item => {
                            let text = item.innerText;
                            let html = item.innerHTML;
                            if (text == willGo) {
                                item.innerHTML = `${html} | <span style="color:red"> Va bientôt quitter le catalogue !</span>`;
                            }
                        });
        
                        childCollection.forEach(item => {
                            let text = item.innerText;
                            let html = item.innerHTML;
                            if (text == willGo) {
                                item.innerHTML = `${html} | <span style="color:red"> Va bientôt quitter le catalogue !</span>`;
                            }
                        });
                        return true;
                    }
                });
            }, 1000);
        }
    });
})();