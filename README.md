# Welcome to Threads clone app

This app is made using react native expo and  uses convex for backend, Clerk for user authentication (Google and Facebook) and Sentry for error tracking and performance monitoring.

## Features

- **Authentication**: Secure login with Facebook and Google powered by [Clerk](https://clerk.dev/).
- **Core Functionality**: Users can post, reply, and like posts, enhancing engagement and interaction.
- **User Search**: Search functionality to easily find and connect with other users.
- **Error Tracking**: Integrated [Sentry](https://sentry.io/) for real-time error tracking and issue diagnosis.
- **Efficient Backend**: Utilizes [Convex](https://convex.dev/) for reliable data handling and performance.
- **Smooth Navigation**: Combines tab and stack navigation for a seamless user experience.


## Home screen
 - The main feed where users can view posts from people they follow. Users can interact with posts by liking, replying, and sharing.
 - Includes options to create a new post and navigate to other screens.
<p align-"center">
<img src="/App screenshots/homefeed.png" alt="Description" width="300"/>
   
</p>

## Profile screen
- Displays the user’s profile, including their bio, profile picture, and posts.
- Users can edit their profile information, view their posts, and manage settings.

<p align-"center">
<img src="/App screenshots/userProfile.png" alt="Description" width="300"/>
   
</p>

## Search Screen
- Provides a search bar to find other users by username.
- Displays a list of matching users, with options to view profiles
<p align-"center">
<img src="/App screenshots/search.png" alt="Description" width="300"/>
   
</p>


## Search Profile
- Displays the profile of a searched user, including their bio, profile picture, follower/following count, and recent posts.
<p align-"center">
<img src="/App screenshots/searchProfile.png" alt="Description" width="300"/>
   
</p>

## Add thread
- A modal screen that appears when users want to start a new thread.
- Includes a text input area for composing the thread's content, with options to add images, GIFs, or links.
- Allows users to tag other users, add hashtags, and customize the visibility of the thread (e.g., public or followers-only).
- Includes "Post" and "Cancel" buttons for submitting or discarding the thread.
<p align-"center">
<img src="/App screenshots/newThread.png" alt="Description" width="300"/>
<img src="/App screenshots/threadAdded.png" alt="Description" width="300"/>
</p>

## Reply to thread
- Displays the full content of a post, along with replies and likes.
- Allows users to reply to posts, view interactions, and like comments and replies.
<p align-"center">
<img src="/App screenshots/threadReply.png" alt="Description" width="300"/>
</p>
