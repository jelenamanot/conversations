# Conversations

## About

Conversations App is a chat prototype. User has option to list all
conversations, choose one and send a message.

## Installation

Clone Github repo (or download zip):

```
$ git clone https://github.com/jelenamanot/conversations.git
```

Install packages:

```
$ cd conversations
$ npm install
```

## Running app

To run application:

```
$ npm start
```

## Tech Stack

- **React** - using latest features - React Hooks
- **Redux** - state management
- **Redux-Saga** - middleware
- **Styled Components** - for styling I'm using JS styles & having simple
  ThemeProvider to showcase passing theme
- **Ant Design** - decided to use it in order to have design system already
  prepared
- **date-fns** - for time formatting instead of moment.js
- **axios** - HTTP client
- **prettier** - code styling & formatting

## Code structure

- Used **create-react-app** for project initialization
- Inside /src folder:
  - **/components** - UI presentational components that are using passed data
    from parent & having it's state for form inputs only. Styling them with
    Styled Components
  - **/ducks** - [Redux Ducks](https://github.com/erikras/ducks-modular-redux)
    is pattern for writing action types, action creators & reducer in more
    modular way which reduces boilerplate. Each data structure has it's own
    redux duck.
  - **/sagas** - managing asynchronous stuff
  - **/screens** - each screen has it's own folder, for example
    ConversationScreen, inside that we have container.js - which is connected to
    Redux, component which is receiving data from Redux and passing it to other
    components, and index.js for cleaner exporting
  - **/services** - using axios to create API calls
  - **App.js** - wrapped it with Provider from Redux, passed store & also
    wrapped it with ThemeProvider from Styled Components
  - **config.js** - basic config (API url & theme)
  - **store.js** - setup redux store & run sagas
- **jsconfig.json** - setup in order to have cleaner file paths from 'src'
- **.prettierrc** - basic prettier configuration

## UI

<img width="680" alt="photo" src="https://user-images.githubusercontent.com/21371592/97776385-c116a400-1b67-11eb-82b9-d8f61f238459.png">
