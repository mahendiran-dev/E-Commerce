import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  searchText: any
  products: any
  constructor(private cartService: CartService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
    this.FindProduct()
  }
  FindProduct() {
    this.apiService.searchProducts(this.searchText).subscribe((data: any) => {
      this.products = data
    })

    this.searchText = ''

  }
}
