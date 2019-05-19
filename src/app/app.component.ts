import { Component } from '@angular/core';

/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple component managing server array
 * @made_by Salavat
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  constructor() {
    this.serverElements.push({type: 'server', name: 'Testserver', content: 'Testcontent'});
  }
  onServerAdded(data: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: data.name,
      content: data.content
    });
  }
  onBlueprintAdded(data: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.name,
      content: data.content
    });
  }
}
