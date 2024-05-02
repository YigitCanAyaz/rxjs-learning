import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, asyncScheduler, audit, auditTime, bindCallback, combineLatest, concat, defer, empty, filter, forkJoin, from, fromEvent, generate, iif, interval, map, mapTo, merge, observeOn, of, partition, race, range, throwError, timer, zip } from 'rxjs';
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

    // const result = empty();
    // result.subscribe(data => console.log(data));

    // from

    // const sayilar = [5, 10, 15];
    // const obs = from(sayilar);
    // obs.subscribe(data => {
    //   console.log(data);
    // });

    // const araclar = new Map<string, number>();
    // araclar.set("Klavye", 1);
    // araclar.set("Mouse", 2);
    // araclar.set("Kitap", 3);
    // const obs = from(araclar);
    // obs.subscribe(data => {
    //   console.log(data);
    // });

    // const button = document.getElementsByTagName("button")[0];
    // button.addEventListener("click", () => {
    //   console.log("tıklandı")
    // });

    // const obs = fromEvent(button, "click");
    // obs.subscribe(event => {
    //   console.log(event);
    // });

    // const obs = generate(100, x => x > 0, x => x = x - 3);
    // obs.subscribe(data => console.log(data));

    // interval

    // const obs = interval(5000);
    // obs.subscribe(data => console.log("Merhaba", data));

    // const obs = of(1, 3, 5, "ahmet", [true, false]);

    // obs.subscribe(data => {
    //   console.log(data);
    // })

    // range

    // const obs = range(555, 50);
    // obs.subscribe(data => console.log(data));

    // throwError

    // throwError(new Error("Örnek bir hata")).subscribe(data => console.log(data));

    // timer

    // timer(3000, 250).subscribe(() => {
    //   console.log("Merhaba");
    // })

    // iif

    // let state : boolean = true;
    // const obs = iif(() => state, of(3, 5, 7), of(10, 11, 12));
    // obs.subscribe(data => console.log(data));
    // state = false;
    // obs.subscribe(data => console.log(data));

    // combineLatest

    // const obs1 = timer(1500, 1000);
    // const obs2 = timer(500, 1000);
    // const obs3 = timer(250, 1000);

    // const combine = combineLatest(obs1, obs2, obs3);
    // combine.subscribe(data => console.log(data));

    // concat

    // const obs1 = of(1, 2, 3);
    // const obs2 = of(4, 5, 6);
    // const obs3 = of(7, 8, 9);

    // const obs4 = concat(obs1, obs2, obs3);
    // obs4.subscribe(data => console.log(data));

    // forkJoin

    // 3, 6, 9 döner
    // const obs1 = of(1, 2, 3);
    // const obs2 = of(4, 5, 6);
    // const obs3 = of(7, 8, 9);

    // const obs4 = forkJoin(obs1, obs2, obs3);
    // obs4.subscribe(data => console.log(data));

    // merge

    // const obs1 = of('a', 'b', 'c');
    // const obs2 = of(1, 2, 3);
    // const obs3 = merge(obs1, obs2);
    // obs3.subscribe(data => console.log(data));

    // partition

    // const obs1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    // const [obs2, obs3] = partition(obs1, x => x % 3 == 0);
    // obs2.subscribe(data => console.log(data + " şarta uyanlar"));
    // obs3.subscribe(data => console.log(data + " şarta uymayanlar"));

    // race

    // const obs1 = interval(1000).pipe(mapTo("Ahmet"));
    // const obs2 = interval(250).pipe(mapTo("Mehmet"));
    // const obs3 = interval(2000).pipe(mapTo("Hilmi"));

    // race(obs1, obs2, obs3).subscribe(data => console.log(data));

    // zip

    // 1, 4, 7 döner mesela
    // const obs1 = of(1, 2, 3);
    // const obs2 = of(4, 5, 6);
    // const obs3 = of(7, 8, 9);

    // zip(obs1, obs2, obs3).subscribe(data => console.log(data));

    // pipe

    // const obs = of(1, 2, 3, 4, 5, 123, 1232, 435, 56675, 6576435, 1243, 4545);
    // obs.pipe(filter(x => x % 3 == 0), map(x => x + ' değeri'))
    // .subscribe(data => console.log(data));

    // audit

    // const obs = interval(1000);
    // const obs2 = obs.pipe(audit(x => interval(2000)), map(x => x + ' değeri'));
    // obs2.subscribe(data => console.log(data));

    // auditTime

    //     const obs = interval(1000);
    // const obs2 = obs.pipe(auditTime(2000), map(x => x + ' değeri'));
    // obs2.subscribe(data => console.log(data));
  }
}
