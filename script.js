document.onload = function() {
    var proxy_messages = [
        "loading proxy.",
        "loading proxy..",
        "loading proxy...",
        "proxy loaded.",
        "proxy loaded..",
        "proxy loaded...",
        "requesting connection.",
        "requesting connection..",
        "requesting connection...",
        "connection requested.",
        "done."
    ];
    var proxy_loading = document.getElementById("proxy-loading");
    for (var i = 0; i < proxy_messages.length; i++) {
        setTimeout(function() {
            proxy_loading.innerHTML = proxy_messages[i];
        }, 1000);
    }
}