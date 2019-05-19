import {Component, Input, OnInit} from '@angular/core';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple component representing a server
 * @author salavat
 */
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  /**
   *  @Input allows data injection from html side
   *  Html element in parent component looks like:
   *  <app-server-element [element]="serverElement"> ..... </app-serve-element>
   */
  @Input() element: {type: string, name: string, content: string}
  constructor() { }

  ngOnInit() {
  }

}
