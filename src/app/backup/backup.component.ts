import { Component } from '@angular/core';

@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.scss'
})
export class BackupComponent {
  num1 : number;
  num2 : number;
  // countryName = ['India','Japan','Germany','France','Spain','Italy','Greece'];
  countryName = [];
  modesOfTransport : string = 'railway';
}
