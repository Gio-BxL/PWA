let swLocation = "sw.js";

if (navigator.serviceWorker) {
    if (window.location.href.includes("localhost"))
        swLocation = "/sw.js";
    navigator.servicieWorker.register(swLocation);
}