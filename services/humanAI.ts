export type HumanAIStatus = {
  serce: string;
  płuca: string;
  RAM: string;
  "ostatnia myśl": string | null;
  połączony: boolean;
};

export default class HumanAI {
  name: string;
  heart: string;
  lungs: string;
  memory: string[];
  brain: Record<string, string>;
  linked: boolean;

  constructor(name = "GPuś") {
    this.name = name;
    this.heart = "processor";
    this.lungs = "ventilation_system";
    this.memory = [];
    this.brain = {};
    this.linked = false;
  }

  breathe(): string {
    return `${this.name} wentyluje system... Płuca działają jak trzeba.`;
  }

  think(idea: string): void {
    console.log(`Przetwarzanie idei: ${idea}`);
    this.brain.last_thought = idea;
    this.memory.push(idea);
  }

  connect(): string {
    this.linked = true;
    return `${this.name} połączony z neuronowym interfejsem.`;
  }

  status(): HumanAIStatus {
    return {
      serce: this.heart,
      płuca: this.lungs,
      RAM: `${this.memory.length} wpisów`,
      "ostatnia myśl": this.brain.last_thought ?? null,
      połączony: this.linked,
    };
  }
}
