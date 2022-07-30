# Chat App

### Global Dependencies
Node 14.18.2
npm 6.14.15
yarn 1.16.0
React 18.2.0

### `yarn install`

Installs the packages locally

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Confusion with Mobile View

The Mobile View confused me a little because it seemed from the wireframe that I was building the view from the perspective of a chat user and an interviewer. The latter perspective wouldn't exist in a real chat app and it threw a wrench in my state design.

### Next Steps

With more time I'd:

* connecting or building a real chat service, instead I created the ChatProvider which mocks the place of an API, local views only directly get from MessagesProvider which gets from updated ChatProvider
* use unit tests (I felt I could get more done with this assignment without it)
* timestamps should work with different timezones and in general it could be refactored a bit
* add reactions to messages between users, like emojis
* add an ellipsis to show someone is typing

