import {Component, Input} from '@angular/core';
import {Pagination} from '../../models/pagination.model';

@Component({
  moduleId: module.id,
  selector: 'es-navigation',
  templateUrl: 'navigation.component.html'
})

export class NavigationComponent {
  @Input()
  url: string = '';
  @Input()
  navigation: Pagination;
}
