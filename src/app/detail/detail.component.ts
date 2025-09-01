import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent } from "@ionic/angular/standalone";
import { PlaceHolderServices } from '../services/place-holder-services';
import { Post } from '../models/places-holder.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, CommonModule],
})
export class DetailComponent  implements OnInit {

  private routerActive = inject(ActivatedRoute);
  private _placesHolderService = inject(PlaceHolderServices);
  post : Post | null = null;
  ngOnInit() {
    let id = this.routerActive.snapshot.paramMap.get('id') ?? "";
    console.log(id);
    this._placesHolderService.getPlaceHolderById<Post>(id)
      .subscribe((response : Post) => {
        this.post = response;
        console.log(response);
      });
  }

}
