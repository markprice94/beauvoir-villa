import classNames from 'classnames';
import { FacebookIcon } from './Icons/Facebook';
import { InstagramIcon } from './Icons/Instagram';

const SocialButtons = ({
  fillColour,
  className,
}: {
  fillColour?: string;
  className?: string;
}) => (
  <div className={classNames('flex gap-x-4 items-center', className)}>
    <a href="https://www.facebook.com/beauvoirboutenac/" target="__blank">
      <FacebookIcon className="w-8 h-8" fillColour={fillColour} />
    </a>
    <a href="https://www.instagram.com/beauvoir_villa" target="__blank">
      <InstagramIcon className="w-7 h-7" fillColour={fillColour} />
    </a>
  </div>
);

export default SocialButtons;
