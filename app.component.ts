import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ivy';
  isHunderedCheck = false;
  playerName = null;
  players = [
    { name: 'Kiyani', hundereds: 0, wickets: 34, type: 'bowler' },
    { name: 'Fahad', hundereds: 1, wickets: 0, type: 'wicketkeeper' },
    { name: 'Hassan', hundereds: 0, wickets: 45, type: 'bowler' },
    { name: 'Moeed', hundereds: 1, wickets: 34, type: 'al-rounder' },
    { name: 'Gulfraz', hundereds: 3, wickets: 10, type: 'al-rounder' },
    { name: 'Ali', hundereds: 4, wickets: 0, type: 'batsman' },
  ];
  updateHunderedCheck() {
    this.isHunderedCheck = !this.isHunderedCheck;
  }
}
