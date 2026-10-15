import productCatalog from '../assets/product-catalog.jpg'
import starCinema from '../assets/star-cinema.jpg'
import taskManager from '../assets/task-manager.jpg'

// Add a new project here and it appears automatically in the Projects section.
const projects = [
  {
    id: 1,
    title: 'Product Catalog',
    description:
      'A product catalog with live search by name, category filtering, price sorting and a one-click reset button. It shows how React state can drive a list that updates instantly as the user types or changes a filter.',
    image: productCatalog,
    alt: 'Product Catalog website showing a search box, category and price filters and a grid of product cards',
    live: 'https://rococo-wisp-b31b6a.netlify.app',
    tags: ['React', 'useState', 'Filtering', 'map()'],
  },
  {
    id: 2,
    title: 'Star Cinema',
    description:
      'An online cinema ticket booking site. Visitors can browse the movies that are now showing, search by title, filter by genre, see rating and duration on every card, and open a details page for each movie.',
    image: starCinema,
    alt: 'Star Cinema website showing a movie search box, genre filter buttons and movie cards with ratings',
    live: 'https://incredible-bubblegum-516c72.netlify.app',
    tags: ['React', 'Routing', 'Search', 'Genre filter'],
  },
  {
    id: 3,
    title: 'Task Manager Dashboard',
    description:
      'A Persian, right-to-left task dashboard with live statistics (total, pending, in progress, completed), search, status and priority filters, and the ability to add, edit and delete tasks.',
    image: taskManager,
    alt: 'Persian task manager dashboard with task statistics, search and filters, and one task card',
    live: 'https://aquamarine-lollipop-54a048.netlify.app',
    tags: ['React', 'CRUD', 'RTL', 'State management'],
  },
]

export default projects
