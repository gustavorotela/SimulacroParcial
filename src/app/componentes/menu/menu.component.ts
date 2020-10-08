import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private miServicio:MiHttpService) { }

  Logout()
  {
        
  }

  ngOnInit(): void {
  }

}
