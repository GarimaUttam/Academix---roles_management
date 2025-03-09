import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/", // Example: add public routes here
  "/student",

]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    return auth().then(authObject => {
      if (!authObject.userId) {
        return authObject.redirectToSignIn(); // Redirect to Clerk sign-in page
      }
    });
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
