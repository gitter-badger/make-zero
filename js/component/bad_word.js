!(function () {
    const obj = {}
    function listAll() {
        return Object.keys(obj)
    }

    function remove(word) {
        delete obj[word]
    }
    function add(word) {
        obj[word] = 1
     }

    this.BadWord = {
        listAll, remove, add
    }
})()