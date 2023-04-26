async function proxymsg() {
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
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
    for (let i = 0; i < proxy_messages.length; i++) {
        proxy_loading.innerHTML = proxy_messages[i];
        await sleep(1000);
    }
    fake_forknight();
}
async function fake_forknight(){
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    document.getElementById("fortnite-loading").classList.remove("hidden");
    document.getElementById("fake-proxy").classList.add("hidden");
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("fortnite-loading-bar-fill");
        var width = 1;
        var id = setInterval(frame, Math.floor(Math.random() * 50) + 1);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}