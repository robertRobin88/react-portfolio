function Pages () {
    const pages = [
        
        {web: 'enigma.metropoliapoznan.pl', thumbnail: '/img/enigma.png', description: `<p>Stronę wykonałem w 2022 r.  pracując w sm32 STUDIO. </p> <p>JOOMLA</p> <p>WCAG 2.1,  PWA, RWD <p>Użyte komponenty: </p> GURU PRO – E-learning, Kunena – Forum, RSForm PRo – Formularze rejestracji, Smart SLider 3 – Pokaz slajdów, RSEvents – Wydarzenia, AcyMailing -Newsletter`},
        {web: 'fundacjaimago.pl', thumbnail: '/img/imago.jpg', description: '<p>Stronę wykonałem w 2022 r. pracując w sm32 STUDIO.</p> <p>WORDPRESS</p> <p>WCAG, RWD</p>'},
        {web: 'szpitalkarowa.pl', thumbnail: '/img/karowa.jpg', description: '<p>Stronę wykonałem w 2022r. pracując w sm32 STUDIO.</p> <p>WORDPRESS</p> <p>WCAG, RWD</p>'},
        {web: 'mugsmania.co.uk', thumbnail: '/img/mugsmania.jpg', description: '<p>Stronę wykonałem w 2021 r. pracując w sm32 STUDIO.</p> <p>WORDPRESS</p> <p>WooCommerce + gotowy szablon</p>'},
        {web: 'doc-x.pl', thumbnail: '/img/doc.jpg', description: '<p>Stronę wykonałem w 2021 r. pracując w sm32 STUDIO.</p> <p>WORDPRESS + gotowy szablon</p> <p>RWD</p>'},
        {web: 'r3m.pl', thumbnail: '/img/r3m.jpg', description: '<p>Stronę wykonałem w 2021 r. pracując w sm32 STUDIO.</p> <p>WORDPRESS + gotowy szablon</p> <p>RWD</p>'},
        {web: 'eneduerabe.net', thumbnail: '/img/eneduerabe.jpg', description: '<p>Stronę wykonałem w 2020 r. pracując w sm32 STUDIO.</p> <p>WORDPRESS</p> <p>RWD</p>'},
        {web: 'barnika.pl', thumbnail: '/img/barnika.jpg', description: '<p>Stronę wykonałem w 2019 r. pracując w sm32 STUDIO.</p> <p>WORDPRESS</p> <p>RWD</p>'},
        {web: 'lukar.com.pl', thumbnail: '/img/lukar.jpg', description: '<p>Stronę wykonałem w 2019r. pracując w sm32 STUDIO.</p> <p>WORDPRESS</p> <p>RWD</p> '}

      ]
      const myPages = [];
      
      pages.forEach(el => {
          myPages.push(
            `<div class="col-md-12 web-box">
            <div class="row">
                <div class="col-md-6">
                  <h3><a href="https://${el.web}" target="_blank">${el.web}</a></h3>
                  <p>${el.description}</p>
                </div>
                <div class="col-md-6">
                  <img class="img-fluid" src=${el.thumbnail} alt="webimage" />
                </div>
              </div>
            </div>`
        )
      })
        return (
            <>
               <div className="row" dangerouslySetInnerHTML={{__html: myPages.join("")}} />
            </>
        )
}
export default Pages;