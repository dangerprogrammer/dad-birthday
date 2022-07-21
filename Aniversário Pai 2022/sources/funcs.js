const funcs = {
    loadAll: (reffer) => {
        for (const func in funcs) {
            if (func != 'loadAll') reffer[func] = funcs[func];
        };
    },
    query: (elem, all = false) => {
        return document[`querySelector${all ? 'All' : ''}`](elem);
    },
    toggleClass: (className, ...elems) => {
        elems.forEach(elem => elem.classList.toggle(className));
    },
    showCuteText: (...elems) => {
        elems.forEach(elem => {
            let text = elem.innerHTML.split('');
            for (const l in text) {
                text[l] = text[l] == ' ' ? '</span> <span class="word">' : ((l >= 747 && l < 753) ? `<span class="letter">&#x1F970;</span>` : `<span class="letter">${text[l]}</span>`);
            };
            text = '<span class="word">'+text.join('');
            elem.innerHTML = text;
        });
    },
    showFireworks: () => {
        
    }
};

export default funcs;