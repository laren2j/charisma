import { Slider } from './slider';
import { MainSection } from './main-section';
import { Grid } from './grid';
import { Feature } from './feature';
import { Contact } from './contact';
import { Footer } from './footer';
import { FooterSub } from './footer-sub';

export class Home {
    slider: Array<Slider>;
    mainSection: MainSection;
    grid: Array<Grid>;
    feature: Array<Feature>;
    contact: Contact;
    footer:  Footer;
    footerSub: FooterSub;
}
