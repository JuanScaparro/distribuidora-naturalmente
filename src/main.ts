import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  /**
   * 
    {
      "img": "/assets/img/recipes-img/helado.jpg",
      "title": "Helado de Frutos Rojos",
      "ingredientsList": "1kg Frutos rojos, 250Gr Crema, 2Hs Freezer",
      "method": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      "img": "/assets/img/recipes-img/tomate.jpg",
      "title": "Sopa de Tomates",
      "ingredientsList": "2Kg Tomates, 1Lt Agua, 200Gr Cebolla",
      "method": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
      "img": "/assets/img/recipes-img/ensalada.jpg",
      "title": "Ensalada Natural",
      "ingredientsList": "500Gr Algo, 500Gr Algo mas, 300Gr Ganas",
      "method": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
      "img": "/assets/img/recipes-img/avena.jpg",
      "title": "Desayuno de yogurt y avena",
      "ingredientsList": "1Lt Yogurt, 200Gr avena, 100Gr Otra cosa",
      "method": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
   */