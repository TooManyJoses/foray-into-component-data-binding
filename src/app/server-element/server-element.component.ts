import {
  Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild,
  ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string,
  };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log("Text Content of Paragraph", this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log("Text content of header", this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }
}
