import {PhotoModel} from './Photo.model';
import {Tag} from './Tag.model';

export class PostModel {
  _id: number;
  timestamp: Date;
  title: string;
  photos: Array<PhotoModel> = [];
  tags: Array<Tag> = [];

  constructor(_id, timestamp, title, photos, tags) {
    this._id = _id;
    this.timestamp = timestamp;
    this.title = title;
    this.photos = photos;
    this.tags = tags;
  }
}
