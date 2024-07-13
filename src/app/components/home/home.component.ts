import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any;
  products: any;

  constructor(private apiService: ApiService, private cartService: CartService, private authService: AuthService, private router: Router, private toast: NgToastService) { }

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
    if (this.authService.isAuthenticated()) {
      this.cartService.addToCart(product);
      this.toast.success("Success", "Item added to cart", 4000);
    } else {
      Swal.fire('Add to Cart item Faild', 'You must log in to add items to the cart', 'error');

    }
  }
}
