import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()

export class GalleryService {
  galleries = [];
  activeImageUrl = '';
  activeGalleryId = '';
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  addImage(galleryId, imageUrl) {
    let gallery = this.galleries.find( gallery => gallery.id === galleryId);

    if (!gallery) {
      this.galleries.push({
        id: galleryId,
        photos: [imageUrl]
      });
    }
    else {
      gallery.photos.push(imageUrl);
    }
  }

  getImageUrl() {
    return this.activeImageUrl;
  }

  setNext() {
    let gallery = this.galleries.find( gallery => gallery.id === this.activeGalleryId );
    let index = gallery.photos.indexOf(this.activeImageUrl);
    let nextIndex = index + 1;
    if (nextIndex === gallery.photos.length) {
      nextIndex = 0;
    }

    this.activeImageUrl = gallery.photos[nextIndex];
  }

  setPrevious() {
    let gallery = this.galleries.find( gallery => gallery.id === this.activeGalleryId );
    let index = gallery.photos.indexOf(this.activeImageUrl);
    let previousIndex = index - 1;
    if (previousIndex === -1) {
      previousIndex = gallery.photos.length - 1;
    }

    this.activeImageUrl = gallery.photos[previousIndex];
  }

  showImage(galleryId, imageUrl) {
    console.log('show clicked', galleryId, imageUrl, this.galleries);
    this.activeImageUrl = imageUrl;
    this.activeGalleryId = galleryId;
    this.change.emit(true);

    // set gallery image
    // set visibility
  }

  close() {
    this.activeImageUrl = '';
    this.activeGalleryId = '';
    this.change.emit(false);
  }
}
