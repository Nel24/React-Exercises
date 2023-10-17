import React from 'react';

export const MyContext = React.createContext(null);

// we are setting the default value of the context to null. This means that if a component attempts to access the context before it has been provided a value, it will receive null.