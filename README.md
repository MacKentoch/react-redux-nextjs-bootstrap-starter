[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/MacKentoch/react-redux-nextjs-bootstrap-starter)

# Next JS + React + Redux + Redux persist + redux-devtools-extension + Bootstrap starter

> A NextJS starter with redux and bootstrap

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/Mp96tCWH2KdajZuBzqB6jwj8/MacKentoch/react-redux-nextjs-bootstrap-starter'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/Mp96tCWH2KdajZuBzqB6jwj8/MacKentoch/react-redux-nextjs-bootstrap-starter.svg' />
</a>

<a target='_blank' href='https://react-redux-nextjs-bootstrap-starter-xfdpqhzseq.now.sh'>

![preview](./preview.png)
</a>


[See it in action deployed with `now`](https://react-redux-nextjs-bootstrap-starter-xfdpqhzseq.now.sh/)

## Detailed Content

**Front:**
- Next js (4.x+ [github :link:](https://github.com/zeit/next.js))
- React JS (16.x+ - [github :link:](https://github.com/facebook/react))
- redux (*as your application grows managing state will be a serious concern, save pain with Redux*)
- redux-persist (*simplifies your NextJS state share between pages* [github :link:](https://github.com/rt2zz/redux-persist))
- localforage (*for better performances than localStorage*)
- react-redux (*Redux is not specific to ReactJS, you could easily use it with Angular2 for instance*)
- redux-thunk (*simple and does the job*)
- next-redux-wrapper
- redux-devtools-extension ([github :link:](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension))
- react-bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- axios ([github :link:](https://github.com/mzabriskie/axios) *Why: simple, complete, isomorphic ...*)

**Tool chain:**
- Next js (4.x+ [github :link:](https://github.com/zeit/next.js))
- Flow JS types

## Usage

IMPORTANT: `Next JS` when `redux` connected 

- **you are forced to connect each page** (*even if you don't need redux in that page*) with `withRedux` from `next-redux-wrapper` (*[see page1 as an example](https://github.com/MacKentoch/react-redux-nextjs-bootstrap-starter/blob/master/pages/page1.js)*).
- **each sub component you may want to connect** should be connected by usual `connect` from `redux` (*[see Header component as an example](https://github.com/MacKentoch/react-redux-nextjs-bootstrap-starter/blob/master/components/header/Header.js)*)


### Install

```bash
npm install
```

### Scripts

<details>
  <summary>run dev with hot reload</summary>

  Clone this repository, then install dependencies:

  ```bash
  npm run start
  ```

</details>

<details>
  <summary>build dev bundle</summary>

  ```bash
  npm run build
  ```

</details>

<details>
  <summary>start dev (no hot reload)</summary>


  *NOTE: ensure you built first before starting*

  ```bash
  npm run start
  ```

</details>

## LICENSE

The MIT License (MIT)

Copyright (c) 2017 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
