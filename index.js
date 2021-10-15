class Observer {
  username = "";

  constructor(username) {
    this.username = username;
  }

  setUsername(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
}

class Subscribable {
  observers = new Set();

  subscribe(observer) {
    this.observers.add(observer);
  }

  notify() {
    for (let observer of this.observers) {
      console.log(`username: ${observer.username}`);
    }
  }
}

let observerA = new Observer("aditya");
let observerB = new Observer("good example");

let subscriberFactory = new Subscribable();

subscriberFactory.subscribe(observerA);
subscriberFactory.subscribe(observerB);

subscriberFactory.notify();
