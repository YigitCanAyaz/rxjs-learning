import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, asyncScheduler, observeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  name: string = "";
  ngAfterViewInit(): void {
    asyncScheduler.schedule(() => {
      this.name = "Hilmi";
    });
  }

  ngOnInit(): void {
    // const observable = new Observable<number>(data => {
    //   data.next(3);
    //   data.next(5);
    //   data.next(10);
    //   data.complete();
    // });

    // const observer = function (data: any) {
    //   console.log(data);
    // }

    // const observer = (data: any) => {
    //   console.log(data);
    // }

    // observable.subscribe(data => {
    //   console.log(data);
    // });

    // subject

    // const subject = new Subject();
    // subject.subscribe(data => {console.log(`ObserverA ${data}`)});
    // subject.subscribe(data => {console.log(`ObserverB ${data}`)});
    // subject.next(3);
    // subject.next(4);
    // subject.subscribe(data => {console.log(`ObserverC ${data}`)});
    // subject.next(5);
    // subject.next(6);
    // subject.next("Ahmet");

    // let data : any = "Hilmi";
    // const subject = new BehaviorSubject(data);
    // subject.subscribe(data => {console.log(`ObserverA ${data}`)});
    // subject.subscribe(data => {console.log(`ObserverB ${data}`)});
    // subject.next(3);
    // subject.next(4);
    // subject.subscribe(data => {console.log(`ObserverC ${data}`)});
    // subject.next(5);
    // subject.next(6);
    // subject.next("Ahmet");

    // const subject = new ReplaySubject(2);
    // subject.subscribe(data => {console.log(`ObserverA ${data}`)});
    // subject.subscribe(data => {console.log(`ObserverB ${data}`)});
    // subject.next(3);
    // subject.next(4);
    // subject.subscribe(data => {console.log(`ObserverC ${data}`)});
    // subject.next(5);
    // subject.next(6);
    // subject.next("Ahmet");

    // const subject = new AsyncSubject();
    // subject.subscribe(data => {console.log(`ObserverA ${data}`)});
    // subject.subscribe(data => {console.log(`ObserverB ${data}`)});
    // subject.next(3);
    // subject.next(4);
    // subject.subscribe(data => {console.log(`ObserverC ${data}`)});
    // subject.next(5);
    // subject.next(6);
    // subject.complete();
    // subject.next("Ahmet");

    // scheduler

    // console.log("Scheduler kullanılmayan ****");
    // const observable = new Observable(data => {
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);
    //   data.complete();
    // });

    // observable.subscribe(data => console.log(data));
    // console.log("Scheduler kullanılmayan ****");
    // console.log("**************");

    // console.log("Scheduler kullanılan ****");
    // const observable2 = new Observable(data => {
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);
    //   data.complete();
    // }).pipe(observeOn(asyncScheduler));
    // observable2.subscribe(data => console.log(data));
    // console.log("Scheduler kullanılan ****");


    console.log("1");
  }
}
