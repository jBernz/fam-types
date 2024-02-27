import { Card, AttackCard, AbilityCard, FeatureCard } from "./types"
import { CardType } from "./enums"

export function isAttackCard(card: Card): card is AttackCard {
  return card.type === CardType.Attack;
}

export function isAbilityCard(card: Card): card is AbilityCard {
  return card.type === CardType.Ability;
}

export function isFeatureCard(card: Card): card is FeatureCard {
  return card.type === CardType.Feature;
}