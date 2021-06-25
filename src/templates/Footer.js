import getHash from '../utils/getHash'
import getData from '../utils/getData'
import resolveRoutes from '../utils/resolveRoutes'

const Footer = async () => {

    const hash = await getHash()
    const data = await getData()
    const route = await resolveRoutes(hash)

    let ancles = []
    for (let i = 1; i <= data.info.pages; i++){
        ancles.push(i)
    }

    const pages = ancles.length
    const actualPage = route === '/:pages' ? parseInt(hash.split("=").pop()) : '/'


    // console.log(hash)
    // console.log(route)
    // console.log(ancles)
    console.log(pages)
    console.log(actualPage)
    

    const view =  generateFooter(route, pages, actualPage)
    
    console.log(view)

    return view
}

const generateFooter = (route, pages, actualPage)=>{

    switch (route){
        case '/' : 
           return `
           <h4>Pages</h4>
           <div class="Footer-pages">
           <span class="footer-nav-button actual-page">1</span>
           <a class="footer-nav-button" href="#/?page=2/">2</a>
           <a class="footer-nav-button" href="#/?page=3/">3</a>
           <a class="footer-nav-button footer-nav-limit" href="#/?page=${pages}/">${pages}</a>
           </div>`
        case '/:id': 
            return ` `
        case '/:pages':
            if(actualPage === 0 || actualPage === 1){
                return `
                <h4>Pages</h4>
                <div class="Footer-pages">
                <span class="footer-nav-button actual-page">1</span>
                <a class="footer-nav-button" href="#/?page=2/">2</a>
                <a class="footer-nav-button" href="#/?page=3/">3</a>
                <a class="footer-nav-button footer-nav-limit" href="#/?page=${pages}/">${pages}</a>
                </div>`
            }else if (actualPage === 2){
                return `
                <h4>Pages</h4>
                <div class="Footer-pages">
                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>
                <span class="footer-nav-button actual-page">${actualPage}</span>
                <a class="footer-nav-button" href="#/?page=${actualPage+1}/">${actualPage+1}</a>
                <a class="footer-nav-button" href="#/?page=${actualPage+2}/">${actualPage+2}</a>
                <a class="footer-nav-button footer-nav-limit" href="#/?page=${pages}/">${pages}</a>
                </div>`
            }else if (actualPage === 3){
                return `
                <h4>Pages</h4>
                <div class="Footer-pages">
                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-1}/">${actualPage-1}</a>
                <span class="footer-nav-button actual-page">${actualPage}</span>
                <a class="footer-nav-button" href="#/?page=${actualPage+1}/">${actualPage+1}</a>
                <a class="footer-nav-button" href="#/?page=${actualPage+2}/">${actualPage+2}</a>
                <a class="footer-nav-button footer-nav-limit" href="#/?page=${pages}/">${pages}</a>
                </div>`
            }else if (actualPage > 3 && actualPage < pages - 2){
                return `
                <h4>Pages</h4>
                <div class="Footer-pages">
                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-2}/">${actualPage-2}</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-1}/">${actualPage-1}</a>
                <span class="footer-nav-button actual-page">${actualPage}</span>
                <a class="footer-nav-button" href="#/?page=${actualPage+1}/">${actualPage+1}</a>
                <a class="footer-nav-button" href="#/?page=${actualPage+2}/">${actualPage+2}</a>
                <a class="footer-nav-button footer-nav-limit" href="#/?page=${pages}/">${pages}</a>
                </div>`
            }else if (actualPage === pages - 2){
                return `
                <h4>Pages</h4>
                <div class="Footer-pages">
                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-2}/">${actualPage-2}</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-1}/">${actualPage-1}</a>
                <span class="footer-nav-button actual-page">${actualPage}</span>
                <a class="footer-nav-button" href="#/?page=${actualPage+1}/">${actualPage+1}</a>
                <a class="footer-nav-button footer-nav-limit" href="#/?page=${pages}/">${pages}</a>
                </div>`
            }else if (actualPage === pages - 1){
                return `
                <h4>Pages</h4>
                <div class="Footer-pages">
                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-2}/">${actualPage-2}</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-1}/">${actualPage-1}</a>
                <span class="footer-nav-button actual-page">${actualPage}</span>
                <a class="footer-nav-button footer-nav-limit" href="#/?page=${pages}/">${pages}</a>
                </div>`
            }else if (actualPage === pages){
                return `
                <h4>Pages</h4>
                <div class="Footer-pages">
                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-2}/">${actualPage-2}</a>
                <a class="footer-nav-button" href="#/?page=${actualPage-1}/">${actualPage-1}</a>
                <span class="footer-nav-button actual-page">${pages}</span>
                </div>`
            }else {
                return ``
            }
    }

}

export default Footer