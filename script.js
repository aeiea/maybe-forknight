async function proxymsg() {
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    var proxy_messages = [
        "loading proxy.",
        "loading proxy..",
        "loading proxy...",
        "proxy loaded.",
        "requesting connection.",
        "requesting connection..",
        "requesting connection...",
        "connection request successful.",
        "loading video feed.",
        "loading video feed..",
        "loading video feed...",
        "loaded video feed.",
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
    // loading bar
    /*
        <div id="fortnite-loading-bar" class="fortnite-style">
            <div id="fortnite-loading-bar-fill" class="fortnite-inner-style"></div>
        </div>
    */
    var fortnite_loading_bar = document.getElementById("fortnite-loading-bar");
    var fortnite_loading_bar_fill = document.getElementById("fortnite-loading-bar-fill");
    var fortnite_loading_bar_fill_width = 0;
    for (let i = 0; i < 100; i++) { // add some randomness and pauses to make it look more real
        fortnite_loading_bar_fill_width += Math.floor(Math.random() * 10);
        if (fortnite_loading_bar_fill_width >= 100) {
            fortnite_loading_bar_fill.style.width = "98.5%";
            fortnite_loading_bar_fill.children[0].innerHTML = "100%";
            await sleep(1000);
            fortnite_loading_bar_fill.children[0].innerHTML = "Done!";
            await sleep(1000);
            // time to turn the loading bar to the play button
            fortnite_loading_bar.setAttribute("onclick", "get_rekt()");
            fortnite_loading_bar.style.width = "12%";
            fortnite_loading_bar.style.height = "10%";
            fortnite_loading_bar.style.fontSize = "1.5em";
            fortnite_loading_bar_fill.children[0].innerHTML = "Play!";
            break;
        }
        fortnite_loading_bar_fill.style.width = fortnite_loading_bar_fill_width + "%";
        fortnite_loading_bar_fill.children[0].innerHTML = fortnite_loading_bar_fill_width + "%";
        await sleep(Math.floor(Math.random() * 1000));
    }
}
function get_rekt() {
    alert("sus goofy ahh")
}