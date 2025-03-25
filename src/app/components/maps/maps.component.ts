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
    center: {lat: -19.50834073361128, lng: -42.57360633015932},
    zoom: 4
  };
}