export default {
    install(Vue, options) {
        Vue.prototype.allPrpos = function (obj, objData) {
            // 开始遍历     
            for (var k in objData) {
                // 判断是否是对象
                if (typeof (objData[k]) == "object" && !Array.isArray(objData[k])) {
                    // 继续下一级
                    if (k in obj) {
                        obj[k] = this.allPrpos(obj[k], objData[k]);
                    }
                    else {
                        obj[k] = {};
                        obj[k] = this.allPrpos(obj[k], objData[k]);
                    }
                } else {
                    // 替换或添加属性
                    if (k in obj) {
                        obj[k] = objData[k];
                    }
                    else {
                        obj[k] = objData[k];
                    }
                }
            }
            return obj;
        }
    }
}