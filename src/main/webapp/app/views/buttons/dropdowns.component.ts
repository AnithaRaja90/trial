import { Component } from '@angular/core';

@Component({
  templateUrl: 'dropdowns.component.html',
})
export class DropdownsComponent {

  disabled = false;

  isDropup = true;

  autoClose = false;

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  status: { isOpen: boolean } = { isOpen: false };

  constructor() { }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  }

  change(value: boolean): void {
    this.status.isOpen = value;
  }
}