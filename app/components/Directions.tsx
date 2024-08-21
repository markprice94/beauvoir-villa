'use client';
import classNames from 'classnames';
import Carousel, { DotProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export default function Directions() {
  return (
    <div className="xl:max-w-4xl xl:mx-auto md:mx-16 rounded-lg md:border-white md:border p-8 directions-box">
      <h5>HOW TO FIND US</h5>
      <Carousel
        customDot={<CustomDirectionsDot />}
        showDots
        responsive={responsive}
        dotListClass="gap-x-4 my-4"
        arrows={false}
        partialVisbile={false}
        containerClass="pb-8"
      >
        <div>
          <h5>
            <strong>From Calais (Around 7 hours / 750 km)</strong>
          </h5>
          <ol>
            <li>
              Take the A16 motorway from Calais and continue to the A28 towards
              Rouen.
            </li>
            <li>
              Continue on the A28, passing Le Mans, then join the A10 near Tours
              heading towards Bordeaux.
            </li>
            <li>Take exit 36 toward Pons from the A10.</li>
            <li>Follow D142 and D732 to Beauvoir Villa.</li>
          </ol>
          <h5>
            <strong>From St. Malo (Around 4 hours / 400 km)</strong>
          </h5>
          <ol>
            <li>Take the N137 south from St. Malo towards Rennes.</li>
            <li>
              From Rennes, follow signs for the N136 bypass and take the N137
              heading south toward Nantes.
            </li>
            <li>
              Continue on the A83 to Niort and then join the A10 towards
              Bordeaux.
            </li>
            <li>
              Exit at Junction 36 (Pons) and follow D142 and D732 to Beauvoir
              Villa.
            </li>
          </ol>
          <h5>
            <strong>From Le Havre (Around 5 hours / 550 km)</strong>
          </h5>
          <ol>
            <li>Take the A29 from Le Havre heading towards Rouen.</li>
            <li>Merge onto the A13, then A28 towards Le Mans.</li>
            <li>Continue on the A10 towards Bordeaux.</li>
            <li>
              Take exit 36 for Pons and follow D142 and D732 to reach Beauvoir
              Villa.
            </li>
          </ol>
        </div>

        <div>
          <h5>
            <strong>From Bordeaux-Mérignac Airport (BOD)</strong>
          </h5>
          <ol>
            <li>Distance: 122 km (approximately 1 hour 30 minutes by car).</li>
            <li>
              After arriving at Bordeaux-Mérignac Airport, you can rent a car.
              Take the A630 and then merge onto the A10 towards Paris/Angoulême.
            </li>
            <li>
              Exit at Junction 36 for Pons and follow D142 and D732 to Beauvoir
              Villa.
            </li>
          </ol>
          <h5>
            <strong>From La Rochelle-Île de Ré Airport (LRH)</strong>
          </h5>
          <ol>
            <li>Distance: 119 km (approximately 1 hour 40 minutes by car).</li>
            <li>
              Rent a car at La Rochelle Airport and take the N237 to join the
              A837.
            </li>
            <li>
              Continue to follow the A837 and D732 towards Pons, and then on to
              Beauvoir Villa.
            </li>
          </ol>
        </div>

        <div>
          <h5>
            <strong>From Paris by TGV (High-Speed Train)</strong>
          </h5>
          <ol>
            <li>
              Take the TGV from <strong>Paris Montparnasse</strong> to{' '}
              <strong>Angoulême</strong> (approximately 2 hours and 15 minutes).
            </li>
            <li>
              From Angoulême, you can either rent a car or take a local train to{' '}
              <strong>Saintes</strong>, which is the nearest large train
              station.
            </li>
            <li>
              From Saintes, Beauvoir Villa is a 40-minute drive (approximately
              45 km).
            </li>
          </ol>
          <h5>
            <strong>From Bordeaux by Train</strong>
          </h5>
          <ol>
            <li>
              Take a regional train from <strong>Bordeaux Saint-Jean</strong>{' '}
              station to <strong>Saintes</strong> (approximately 1.5 hours).
            </li>
            <li>
              From Saintes, you can either take a taxi or rent a car for the
              40-minute drive to Beauvoir Villa.
            </li>
          </ol>
        </div>
      </Carousel>
    </div>
  );
}

const CustomDirectionsDot = ({ onClick, ...rest }: DotProps) => {
  const { index, active } = rest;
  const carouselItems = ['Car', 'Air', 'Train'];
  if (!onClick) {
    return null;
  }
  return (
    <button
      className={classNames(active ? 'text-white' : 'text-grey-site')}
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
    >
      <h4 className="underline">{carouselItems[index ?? 0]}</h4>
    </button>
  );
};
