import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const observable = new Observable<number>(data => {
      data.next(3);
      data.next(5);
      data.next(10);
      data.complete();
    });

    observable.subscribe(data => {
      console.log(data);
    });
  }
}
