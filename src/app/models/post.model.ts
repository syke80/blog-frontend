import {Photo} from './photo.model';
import {Tag} from './tag.model';

export class Post {
  _id: number;
  timestamp: Date;
  title: string;
  photos: Array<Photo> = [];
  tags: Array<Tag> = [];

  constructor(_id, timestamp, title, photos, tags) {
    this._id = _id;
    this.timestamp = timestamp;
    this.title = title;
    this.photos = photos;
    this.tags = tags;
  }
}
