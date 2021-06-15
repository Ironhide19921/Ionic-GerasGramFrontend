import { Component, OnInit, Input, ViewChild } from '@angular/core';


declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  // @ViewChild('mapa', { static: false }) mapa;
   @ViewChild('mapa', {static: true}) mapa;

  constructor() { }

  ngOnInit() {

    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VyYTE5OTIxIiwiYSI6ImNqd21oeGFndzAzcW80NW53d3h4NzRwemkifQ.dCbB6WY57wYW3XXunOk2Vw';
    const map = new mapboxgl.Map({
        container: this.mapa.nativeElement,
        // container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ lng, lat ],
        zoom: 15
    });

    const marker = new mapboxgl.Marker()
          .setLngLat( [ lng, lat ] )
          .addTo( map );
  }

}
