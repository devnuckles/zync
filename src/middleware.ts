import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPrivateRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/profile(.*)",
    "/settings(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    if (isPrivateRoute(req)) {
        await auth.protect();
    }
});

export const config = {
    matcher: ["/((?!_next|[^?]*\\.(?:\\w+)).*)", "/(api|trpc)(.*)"],
};
