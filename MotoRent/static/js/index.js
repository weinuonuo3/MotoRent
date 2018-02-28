function formatDate(time, fmt, d) {
    if (time == "" || time == undefined || time == null) {
        return "";
    }
    time = time.toString();
    if (time.indexOf('.') > -1) {
        var strs = new Array(); //定义一数组 
        strs = time.split("."); //字符分割 
        strs = strs[0].replace(/T/g, " ").replace(/-/g, "/");
        //IE日期格式只支持（yyyy/mm/dd hh:mm:ss）
        time = new Date(strs);
    } else if (time.indexOf('-') > -1) {
        time = time.replace(/T/g, " ").replace(/-/g, "/");
        //IE日期格式只支持（yyyy/mm/dd hh:mm:ss）
        time = new Date(strs);
    } else {
        time = new Date(time);
    }
    if (d != 0) {
        time = addDay_s(time, d);
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'm+': time.getMinutes(),
        's+': time.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function SiteWhereTime(time) {
    var str = "";
    if (time != undefined && time != "") {
        if (time.indexOf('.') > -1) {
            var strs = new Array(); //定义一数组 
            strs = time.split("."); //字符分割 
            str = strs[0].replace(/T/g, " ").replace(/-/g, "/");
        }
    }
    return str;
}

function addDay_s(dd, dadd) {
    var a = new Date(dd)
    a = a.valueOf()
    a = a + dadd * 24 * 60 * 60 * 1000
    a = new Date(a)
    return a;
}

function addMinute(dd, dadd) {
    var a = new Date(dd)
    a = a.valueOf()
    a = a + dadd * 60 * 60 * 1000
    a = new Date(a)
    return a;
}

function getMinute(s1, s2) {
    s1 = new Date(s1);
    s2 = new Date(s2);
    var ms = s1.getTime() - s2.getTime();
    return ms / 1000 / 60;
}

function MinuteConvertTime(time, v) {
    var str = "";
    var h = parseInt(v / 60);
    var m = v % 60;
    if (h > 23) {
        time = formatDate(time, "yyyy-MM-dd", 1);
        h = h - 24;
    } else {
        time = formatDate(time, "yyyy-MM-dd", 0);
    }
    str = (h > 9 ? h : "0" + h) + ":" + (m > 9 ? m : "0" + m);
    return time + " " + str;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

function createObj(obj, list, v) {
    var n = list.length;
    if (n == 0) {
        return obj;
    }
    var k = list[0];
    if (n == 1) {
        obj[k] = v;
        return obj;
    } else {
        if (obj[k] == undefined) {
            obj[k] = createObj({}, list.slice(1, n), v);
        } else {
            var subobj = obj[k];
            obj[k] = createObj(subobj, list.slice(1, n), v);
        }
    }
    return obj;
}