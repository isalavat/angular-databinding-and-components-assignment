import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple component that allows to create server or blueprint
 * @made_by Salavat
 */
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**
   * @Output allows mark an instance of EventEmitter as output element.
   * This output element allows creating of an event that can be handled in html-embedded
   * typescript code (in the component selector).
   * Event includes passed object throught the EventEmitter, see emit() method.
   * the corresponding html-element looks like:
   * <app-cockpit
   * (onServerAdded)="onServerAdded($event)"
   * (onBlueprintAdded)="onBlueprintAdded($event)">
   * </app-cockpit>
   */
  @Output() onServerAdded = new EventEmitter<{name: string, content: string}>();
  @Output() onBlueprintAdded = new EventEmitter<{name: string, content: string}>();
  /**
   * @ViewChild binds a variable to the html-element that has
   * indicated selector.
   * the corresponding html-element looks like:
   * <input type="text" id="name" class="form-control" #serverNameInput>
   */
  @ViewChild('serverContentInput')serverContentInput;

  ngOnInit() {
  }
  onAddServer(serverNameInput: HTMLInputElement) {
    /**
     * Now, how to emit an event by passing an object to this event
     */
    this.onServerAdded.emit({name: serverNameInput.value, content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.onBlueprintAdded.emit({name: serverNameInput.value, content: this.serverContentInput.nativeElement.value});
  }
}
