import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MinhaApp';
  selectedItem: string = 'STATUS';

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
