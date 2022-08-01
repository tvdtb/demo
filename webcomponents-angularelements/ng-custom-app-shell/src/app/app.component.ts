import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'custom-app-shell';

  important(evt: Event) {
    console.log(' app shell received ', evt)
  }

  updateMessage() {
    this.message= 'message updated at ' + new Date();
  }
}
