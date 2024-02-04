/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = {
  name: string;
  color: string;
};

type AllTypeKey = keyof AllType;
type TopKeys = "name" | "color";

function compare(top: Pick<AllType, TopKeys>, bottom: Pick<AllType, AllTypeKey>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
