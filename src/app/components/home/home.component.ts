import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any;
  products: any;
  
  constructor(private apiService: ApiService, private cartService: CartService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.apiService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  getProductsByCategory(category: string) {
    this.apiService.getProductsByCategory(category).subscribe((data: any) => {
      this.products = data;
    });
  }

  viewProductDetail(product: any) {
    this.router.navigate(['/product-detail', product.id]);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.toast.success("Check your cart item", " added successfully");
  }

}
