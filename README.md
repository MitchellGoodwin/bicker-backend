# Bicker Backend

This is the repository for the backend for Bicker, a twitter clone that's upfront on being about negativity. The frontend repo can be found TBD

# MVC

## Models

User:
* username
* password
* Virtual Posts

User will have auth with bcrypt password hashing, jwt tokens, and auth middleware

Post:
* text (with char limitation)
* user
* Virtual Likes

Posts will belong to a user

Likes:
* User
* Post

Will belong to the post the user is liking and the current user.

## Routes

User:
* Create/Signup
* Login
* Logout
* Delete - Also delete associated posts
* Show - Show user and their posts

Posts:
* Create - Belong to current user
* Index - Show all posts in descending order on createdAt
* Delete - Can only be deleted by owner
* Edit - Can only be edited by owner

Like:
* Create - Belong to current user
* Delete - Can only be deleted by owner

## Expected challenges
Setting it up so that only the needed data gets sent, especially for associated models, in each request. For speed and security. 

## Stretch Goals

User:
* Avatar
* Bio
* DisplayName
* Email

Post:
* File - Allow users to attach pictures

Follow:
Let users follow each other.
Users would have a followers, and following columns. 

Live notifications

