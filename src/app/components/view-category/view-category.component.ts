import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {
  categories: any;
  products: any;

  constructor(
    private apiService: ApiService, private cartService: CartService, private router: Router, private route: ActivatedRoute, private toast: NgToastService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.getProductsByCategory(category);
      } else {
        this.getAllCategories();
      }
    });
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
    this.toast.success("Check your cart item", " added successfully",)
  }
}
