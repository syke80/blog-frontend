import { Input, OnInit, HostListener, ElementRef, Renderer, Directive, HostBinding } from '@angular/core';
import {GalleryService} from '../services/gallery.service';

@Directive({
  selector: '[esGallery]'
})
export class GalleryDirective implements OnInit {
  @Input() esGalleryId;
  @Input() esGalleryImage;
  bigImage: string = '';
  
    constructor(private galleryService: GalleryService, private el: ElementRef, renderer: Renderer) {
     // Use renderer to render the element with styles
       //renderer.setElementStyle(el.nativeElement, 'display', 'none');
       //console.log(el.nativeElement.href);
    }
    
  ngOnInit(): void {
    this.galleryService.addImage(this.esGalleryId, this.esGalleryImage);
  }

  @HostListener('click', ['$event'])
  onClick() {
    event.preventDefault();

    this.galleryService.showImage(this.esGalleryId, this.esGalleryImage);
  }
}