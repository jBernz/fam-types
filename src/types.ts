import { CardType, TargetType, SaveType } from "./enums"

export type EditModel = {
  _id?: string
}

export interface Family extends EditModel {
  name: string
  description?: string
}

export interface Tag extends EditModel {
  name: string
  description?: string
}

export interface Card extends EditModel {
  name: string
  memory: number
  family?: Family
  type: CardType
  vigor_required?: number
  impulse_required?: number
  special_required?: number
  description?: string
  tags?: Tag[]
}

export interface AttackCard extends Card {
  action_cost: number
  range: number
  target: TargetType
  miss_damage?: number
  hit_damage: number
  critical_damage: number
  critical_threshold: number
}

export interface AbilityCard extends Card {
  action_cost: number
  range: number
  target: TargetType
  save_target?: SaveType[]
  save_difficulty_modifier: SaveType
}

export interface FeatureCard extends Card {
  bonus_type?: string
  bonus_amount?: number
}