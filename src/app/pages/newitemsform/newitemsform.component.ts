import { Component } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsserviceService } from '../itemsservice.service';
import { listitems } from '../listofitems/listofitems.component';

@Component({
  selector: 'app-newitemsform',
  templateUrl: './newitemsform.component.html',
  styleUrls: ['./newitemsform.component.scss']
})
export class NewitemsformComponent {
  inventoryForm!: FormGroup;
  Submitted = false;
  productobj: listitems = new listitems();
  productsobj: any = {};
  paramid: any;
  editdata: any;
  constructor(private fb: FormBuilder,
    private service: ItemsserviceService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      Productquantity: [''],
      Productprice: [''],
    })
    this.paramid = this.route.snapshot.params['data'];
    console.log(this.paramid)
    if (this.paramid) {
      this.getidproduct(this.paramid)
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.inventoryForm.controls
  }

  onSubmit() {
    this.Submitted = true
    if (this.inventoryForm.invalid) {
      return;
    }
    console.log(this.inventoryForm.value.id);
    this.productobj.productName = this.inventoryForm.value.productName;
    this.productobj.category = this.inventoryForm.value.category;
    this.productobj.Productquantity = this.inventoryForm.value.Productquantity;
    this.productobj.Productprice = this.inventoryForm.value.Productprice;
    if (this.paramid) {
      this.inventoryForm.value.id = this.paramid
      this.service.updateproduct(this.inventoryForm.value, this.paramid).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/']);
        })
    }
    else {
      this.service.createproduct(this.productobj).subscribe(res => {
        console.log(res)
        alert("success fully created")
        this.inventoryForm.reset();
      }, err => {
        alert("something worng")
      }
      )
      this.router.navigate(['/'])
    }
  }
  getidproduct(id: any) {
    this.service.getidproduct(id).subscribe(
      res => {
        console.log(res)
        this.productsobj = res
      })
  }
}
