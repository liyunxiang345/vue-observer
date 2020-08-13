class Vue {
    constructor({data,methods}){

        this.data = data;
        this.observer(this.data);

    }
    observer(obj) {
        if(typeof obj === "object" && obj !== null){
            for(let key in obj){
                this.defineHandle(obj,key,obj[key])
            }
        }
    }

    defineHandle(obj,key,val){
        let mg = new Management();
        this.observer(val);
        Object.defineProperty(obj,key,{
            get(){
                if(Management.target){
                    mg.add(Management.target);
                    return val;
                }
            },
            set(newVal){
                val = newVal;
                console.log("变化了");
                mg.notify();
            }
        })
    }
}
//管理订阅
class Management {
    constructor(){
        this.subs = [];
    }
    add(sub){
        this.subs.push(sub);
    }
    notify(){
        this.subs.map(sub => {
            sub.update();
        })
    }
}
//订阅者
class Watcher {
    constructor(){
        Management.target = this;
    }
    update(){
        //更新视图
    }
}