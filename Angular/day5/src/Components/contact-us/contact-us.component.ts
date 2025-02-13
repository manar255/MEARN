import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer, concatMap,first, map } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactData;
  arr: string[] = [];
  constructor() {
    this.contactData = new Observable<string>((s) => {
      s.next('manarkhaled@gmail.com')
      s.next('manar255')
    })
  }
  ngOnInit(): void {
    timer(3000)
      .pipe(concatMap(() => this.contactData.pipe(first()).pipe(map(i=>`your gmail is ${i}`))))
      .subscribe(data => {
        this.arr.push(data)
        console.log(this.arr)
      })
  }
}
