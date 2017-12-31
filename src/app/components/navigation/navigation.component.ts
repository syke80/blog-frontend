import {Component, Input} from '@angular/core';
import {Pagination} from '../../Models/Pagination.model';

@Component({
  moduleId: module.id,
  selector: 'es-navigation',
  templateUrl: 'navigation.component.html'
})

export class ViewPostsComponent {
  @Input()
  url: string = '';
  @Input()
  navigation: Pagination;
}
