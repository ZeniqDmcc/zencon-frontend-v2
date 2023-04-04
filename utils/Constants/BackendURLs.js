const URLs = {
    dev:{
        api_rafi: "http://192.168.19.100:8080/backend",
        api_michael: "http://192.168.19.100:8080/backend",
        socketio_rafi: "http://192.168.19.100:8080",
        socketio_michael: "http://192.168.19.100:8080"
    },
    prod:{
        idbackend: "https://idbackend.zeniq.id",
        launchpadbackend: "https://launchpad.zencon.io/backend",
        socketio_launchpadbackend: "https://launchpad.zencon.io/"
    }
}

export const confirmation_page_endpoints = ["upload_project", "edit_project"];

// export const api_backend = URLs.prod.launchpadbackend;
// export const socketio_backend = URLs.prod.socketio_launchpadbackend;
export const api_backend = URLs.dev.api_rafi;
export const socketio_backend = URLs.dev.socketio_rafi;