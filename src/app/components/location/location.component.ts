import { Component } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  imports: [GoogleMap, MapMarker],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {}
