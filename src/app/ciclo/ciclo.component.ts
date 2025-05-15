import { Component } from '@angular/core';
import { OnInit, OnChanges, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy {


  ngOnInit(): void {
    //Observables
    const observable = new Observable<string>(observer => { //Emitir Valores
      observer.next('Primer valor');
      observer.next('Segundo valor');
      observer.complete();
    });

    observable.subscribe({ //Suscribirse al observable
      next: (value) => console.log(value),
      error: (error) => console.error(error),
      complete: () => console.log('Completado')
    });


    //Promesas
    const promise = new Promise<string>((resolve, reject) => { //Emitir Valores
      setTimeout(() => {
        resolve('Operacion completada');
      }, 2000);
    });

    promise.then  (value => console.log(value)) //Suscribirse a la promesa
    .catch(err => {console.error('Error:', err)})

  }

  ngOnChanges(): void {
    console.log('Component properties have changed');
  }

  ngOnDestroy(): void {
    console.log('Component is being destroyed');
  }
}
