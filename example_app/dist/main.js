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
