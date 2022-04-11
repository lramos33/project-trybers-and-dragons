import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType; 
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }
}

export default Necromancer;