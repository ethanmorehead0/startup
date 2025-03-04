const GameEvent = {
  System: "system",
  End: "gameEnd",
  Start: "gameStart",
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    setInterval(() => {
      const score = Math.floor(Math.random() * 100);
      const level = Math.floor(Math.random() * 10);
      const userName = "Andy";
      switch (Math.floor((Math.random() * 100) % 3) + 1) {
        case 1:
          this.broadcastEvent(userName, GameEvent.levelComplete, {
            name: userName,
            level: level,
          });
          break;
        case 2:
          this.broadcastEvent(userName, GameEvent.Start, {
            name: userName,
          });
          break;
        case 3:
          this.broadcastEvent(userName, GameEvent.End, {
            name: userName,
            score: score,
          });
      }
    }, 10000);
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => handler(event));
  }

  //   notifyAll(event) {
  //     this.listeners.forEach((listener) => listener(event));
  //   }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
