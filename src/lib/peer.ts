import Peer from "peerjs";

/**
 * Creates a PeerJS connection tied to the given room ID.
 * @param id - the room ID (and peer ID) to use
 */
export function createPeer(id: string) {
    return new Peer(id, {
        host: "peerjs.com",
        port: 443,
        secure: true,
        config: {
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        },
    });
}
