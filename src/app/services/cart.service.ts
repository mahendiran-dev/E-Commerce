import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  private cartItemCount = new BehaviorSubject<number>(0);


  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
    this.cartItemCount.next(this.cartItems.length);

  }

  getCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }


}
