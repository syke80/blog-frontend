import {Component, Output, EventEmitter} from '@angular/core';
import {TagService} from '../../services/tag.service';

@Component({
  moduleId: module.id,
  selector: 'es-add-tag',
  styleUrls: ['addTag.component.css'],
  templateUrl: 'addTag.component.html'
})

export class AddTagComponent {
  @Output('addTag') addTag:EventEmitter<Object>;
  tagName: string;

  constructor(
    private tagService: TagService
  ) {
    this.addTag = new EventEmitter();
  }

  onAddTagClick() {
    // el kell dobnia egy eventet a tagName-gel
    //   - elkeri a servicetol
    //   - ha nincs ilyen, akkor letrehooza

    let tag = this.tagService.getTag(this.tagName);

    if (tag) {
      this.addTag.emit(tag);
    }
    else {
      this.tagService.addTag(this.tagName)
        .subscribe( createdTag => {
          this.addTag.emit(createdTag);
          this.tagService.getTags();
        });
    }
  }
}
