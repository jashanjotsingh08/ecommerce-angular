import { ListingsService } from '../listings.service';
import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService
      .getListingsForUser()
      .subscribe((listings) => (this.listings = listings));
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingId
      );
    });
    alert(`Deleting your lisitng with id ${listingId}`);
  }
}
