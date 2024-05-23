##Radix Navigation Menu

##What is it?

##Use Cases

- Navigation menu at top of ecommerce, blog, or porfolio webpage, so the user can navigate the whole webpage from one place.
- A second navigation menu on a page e.g /post, to navigate to more specific pages e.g /post/[id]

###How to install and use

npm i @radix-ui/react-navigation-menu

/app/components/navigation.jsx

```
"use client";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function NavMenu() {
return (
<NavigationMenu.Root>
<NavigationMenu.List>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
        Menu Item Name 1
        <NavigationMenu.Trigger>

        <NavigationMenu.Content>
          <NavigationMenu.Link>
          Link 1
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 2
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 3
          </NavigationMenu.link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
        Menu Item Name 2
        <NavigationMenu.Trigger>

        <NavigationMenu.Content>
          <NavigationMenu.Link>
          Link 1
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 2
          </NavigationMenu.link>
          <NavigationMenu.Link>
          Link 3
          </NavigationMenu.link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

     <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>

    </NavigationMenu.List>

    <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>

      </NavigationMenu.Root>
      );}

```

/app/layout.js

```

import "./globals.css";
import NavMenu from "./components/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}

```

##React Speech Recognition

##What is it?

- useSpeechRecognition is a react hook that gives a component access to a transcript of speech via the user's mic.
- SpeechRecognition manages the global state of the Web Speech API, exposing functions to turn the microphone on and off.
- By default, speech recognition is not supported in all browsers, with the best experience being available on desktop Chrome.

As of May 2021, the following browser that support the Web Speech API:

- Chrome (desktop): this is by far the smoothest experience
- Safari 14.1
- Microsoft Edge
- Chrome (Android): a word of warning about this platform, which is that there can be an annoying beeping sound when turning the microphone on. This is part of the Android OS and cannot be controlled from the browser
- Android webview
- Samsung Internet

- The documentation gives some advice on making more accessible across other browsers (using polyfill), or using fallback content

##Use cases

- Allows the user to navigate the website with their mouse/keyboard + mic + voice (don't have to tab through lots of links to get to the one you want)
- Voice appears as text on page, could use this for user to input information into a form using their voice, or click a button using their voice
- Can be used in a translation app to translate what is being said, to help communicate with someone speaking a different language

```

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

```

###How to install and use

###Set up voice navigation video

https://www.youtube.com/watch?v=r3tiBJagbic&ab_channel=AleksPopovic

https://www.npmjs.com/package/react-speech-recognition

npm i --save react-speech-recognition

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

npm install regenerator-runtime - To fix error ReferenceError: regeneratorRuntime is not defined

Basic component code, without pages or redirect set up

```

"use client";
import "regenerator-runtime/runtime";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesnt support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;

```
