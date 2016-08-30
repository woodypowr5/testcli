import { Component } from '@angular/core';
import { TestComponent } from './test/test.component'; 

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TestComponent]
})
export class AppComponent {
  title = 'app works!';
}
