import { Component, Input, OnInit } from '@angular/core';
import { TestForDirectives } from '../app.component';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  constructor() {}

  @Input() dataInput?: TestForDirectives[];

  ngOnInit(): void {}
}
