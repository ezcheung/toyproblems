// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Given in instructions
public class Fighter {
  public String name;
  public int health, damagePerAttack;
  public Fighter(String name, int health, int damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}

public class Kata {
  public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
    if(firstAttacker == fighter2.name) {
      Fighter tmp = fighter1;
      fighter1 = fighter2;
      fighter2 = tmp;
    }

    String winner;
    while(true) {
      if(fighter1.health <= 0) {
        winner = fighter2.name;
        break;
      }
      else {
        fighter2.health -= fighter1.damagePerAttack;
      }
      if(fighter2.health <= 0) {
        winner = fighter1.name;
        break;
      }
      else {
        fighter1.health -= fighter2.damagePerAttack;
      }
    }
    return winner;
  }
}