import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-head></app-head>
  <app-body></app-body>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-game-site';
}
