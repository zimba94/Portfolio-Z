import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-experience-poster-grid',
  templateUrl: './experience-poster-grid.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./experience-poster-grid.component.css']
})
export class ExperiencePosterGridComponent implements OnInit {
  

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openWindowCustomClass(content) {
    this.modal.open(content, { windowClass: 'dark-modal' });
  }

}
