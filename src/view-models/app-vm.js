export class appVM {

  agents;
  activeAgents;
  terminatedAgents;

  
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


  constructor(type){
    this.type = type;
    if (type === 0) this.ruleActionMap = new Map(); 
    if ( type === 1) this.observations = [];
  }
}