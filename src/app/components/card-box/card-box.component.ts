import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/AccountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {

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

  constructor(private service: CardsService){

  }

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData(){
    this.service.getCard().subscribe(data =>{
      this.accountData.name = data.name;
      this.accountData.account.agency = data.account.agency;
      this.accountData.card.limit = data.card.limit;
      this.accountData.account.number = data.account.number;
      this.accountData.card.number = data.card.number.slipt(" ")[3]

    })
  }




}
