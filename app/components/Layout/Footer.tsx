import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import testIds from '@app/utils/test-ids';
import SocialButtons from '../SocialButtons';

const Footer = () => (
  <footer
    className="font-site p-8 grid md:grid-cols-[1fr_2fr]"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <div className="col-start-1 flex flex-col gap-y-2 p2 ml-1">
      <Logo className="md:w-1/5 md:h-1/5 w-2/3 h-2/3 fill-blue-site" />
      <p>© 2024 Beauvoir Holiday Villa</p>
      <p>chezbeauvoir@gmail.com</p>
      <SocialButtons fillColour="#95c7f4" className="mt-12" />
    </div>
  </footer>
);

export default Footer;
