## How to reduce tracking loaders and errors boilerplate

By this small app we load users when route to /users happens.

Errors and loaders are in the root state tree.

The main reusable util is:
src\shared\utils\track-loader-and-error.js

See this component:
src\modules\users\components\users.js
and go through its dependencies.
