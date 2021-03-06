import { Component } from '@angular/core'
import { faArrowDown, faFlask } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'home-index',
  templateUrl: './homeIndex.component.pug',
  styleUrls: ['./homeIndex.component.scss'],
})
export class HomeIndexComponent {
  githubURL = 'https://github.com/Eugeny/tabby'
  releaseURL = `${this.githubURL}/releases/latest`

  _downloadIcon = faArrowDown
  _githubIcon = faGithub
  _webIcon = faFlask

  screenshots = {
    window: require('assets/screenshots/window.png'),
    tabs: require('assets/screenshots/tabs.png'),
    ssh: require('assets/screenshots/ssh.png'),
    serial: require('assets/screenshots/serial.png'),
    win: require('assets/screenshots/win.png'),
  }
}
