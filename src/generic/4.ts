/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Prop {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Prop> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
