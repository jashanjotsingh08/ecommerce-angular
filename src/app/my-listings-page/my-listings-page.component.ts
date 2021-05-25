import { fakeMyListings } from './../fake-data';
import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];


  constructor() { }

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string):void{
    alert(`Deleting your lisitng with id ${listingId}`);
  }
}
