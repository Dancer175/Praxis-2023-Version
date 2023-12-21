import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// navbar
import { initNavbar } from '../components/init_navbar';
// mapbox
import { initMapbox } from '../components/init_mapbox';


document.addEventListener('turbolinks:load', () => {
  initNavbar();
  initMapbox();
})
