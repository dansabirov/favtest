self.onconnect = function(event) {
    const port = event.ports[0];

    port.onmessage = function(event) {
        console.log("Received message from main thread:", event.data);
        port.postMessage("Message received by Shared Worker: " + event.data);
    }

    port.start();
};
