const Emitter = {
  events: {},
  on(event, callback) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(callback);
  },
  emit(event, ...args) {
    if (!(event in Emitter.events)) {
      return;
    }

    Emitter.events[event].forEach((eventToFire) => {
      eventToFire(...args);
    });
  },
  reset(event) {
    Emitter.events[event] = [];
  },
  resetAll() {
    Emitter.events = {};
  },
};

export default Emitter;
