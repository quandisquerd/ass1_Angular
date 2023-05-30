import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService, private param: ActivatedRoute, private router: Router) {
    this.param.paramMap.subscribe(data => {
      const id = String(data.get("id"));
      this.productService.getOne(id).subscribe(c => {
        this.product = c
      })
    })
  }
  HandleEdit() {
    this.productService.Edit(this.product).subscribe(data => {
      console.log(data)
      this.router.navigate(['/admin/product'])
    })
  }
}
