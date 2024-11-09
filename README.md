Hi Guys, 

This is a simple code example I made to demostrate how to use the Skeleton UI Component. 

The Skeleton UI Component shows a placeholder outline of the content that will appear on the page while it's still loading. This lets users know that something is loading, providing a smoother experience instead of showing a blank screen or a loading spinner. Apps like YouTube use this. 

For this example, I used the <Skeleton/> Component from [AntDesign](https://ant.design). 

In the src/App.js file, I used a useState hook to set the loading state and I used useEffect to simulate the loading timeout. 

I set the loading timeout to 10 seconds (10000). This means that after 10 secs the website content will appear.

If you have an existing project, simply run

```bash
npm install antd
```

To clone this repo, run

```bash
git clone https://github.com/oyingrace/skeleton-example.git
```

```bash
cd skeleton-example
```

```bash
npm i
```

```bash
npm start
```

I hope you find this useful! If you encounter any issues, do let me know on my X [@devqueenn](https://x.com/devqueenn). 
