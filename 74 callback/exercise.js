const repeatHello = function(callback) {
    setInterval(callback, 1000);
}
repeatHello (() => console.log("hello")) 