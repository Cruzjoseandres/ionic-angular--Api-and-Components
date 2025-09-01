import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { PlaceHolderServices } from '../services/place-holder-services';
import { Post } from '../models/places-holder.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  private _placeHolderService = inject(PlaceHolderServices);
  postsList : Post[] | null = null;
  private _router = inject(Router);
  ngOnInit() {
    this._placeHolderService.getPlaceHolder<Post>()
    .subscribe((response: Post[]) => {
    
      this.postsList = response;
    });
  }

  detail(id: number) {
    this._router.navigate(['detail', id]);
  }

}
