# Project

This project is for learning purposes,the main goal is to get the balance for an account address from the Ethereum network using 0x libraries

The main component is called `TokenAccountBalance` , it is inside TokenAccountBalance folder. All the other elements on the App.tsx file are just for testing purposes. Eg: the input for the token address and the callback message from the Account input.

### Caveats

- Having MetaMask ready (logged in) and installed is required.

### Instalation

```
yarn install
```

### Start project

```
yarn start
```

### Tests

Pending

### TODOs

- Notify the user when his balance changes.
- Use probably `render props` pattern to isolate the main component `TokenAccountBalance` or create a custom hook for the logic. With any of these patterns, we can leverage the UI entirely to the user.
- Add functional/unit tests.
- Add the functionality to save/search for token addresses and user addresses. Something like favorites for the addresses.
