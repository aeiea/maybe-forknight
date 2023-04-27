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
            fortnite_loading_bar_fill.innerHTML = "100%";
            await sleep(1000);
            fortnite_loading_bar_fill.innerHTML = "Done!";
            await sleep(1000);
            // time to turn the loading bar to the play button
            // fortnite_loading_bar.classList.add("fortnite-style-play");
            // fortnite_loading_bar.attributes.removeNamedItem("id");
            // fortnite_loading_bar.attributes.setNamedItem(document.createAttribute("id")).value = "fortnite-play-button";
            break;
        }
        fortnite_loading_bar_fill.style.width = fortnite_loading_bar_fill_width + "%";
        fortnite_loading_bar_fill.innerHTML = fortnite_loading_bar_fill_width + "%";
        await sleep(Math.floor(Math.random() * 1400));
    }
}
