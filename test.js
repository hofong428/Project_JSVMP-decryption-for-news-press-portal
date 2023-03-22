window = global;
console.log(typeof window);
console.log(typeof exports);

navigator = {}
navigator.userAgent = '123123'

function ps() {
    if (navigator['userAgent']) {
        return 'hello'
    } else {
        return ''
    }
}

//how to solve the exception branch?
location = {
    host: '123123123'
}
function pn() {
    try {
        raymond()
        if (navigator['userAgent']) {
            return 'shunjung'
        }
    } catch (e) {
        console.log(e)
        return 'hofong'
    }
}

function raymond(){
    if (location.host.length > 2)
    {
        return 'annie'
    }
}

console.log(pn());