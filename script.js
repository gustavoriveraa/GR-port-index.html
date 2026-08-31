const galleries = document.querySelectorAll('.gallery');


galleries.forEach(gallery => {

  const items = gallery.querySelectorAll('.gallery__item');

  const panel = gallery.querySelector('.gallery__panel');

  const title = gallery.querySelector('.gallery__title');

  const text = gallery.querySelector('.gallery__text');

  const link = gallery.querySelector('.gallery__link');


  items.forEach(item => {

    item.addEventListener('click', () => {

      const isActive = item.classList.contains('is-active');


      /* Quitar estado activo de todos los cuadros */

      items.forEach(i => {
        i.classList.remove('is-active');
      });


      /* Si se vuelve a hacer clic sobre el cuadro activo,
         se cierra el panel */

      if (isActive) {

        panel.classList.remove('is-open');

        title.textContent = '';

        text.textContent = '';

        if (link) {
          link.href = '#';
        }

      } else {

        /* Activar el cuadro seleccionado */

        item.classList.add('is-active');


        /* Cargar información */

        title.textContent = item.dataset.title;

        text.textContent = item.dataset.text;


        /* Cargar enlace */

        if (link) {
          link.href = item.dataset.link;
        }


        /* Abrir panel */

        panel.classList.add('is-open');

      }

    });

  });

});