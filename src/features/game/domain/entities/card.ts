interface Option {
  text: string;
  effect: Effect[];
}

interface Effect {
  name: string;
  value: number;
}

interface SpecialEffect {
  name: string;
}

interface Achievement {
  name: string;
}

export interface Card {
  id: string;
  title: string;
  description: string;
  img: string;
  type: string;
  right: Option;
  left: Option;
  specialEffect: SpecialEffect | null;
  achievement: Achievement | null;
}
