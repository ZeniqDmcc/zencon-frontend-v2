const URLs = {
    development:{
        launchpadbackend: "http://192.168.19.100:8080/backend",
        socketio_launchpadbackend: "http://192.168.19.100:8080",
        zencon_event:"http://192.168.19.100:9003/api/v1/zencon"
    },
     staging:{
        launchpadbackend: "https://staging.qinez.com/backend",
        socketio_launchpadbackend: "https://staging.qinez.com",
        zencon_event:"https://staging.qinez.com/api/v1/zencon"
    },
    production:{
        launchpadbackend: "https://launchpad.zencon.io/backend",
        socketio_launchpadbackend: "https://launchpad.zencon.io",
        zencon_event:"https://launchpad.zencon.io/api/v1/zencon"
    }
}

export const confirmation_page_endpoints = ["upload_project", "edit_project"];
// TODO: Revet back to staging
// export const api_backend = URLs.staging.launchpadbackend;
// export const socketio_backend = URLs.staging.socketio_launchpadbackend;
// export const zencon_event_api_url = URLs.staging.zencon_event;
export const api_backend = URLs.development.launchpadbackend;
export const socketio_backend = URLs.development.socketio_launchpadbackend;
export const zencon_event_api_url = URLs.development.zencon_event;