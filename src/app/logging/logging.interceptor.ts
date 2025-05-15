import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request:', req.url, req.method);
  return next(req).pipe(
    tap(event => {
      console.log('Response:', event);
  })
);
};