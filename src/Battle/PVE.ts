import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, monsters: (Fighter | SimpleFighter)[]) {
    super(player);
    this._monsters = monsters;
  }

  private singleFight(monster: Fighter | SimpleFighter): number {
    while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
      this.player.attack(monster);
      monster.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fight(): number {
    const results = this._monsters.map((monster) => this.singleFight(monster));
    return results.every((number: number) => number === 1) ? 1 : -1;
  }
}

export default PVE;