var Storage = {
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key){
        let res = JSON.parse(localStorage.getItem(key))
        if (res){
            return res;
        }
        return []
    },
    remove(key){
        localStorage.removeItem(key)
    }
}
export default Storage;
