// src/components/VideoChat.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createPeer } from "@/lib/peer";
import { Mic2, MicOff, Video, VideoOff, Phone, Copy } from "lucide-react";
import { useRouter } from "next/navigation";

interface VideoChatProps {
    roomId: string;
}

export default function VideoChat({ roomId }: VideoChatProps) {
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);
    const [peer, setPeer] = useState<any>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [audioOn, setAudioOn] = useState(true);
    const [videoOn, setVideoOn] = useState(true);
    const [remoteConnected, setRemoteConnected] = useState(false);
    const [copied, setCopied] = useState(false);
    const router = useRouter();

    // build the sharable link
    const meetingLink =
        typeof window !== "undefined"
            ? window.location.href
            : `https://your-domain.com/chat/${roomId}`;

    useEffect(() => {
        let localStream: MediaStream;
        const peerInstance = createPeer(roomId);
        setPeer(peerInstance);

        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((mediaStream) => {
                localStream = mediaStream;
                setStream(mediaStream);
                if (localVideoRef.current)
                    localVideoRef.current.srcObject = mediaStream;

                // answer incoming calls
                peerInstance.on("call", (call: any) => {
                    call.answer(mediaStream);
                    call.on("stream", (remoteStream: MediaStream) => {
                        setRemoteConnected(true);
                        if (remoteVideoRef.current)
                            remoteVideoRef.current.srcObject = remoteStream;
                    });
                });

                // when we’re “open”, try calling the roomId peer
                peerInstance.on("open", (id) => {
                    setTimeout(() => {
                        const call = peerInstance.call(roomId, mediaStream);
                        call.on("stream", (remoteStream: MediaStream) => {
                            setRemoteConnected(true);
                            if (remoteVideoRef.current)
                                remoteVideoRef.current.srcObject = remoteStream;
                        });
                    }, 500);
                });
            })
            .catch(console.error);

        return () => {
            localStream?.getTracks().forEach((t) => t.stop());
            peerInstance.disconnect();
        };
    }, [roomId]);

    // controls
    const toggleAudio = () => {
        if (!stream) return;
        const track = stream.getAudioTracks()[0];
        track.enabled = !track.enabled;
        setAudioOn(track.enabled);
    };

    const toggleVideo = () => {
        if (!stream) return;
        const track = stream.getVideoTracks()[0];
        track.enabled = !track.enabled;
        setVideoOn(track.enabled);
    };

    const leaveRoom = () => {
        peer?.disconnect();
        router.push("/");
    };

    const copyLink = async () => {
        await navigator.clipboard.writeText(meetingLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative flex flex-col h-full bg-gray-900 text-white">
            {/* 🔗 Meeting link bar */}
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                <span className="font-medium">
                    Room: <code>{roomId}</code>
                </span>
                <button
                    onClick={copyLink}
                    className="flex items-center space-x-1 text-sm hover:text-green-400"
                >
                    <Copy size={16} />
                    <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>
            </div>

            {/* 🎥 Video panels */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 p-2 gap-2">
                <video
                    ref={localVideoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg bg-black"
                />
                {remoteConnected ? (
                    <video
                        ref={remoteVideoRef}
                        autoPlay
                        playsInline
                        className="w-full h-auto rounded-lg bg-black"
                    />
                ) : (
                    <div className="flex items-center justify-center rounded-lg bg-black/70">
                        <p className="text-gray-300">
                            Waiting for someone to join...
                        </p>
                    </div>
                )}
            </div>

            {/* 📞 Control bar */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 bg-black/50 p-4 rounded-full">
                <button onClick={toggleAudio} className="p-2 cursor-pointer">
                    {audioOn ? (
                        <Mic2 size={24} className="text-white" />
                    ) : (
                        <MicOff size={24} className="text-red-500" />
                    )}
                </button>

                <button onClick={leaveRoom} className="p-2 cursor-pointer">
                    <Phone size={24} className="text-red-500" />
                </button>

                <button onClick={toggleVideo} className="p-2 cursor-pointer">
                    {videoOn ? (
                        <Video size={24} className="text-white" />
                    ) : (
                        <VideoOff size={24} className="text-yellow-300" />
                    )}
                </button>
            </div>
        </div>
    );
}
