import {Component, Input} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostsService} from '../../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'es-add-tag',
  styleUrls: ['addTag.component.css'],
  templateUrl: 'addTag.component.html'
})

export class AddTagComponent {
  @Input()
  post: Post;
  tag: string;

  constructor(
    private postsService: PostsService,
  ) {
  }

  saveTag() {
    this.postsService.saveTag(this.post._id, this.tag)
    .subscribe( () => {
      console.log('Tag saved');
    });
  }
}
