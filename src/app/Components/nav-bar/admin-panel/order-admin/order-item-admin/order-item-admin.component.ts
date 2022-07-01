import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/Orders/orders.service';
import { OrderData } from 'src/Models/OrderData';

@Component({
  selector: 'app-order-item-admin',
  templateUrl: './order-item-admin.component.html',
  styleUrls: ['./order-item-admin.component.css']
})
export class OrderItemAdminComponent implements OnInit {

  constructor(private orderServe: OrdersService) { }
  @Input() orderData:String=''
  selectedState: string | undefined;
  order:OrderData = {
    details: '',
    order_id: 0,
    first_name: '',
    city: '',
    last_name: '',
    address: '',
    post_code: '',
    phone: '',
    name: ''
  }
  ngOnInit(): void {
    this.order = JSON.parse(String(this.orderData))
  }

  changeState(): void{
    this.orderServe.setOrderState(this.order.order_id, Number(this.selectedState)).subscribe((orderDescription:any) => {
      this.order.name = orderDescription.name
    })
  }

}
