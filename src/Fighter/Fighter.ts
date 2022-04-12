import SimpleFighter from './SimpleFighter';
import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter | SimpleFighter): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;