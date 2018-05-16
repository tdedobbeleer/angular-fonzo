import {Component, OnInit, TemplateRef} from "@angular/core";
import {TranslationService} from "./services/translation.service";
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;
  modalImage: any;

  private nl: string = "nl";
  private en: string = "en";
  private es: string = "es";


  constructor(private _translate: TranslationService, private _modalService: BsModalService) {
    }

    ngOnInit() {
      let currentLang = localStorage.getItem('lang') || navigator.language || this.en;
      if (currentLang.startsWith(this.en)) {
        currentLang = this.en;
      } else if (currentLang.startsWith(this.nl)) {
        currentLang = this.nl;
      } else if (currentLang.startsWith(this.es)) {
        currentLang = this.es;
      }
      else {
        currentLang = this.en;
      }

      localStorage.setItem('lang', currentLang);
      this.selectLang(currentLang);

      console.log("" +
        "               _______.\n" +
        "    ______    | .   . |\\\n" +
        "   /     /\\   |   .   |.\\\n" +
        "  /  '  /  \\  | .   . |.'|\n" +
        " /_____/. . \\ |_______|.'|\n" +
        " \\ . . \\    /  \\ ' .   \\'|\n" +
        "  \\ . . \\  /    \\____'__\\|\n" +
        "   \\_____\\/ " +
        "\n\nCreated by Tom De Dobbeleer (https://github.com/tdedobbeleer)")
    }

  openModal(template: TemplateRef<any>, event: Event) {
    this.modalImage = event.srcElement.getAttribute("src");
    this.modalRef = this._modalService.show(
      template,
      Object.assign({}, {class: 'modal-lg'})
    );
  }

  selectLang(lang: string) {
    // set default;
    localStorage.setItem('lang', lang);
    this._translate.use(lang);
    }
}
