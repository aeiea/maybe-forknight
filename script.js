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
        fortnite_loading_bar_fill_width += Math.floor(Math.random() * 5);
        if (fortnite_loading_bar_fill_width >= 100) {
            fortnite_loading_bar_fill.style.width = "98.5%";
            fortnite_loading_bar_fill.children[0].innerHTML = "100%";
            await sleep(1000);
            fortnite_loading_bar_fill.children[0].innerHTML = "Done!";
            await sleep(1000);
            // time to turn the loading bar to the play button
            fortnite_loading_bar.setAttribute("onclick", "get_rekt()");
            fortnite_loading_bar.style.width = "10%";
            fortnite_loading_bar.style.height = "2em";
            fortnite_loading_bar.style.fontSize = "1.5em";
            fortnite_loading_bar_fill.children[0].innerHTML = "Play!";
            break;
        }
        fortnite_loading_bar_fill.style.width = fortnite_loading_bar_fill_width + "%";
        fortnite_loading_bar_fill.children[0].innerHTML = fortnite_loading_bar_fill_width + "%";
        await sleep(Math.floor(Math.random() * 1000));
    }
}
async function get_rekt() {
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    document.getElementById('loading_screen').classList.add("hidden");
    document.getElementById('fortnite-loading').classList.add("hidden");
    document.getElementById('trolled').classList.remove("hidden");
    function push_message(message) {
        var trolled_message_container = document.getElementById("trolled");
        var trolled_message = document.createElement("p");
        trolled_message.innerHTML = message;
        trolled_message_container.appendChild(trolled_message);
        var br = document.createElement("br");
        trolled_message_container.appendChild(br);
    }
    async function get_ip_data() {
        /* 
        using wtfismyip.com
        example ip
        {
            "YourFuckingIPAddress": "{ip}",
            "YourFuckingLocation": "Los Angeles, CA, United States",
            "YourFuckingHostname": "{hostname}",
            "YourFuckingISP": "Cox Communications Inc.",
            "YourFuckingTorExit": false,
            "YourFuckingCity": "Los Angeles",
            "YourFuckingCountry": "United States",
            "YourFuckingCountryCode": "US"
        }
        */
        const ip_data = await fetch("https://wtfismyip.com/json").then(response => response.json());
        console.log(ip_data);
        return ip_data;
    }
    async function get_cat_fact() {
        /*
        using https://catfact.ninja/fact
        example fact:
        {"fact":"The cat who holds the record for the longest non-fatal fall is Andy. He fell from the 16th floor of an apartment building (about 200 ft\/.06 km) and survived.","length":157}
        */
        const catfact = await fetch("https://catfact.ninja/fact").then(response => response.json());
        console.log(catfact);
        console.log(catfact.fact);
        return catfact.fact;
    }
    var catfact_frame = document.getElementById("catfact");
    catfact_frame.innerHTML = await get_cat_fact();
    var trollmessages = [
        "fork",
        "spoon",
        "sus",
        "sus goofy ahh",
        "only in ohio",
        "amogus",
        "goofy ahh",
    ];
    var skilllevelmessages = [
        "unepic gamer",
        "fart",
        "f--",
        "professional scratch game player",
        "professional plants vs zombie player",
        "weeb",
        "incarnation of lankybox🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮",
        "potato++",
        "jeebus crust",
        "professional gacha life player",
        "professional roblox adopt me player",
        "ea game enjoyer"
    ];
    var trollmessage = trollmessages[Math.floor(Math.random() * trollmessages.length)];
    var skilllevelmessage = skilllevelmessages[Math.floor(Math.random() * skilllevelmessages.length)];
    alert("sus goofy ahh")
    document.getElementsByTagName("title")[0].innerHTML = "sus goofy ahh";
    document.getElementsByTagName("video")[0].play();
    var messages = [
        "you rn: ".concat(trollmessage),
        "skill level: ".concat(skilllevelmessage),
        "ip: ".concat(await get_ip_data().then(response => response.YourFuckingIPAddress)),
        "location: ".concat(await get_ip_data().then(response => response.YourFuckingLocation)),
        "hostname: ".concat(await get_ip_data().then(response => response.YourFuckingHostname)),
        "isp: ".concat(await get_ip_data().then(response => response.YourFuckingISP)),
        "tor exit: ".concat(await get_ip_data().then(response => response.YourFuckingTorExit)),
        "city:".concat(await get_ip_data().then(response => response.YourFuckingCity)),
        "country: ".concat(await get_ip_data().then(response => response.YourFuckingCountry)),
        "screen h: ".concat(window.screen.availHeight),
        "screen w: ".concat(window.screen.availWidth),
        "referrer: ".concat(document.referrer),
        "raw data: ".concat(await get_ip_data().then(response => response)), // raw json so scawy!1!!
        "alive: yes",
        "trolled: true",
        "made by: @aeiea" 
    ];
    console.log(messages)
    for (let i = 0; i < messages.length; i++) {
        const element = messages[i];
        console.log(element)
        push_message(element);
        await sleep(500);
    }
}