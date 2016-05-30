var horizon = Horizon();
horizon.onReady(function() {
  document.querySelector('h1').innerHTML = 'example_app works!'
});
horizon.connect();


// Create a "messages" collection
const chat = horizon("messages");


let message = {
  text: "What a beautiful horizon!",
  datetime: new Date(),
  author: "@dalanmiller"
}

chat.store(message);

console.log("testing is there hotreload");

chat.fetch().subscribe(
  (items) => {
    items.forEach((item) => {
      // Each result from the chat collection
      //  will pass through this function
      console.log(item);
    })
  },
  // If an error occurs, this function
  //  will execute with the `err` message
  (err) => {
    console.log(err);
  })

  // These two queries are equivalent and will remove the document with id: 1
chat.remove(1).subscribe((id) => { console.log(id) })
chat.remove({id: 1}).subscribe((id) => {console.log(id)})

// Will remove documents with ids 1, 2, and 3 from the collection
chat.removeAll([1, 2, 3])

// Watch all documents. If any of them change, call the handler function.
chat.watch().subscribe((docs) => { console.log(docs)  })

// Query all documents and sort them in ascending order by datetime,
//  then if any of them change, the handler function is called.
chat.order("datetime").watch().subscribe((docs) => { console.log(docs)  })

// Watch a single document in the collection.
chat.find({author: "@dalanmiller"}).watch().subscribe((doc) => { console.log(doc) })

let chats = [];

// Query chats with `.order`, which by default is in ascending order
chat.order("datetime").watch().subscribe(

  // Returns the entire array
  (newChats) => {

    // Here we replace the old value of `chats` with the new
    //  array. Frameworks such as React will re-render based
    //  on the new values inserted into the array.
    chats = newChats;
  },

  (err) => {
    console.log(err);
  })

  
