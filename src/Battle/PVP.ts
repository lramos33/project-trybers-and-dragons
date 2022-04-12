import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, private player2: Fighter) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;