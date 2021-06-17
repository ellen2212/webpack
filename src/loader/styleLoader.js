module.exports = function(source) {
    return `
        const elm = document.createElement('style');
        style.innerHTML = ${source};
        document.head.appendChild(elm)
    `
}