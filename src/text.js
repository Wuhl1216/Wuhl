exports.install = function (Vue,options){
    Vue.prototype.text = function(){
        alert(1);
    }
}