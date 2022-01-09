import React, { Component } from 'react'

const MyContext=React.createContext("Raat bahut ho gayi hai");

export const Provider=MyContext.Provider;
export const Consumer=MyContext.Consumer;
