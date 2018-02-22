import {Post} from './post.model';
import {Pagination} from './pagination.model';

export class Posts {
  items: Array<Post>;
  pagination: Pagination;

  constructor(items?, pagination?) {
    this.items = items || [];
    this.pagination = pagination || new Pagination();
  }

  add(item: Post) {
    this.items.push(item);
  }
}
