import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  myIp: string;

  ngOnDestroy(): void {
    console.log(`ngOnDestroy`);
  }

  constructor() { }

  ngOnChanges(changes?: SimpleChanges): void {
    console.log(`ngOnChanges`);
    console.log(changes);
  }

  ngOnInit() {
    console.log(`ngOnInit`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`);
  }
}
