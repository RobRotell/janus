import Alpine from 'alpinejs'
import { Janus } from './Janus'


window.Alpine = Alpine


Alpine.data( 'janus', () => Janus )
Alpine.start()
