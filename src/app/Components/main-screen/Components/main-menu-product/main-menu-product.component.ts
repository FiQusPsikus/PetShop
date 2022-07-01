import { Component, Input, OnInit } from '@angular/core';
import { MainScreenService } from 'src/app/Services/main-screen.service';

@Component({
  selector: 'app-main-menu-product',
  templateUrl: './main-menu-product.component.html',
  styleUrls: ['./main-menu-product.component.css']
})
export class MainMenuProductComponent implements OnInit {
  @Input() item = '';
  constructor(private mainScreenService: MainScreenService) { }
  description: String = '';
  ngOnInit(): void {
    this.description = this.mainScreenService.DescriptionGet()
  }

}
