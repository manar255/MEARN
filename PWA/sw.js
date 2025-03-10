self.addEventListener("install",(event)=>{
    console.log("installed !!!!!");
    self.skipWaiting()
    event.waitUntil(
        caches.open("to-do-list").then((cache)=> cache.addAll(["index.html","script.js"]))
    )
})

self.addEventListener("activate",()=>{
    console.log("activated");
    
})


self.addEventListener("fetch",(event)=>{
    console.log("send req to ",event.request.url);
    event.respondWith(
        
        caches.match(event.request.url).then((file)=>{
            if(file){
                console.log("file found in cache");
                return file
            }
            else{
                console.log("file Not found in cache");
               return fetch(event.request.url)
            }
        })
    )
})