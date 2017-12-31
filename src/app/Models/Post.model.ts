import {PhotoModel} from './Photo.model';

export class PostModel {
  _id: number;
  timestamp: Date;
  title: string;
  photos: Array<PhotoModel> = [];

  constructor(_id, timestamp, title, photos) {
    this._id = _id;
    this.timestamp = timestamp;
    this.title = title;
    this.photos = photos;
  }
}
