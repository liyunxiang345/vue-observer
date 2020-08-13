class Vue {
    constructor({data,el}){
        let id = el;
        this.data = data;
        this.observer(this.data)
    }
    //  对象的属性深度监控
    observer(obj) {
        if (typeof obj === 'object' && obj !== null) {
            for (let key in obj) {
                this.defineHandle(obj, key, obj[key]);
            }
        }
    }
    defineHandle(obj,key,val){
        let mg = new Management();
    }
}