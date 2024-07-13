import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private authService: AuthService,private cartService: CartService,private router: Router,private toast:NgToastService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.apiService.getProductById(productId).subscribe((data: any) => {
        this.product = data;
      });
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  addToCart(product: any) {
    if (this.authService.isAuthenticated()) {
      this.cartService.addToCart(product);
      this.toast.success( "Success", "Item added to cart",  4000 );
    } else {
      Swal.fire('Add to Cart item Faild', 'You must log in to add items to the cart', 'error');

    }
  }

}
