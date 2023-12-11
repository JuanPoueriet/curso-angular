import { Component, ElementRef, Renderer2 } from '@angular/core';


interface Municipality {
  municipality: string;
  municipality_id: string;
  filtered: boolean;
  quantity_of_parcels_per_municipality: number;
  square_meters_per_municipality: number;
}

interface Province {
  province: string;
  province_id: string;
  filtered: boolean;
  municipalities: Municipality[];
}

interface Group {
  group: string;
  group_id: string;
  filtered: boolean;
  provinces: Province[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  grupos: Group[] = [
    {
      "group": "1",
      "group_id": "ipXmC3rg",
      "filtered": false,
      "provinces": [
        {
          "province": "Santo Domingo",
          "province_id": "DTWHeVPj",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Santo Domingo Este",
              "municipality_id": "LL5QlqJA",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 2,
              "square_meters_per_municipality": 200.72
            },
            {
              "municipality": "Santo Domingo Norte",
              "municipality_id": "gOX73hGS",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 2,
              "square_meters_per_municipality": 200
            },
            {
              "municipality": "Distrito Nacional",
              "municipality_id": "E0Sf9ZAA",
              "filtered": true,
              "quantity_of_parcels_per_municipality": 1,
              "square_meters_per_municipality": 100.52
            }
          ]
        },
        {
          "province": "Monte Plata",
          "province_id": "csIjxvbe",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Yamasá",
              "municipality_id": "dk49IXRI",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 2,
              "square_meters_per_municipality": 200
            },
            {
              "municipality": "Sabana Grande de Boyá",
              "municipality_id": "hnGD803r",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 2,
              "square_meters_per_municipality": 200.96
            }
          ]
        }
      ]
    },
    {
      "group": "2",
      "group_id": "qv1DM15i",
      "filtered": false,
      "provinces": [
        {
          "province": "Samaná",
          "province_id": "vrO44yDk",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Las Terrenas",
              "municipality_id": "6mqrELny",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 2,
              "square_meters_per_municipality": 200
            }
          ]
        },
        {
          "province": "La Altagracia",
          "province_id": "X8xv9BGJ",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Higüey",
              "municipality_id": "nVTdF50v",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 2,
              "square_meters_per_municipality": 200
            },
            {
              "municipality": "Yuma",
              "municipality_id": "lzC2FbGC",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 2,
              "square_meters_per_municipality": 110
            }
          ]
        },
        {
          "province": "San Pedro",
          "province_id": "ZHDSoAjw",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "San Pedro",
              "municipality_id": "Ix7S0wZD",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 1,
              "square_meters_per_municipality": 100
            },
            {
              "municipality": "Bayaibe",
              "municipality_id": "aWN8VLVG",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 1,
              "square_meters_per_municipality": 100
            }
          ]
        },
        {
          "province": "La Romana",
          "province_id": "n4P2ruS8",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Bayaibe",
              "municipality_id": "ElKLdxu8",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 1,
              "square_meters_per_municipality": 100
            }
          ]
        }
      ]
    },
    {
      "group": "3",
      "group_id": "8mMr8lWH",
      "filtered": false,
      "provinces": [
        {
          "province": "San Pedro",
          "province_id": "lCoy7JQN",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Bayaibe",
              "municipality_id": "2kGZWX0T",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 1,
              "square_meters_per_municipality": 100
            }
          ]
        },
        {
          "province": "Monte Cristi",
          "province_id": "nc0Jd7Fn",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Guayubín",
              "municipality_id": "V2dLD0Px",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 1,
              "square_meters_per_municipality": 100
            }
          ]
        }
      ]
    },
    {
      "group": "4",
      "group_id": "1mRgPWIs",
      "filtered": false,
      "provinces": [
        {
          "province": "Santo Domingo",
          "province_id": "K7EsgPYO",
          "filtered": false,
          "municipalities": [
            {
              "municipality": "Santo Domingo Este",
              "municipality_id": "BP1McSII",
              "filtered": false,
              "quantity_of_parcels_per_municipality": 1,
              "square_meters_per_municipality": 100
            }
          ]
        }
      ]
    }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  groupColumn: boolean = true;
  provinceNameColumn: boolean = true;
  municipalityColumn: boolean = true;
  quantity_of_parcels_per_municipality: boolean = true;
  square_meters_per_municipality: boolean = true;

  municipalities: boolean = true;
  colum6: boolean = true;
  colum7: boolean = true;
  colum8: boolean = true;
  

  toggleClase(a: any, b: any, c: any, parentElement: any, event: Event) {
    const element = (event.target as HTMLElement).parentElement;
    // const element2 = (event.target as HTMLElement).parentElement;
    // console.log(a, b, c);
    // console.log(element!.parentElement!.parentElement!.parentElement!.children.length);
    console.log(element!.parentElement!.parentElement!.parentElement!.parentElement);
    // console.log(element!.parentElement!.parentElement!.parentElement!.children.length);

    if (parentElement.children.length > 1) {
      if (element) {
        this.renderer.addClass(element, 'mi-clase');

        // Escuchar el final de la animación
        const onAnimationEnd = () => {
          console.log('Animación finalizada');
          if (element.parentNode) {
            this.grupos[a].provinces[b].municipalities[c].filtered = true;
            // this.renderer.removeChild(element.parentNode, element);
          }
          element.removeEventListener('animationend', onAnimationEnd);
        };

        element.addEventListener('animationend', onAnimationEnd);
      }
    } else {

      if (element!.parentElement!.parentElement!.parentElement!.children.length > 1) {

        this.renderer.addClass(element!.parentElement!.parentElement, 'mi-clase');

        const onAnimationEnd = () => {
          console.log('Animación finalizada');
          if (element!.parentElement!.parentElement!.parentNode) {
            this.grupos[a].provinces[b].filtered = true;
            // this.renderer.removeChild(element.parentNode, element);
          }
          element!.parentElement!.parentElement!.removeEventListener('animationend', onAnimationEnd);
        };
        element!.parentElement!.parentElement!.addEventListener('animationend', onAnimationEnd);

      }
      else {
        this.renderer.addClass(element!.parentElement!.parentElement!.parentElement!.parentElement, 'mi-clase');

        const onAnimationEnd = () => {
          console.log('Animación finalizada');
          if (element!.parentElement!.parentElement!.parentElement!.parentElement!.parentNode) {
            this.grupos[a].filtered = true;
            // this.renderer.removeChild(element.parentNode, element);
          }
          element!.parentElement!.parentElement!.parentElement!.parentElement!.removeEventListener('animationend', onAnimationEnd);
        };
        element!.parentElement!.parentElement!.parentElement!.parentElement!.addEventListener('animationend', onAnimationEnd);

      }
    }
  }

}
