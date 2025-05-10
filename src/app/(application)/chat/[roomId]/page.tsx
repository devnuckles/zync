import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import VideoChat from "@/components/platform/chat/video.chat.component";

interface ChatPageProps {
    params: Promise<{ roomId: string }>;
}

export default async function ChatPage({ params }: ChatPageProps) {
    const { roomId } = await params;

    return (
        <>
            {/* Only render VideoChat if signed in */}
            <SignedIn>
                <VideoChat roomId={roomId} />
            </SignedIn>

            {/* Otherwise redirect to your /sign-in page */}
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}
