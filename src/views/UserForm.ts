import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-age': this.onSetAgeClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
            <div>
                <h1>User Form</h1>
                <div>User Name: ${this.model.get('name')}</div>
                <div>User Age: ${this.model.get('age')}</div>
                <input />
                <button>Click me</button>
                <button id="set-age">Set Random Age</button>
            </div>
        `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
