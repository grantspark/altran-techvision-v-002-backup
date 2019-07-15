import { Component, OnInit, Input } from '@angular/core';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-trend-card',
  templateUrl: './trend-card.component.html',
  styleUrls: ['./trend-card.component.scss']
})
export class TrendCardComponent implements OnInit {

  @Input() title: String;
  @Input() imgsrc: String;
  @Input() paragraphs: String[];

  constructor(public translationService: TranslationService) { }

  ngOnInit() {
  }

  expanded: boolean = false;

  toggleDescription() {
      this.expanded = !this.expanded
  }
}
