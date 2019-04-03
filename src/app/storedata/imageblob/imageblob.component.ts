import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from './imageservice.service';

@Component({
  selector: 'app-imageblob',
  templateUrl: './imageblob.component.html',
  styleUrls: ['./imageblob.component.css']
})
export class ImageblobComponent implements OnInit {

  imageBlobUrl: string;
  filesToUpload: Array<File>;

  constructor(private ablobService : ImageserviceService) { 
    this.filesToUpload = [];
  }

  ngOnInit() {
  }
  
}
