import { Component } from '@angular/core';

@Component({
  selector: 'app-lokalem-array',
  templateUrl: './lokalem-array.component.html',
  styleUrl: './lokalem-array.component.css'
})
export class LokalemArrayComponent {

  bundeslaender: string[] = [
    'Baden-Württemberg',
    'Bayern',
    'Berlin',
    'Brandenburg',
    'Bremen',
    'Hamburg',
    'Hessen',
    'Mecklenburg-Vorpommern',
    'Niedersachsen',
    'Nordrhein-Westfalen',
    'Rheinland-Pfalz',
    'Saarland',
    'Sachsen',
    'Sachsen-Anhalt',
    'Schleswig-Holstein',
    'Thüringen'
  ];

  searchText: string = '';
  filteredLaender: string[] = [];

  isInputFocused: boolean = false;

  selectedIndex: number = -1;

  filterLaender() {
    this.filteredLaender = this.bundeslaender.filter(land =>
      land.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
    this.selectedIndex = -1;
  }

  selectLand(land: string) {
    this.searchText = land;
    this.filteredLaender = [];
    this.isInputFocused = false;

  }

  onFocus() {
    this.isInputFocused = true;
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.selectedIndex >= 0) {
      this.selectLand(this.filteredLaender[this.selectedIndex]);
    } else if (event.key === 'ArrowDown' && this.selectedIndex < this.filteredLaender.length - 1) {
      this.selectedIndex++;
    } else if (event.key === 'ArrowUp' && this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

}
