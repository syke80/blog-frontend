import {PostModel} from './Post.model';
import {Pagination} from './Pagination.model';

export class PostsModel {
  items: Array<PostModel>;
  pagination: Pagination;

  constructor(items, pagination) {
    this.items = items;
    this.pagination = pagination;
  }

  add(item: PostModel) {
    this.items.push(item);
  }
}
