export class AppVM {
  agents = [];
  activeAgents = [];
  terminatedAgents = [];
  /**
   * Array for storing logs
   * A log is an object with following fields: id, text, time, color and producer
   */
  logs = [];
  files = [];
  appVMApi;

  constructor() {
    this.appVMApi = { deleteAgent: this.deleteAgent };

    /**
     * Samples for tests
     */
    // this.agents.push(new Agent(this.appVMApi, 0, null));
    // this.logs.push(new Log('Test', null, null, null, { id: this.agents[0].id }));
    // this.logs.push(new Log('Another test with another agent ID', null, null, null, { id: 1121001 }));
    // this.logs.push(new Log('Another test with the same agent ID', null, null, null, { id: this.agents[0].id }));
  }

  deleteAgent = agentId => {
    if (this.agents.length > 0) this.agents = this.agents.filter(e => e.id !== agentId);
  };
}

class Agent {
  id;
  name;
  /**
   * 0 - reflex agent
   * 1 - model-based reflex agent
   * 2 - goal-based agent
   * 3 - utility agent
   */
  type;

  // Only if agent's type is 0 and 1
  ruleActionMap;

  // Only if agent's type is 1
  observations;

  // Only if agent's type is 3
  utilityFunction;

  // Status - uninitialized, initialized, idle, running, terminated, paused
  status = 'running';

  startTime = 'N/A';

  pausedTime = 'N/A';

  endingTime = 'N/A';

  appVMApi;

  constructor(appVMApi, type, name) {
    this.appVMApi = appVMApi;
    this.type = type;
    if (type === 0) this.ruleActionMap = new Map();
    if (type === 1) this.observations = [];

    this.name = name || 'Agent_' + Math.floor(Math.random() * 1000000);
    this.id = Math.floor(Math.random() * 10000000000000);
  }

  delete() {
    this.appVMApi.deleteAgent(this.id);
  }
}

class Log {
  text = 'N/A';
  id;
  color;
  time;

  producer;

  constructor(text, id, color, time, producer) {
    if (text) this.text = text;
    else this.text = '';
    if (id) this.id = id;
    else this.id = this.generateNewId();
    if (color) this.color = color;
    else this.color = this.generateRandomColor();
    if (time) this.time = time;
    else this.time = new Date();
    if (producer) this.producer = producer;
    else this.producer = { id: 'N/A' };
  }

  generateNewId() {
    return Math.floor(Math.random() * 10000000542310);
  }

  generateRandomColor() {
    let red = 255 * Math.random();
    let green = 255 * Math.random();
    let blue = 255 * Math.random();
    let alpha = Math.random() + 0.2;
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  }
}
