import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, asyncScheduler, bindCallback, defer, empty, observeOn, of, timer } from 'rxjs';
import {ajax} from "rxjs/ajax"

declare var $ : any;

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


    // console.log("1");

    // operators - ajax
    
    // ajax.getJSON("https://jsonplaceholder.typicode.com/posts")
    // .subscribe(data => console.log(data));


    // ajax("https://jsonplaceholder.typicode.com/posts")
    // .subscribe(data => console.log(data));

    // ajax({
    //   url: "....",
    //   method: "post"
    // })

    // operators - bindCallback 

    // $.getJSON("https://jsonplaceholder.typicode.com/posts", (data: any) => {
    //   console.log(data);
    // });

    // const obs : (url: string) => Observable<any[]> = bindCallback($.getJSON);

    // obs("https://jsonplaceholder.typicode.com/posts")
    // .subscribe(data => {console.log(data)});

    // operators - defer

    // const obs1 = of(new Date());

    // // subscribe olana kadar oluşturulması ertelenecektir.
    // const obs2 = defer(() => of(new Date()));

    // timer(5000).subscribe(() => {
    //   obs1.subscribe(data => console.log(data));
    //   obs2.subscribe(data => console.log(data));
    // });

    // operator - empty

    const result = empty();
    result.subscribe(data => console.log(data));
  }
}
