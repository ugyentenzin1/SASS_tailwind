import { Component, OnInit } from '@angular/core';
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {MenuItem, MessageService} from "primeng/api";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-journey',
  standalone: true,
  templateUrl: './journey.component.html',
  imports: [
    ToastModule,
    StepsModule,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  constructor() { }

  activeIndex: number = 0;

  items: any;

  renderContent? : boolean = true;

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        label: '2017 Dec -2018 May',
      },
      {
        id: 1,
        label: '2021 June - 2021 Dec',
      },
      {
        id: 2,
        label: '2021 Dec - 2022 April',
      },
      {
        id: 3,
        label: '2022 - Still On',
      }
    ];
  }
  onActiveIndexChange(event: number) {
    this.activeIndex = event;
    if(this.activeIndex === this.items.id) {
      this.renderContent = true;
    }
  }
}
