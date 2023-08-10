import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/AccountDataModel';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  accountData: AccountDataModel = {
    name:"Zico da Silva",
    account:{
      agency:"4589",
      number:"45369-6"
    },
    card:{
      limit: 1000,
      number:"456"
    }
  };

}
