import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// visibility switch
import { initVisibilitySwitch } from '../components/init_visibility_switch';
// navbar
import { initNavbar } from '../components/init_navbar';
// mapbox
import { initMapbox } from '../components/init_mapbox';

document.addEventListener('turbolinks:load', () => {
  initVisibilitySwitch();
  initNavbar();
  initMapbox();
})
