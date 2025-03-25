import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  imports: [GoogleMap],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {
  options: google.maps.MapOptions = {
    center: {lat: 50, lng: 20},
    zoom: 4
  };
}
