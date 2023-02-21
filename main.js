let swLocation = "sw.js";
if (navigator.servicioWorker) {
    if (window.location.href.includes("localhost"))
        swLocation = "/sw.js";
    navigator.servicioWorker.registrer(swLocation);
}