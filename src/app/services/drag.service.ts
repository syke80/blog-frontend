/**
  Source: 
    https://www.radzen.com/blog/angular-drag-and-drop/
    https://plnkr.co/edit/NLKQV4b2obhd9BUvP7Oi?p=preview
*/

import { Injectable } from '@angular/core';

@Injectable()
export class DragService {
  private zone: string;
  
  startDrag(zone: string) {
    this.zone = zone;
  }
  
  accepts(zone: string): boolean {
    return zone == this.zone;
  }
}