import { Component, ElementRef, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/Orders/orders.service';
import { OrderData } from 'src/Models/OrderData';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  constructor(private orderService:OrdersService, private elRef:ElementRef) { }
  orderData:String[] = []
  selectedState: string | undefined;
  orderDataAll:String[] = []
  changeState(): void{
    this.orderData = []
    this.orderDataAll.forEach((order:String)=>{
      let orderObject = JSON.parse(<string>(order))
      if(orderObject.state_id == this.selectedState){
        this.orderData.push(order)
      }
    })

  }

  ngOnInit(): void {
    this.orderService.getOrderList().subscribe((x:OrderData[]) => {
      x.forEach(order => {
        this.orderService.getOrderDescription(order.order_id).subscribe((orderDescription:any) => {
          let orderText:Array<String> = []
          orderDescription.forEach((orderElement:any)=>{
            orderText.push(orderElement.name+" x"+orderElement.count)
          })
          order.details = orderText.join(', ')
          this.orderData.push(JSON.stringify(order))
        })
      })
      this.orderDataAll = this.orderData
    })
  }

}
