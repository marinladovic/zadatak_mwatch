import { ICredit } from '../../typings';
import './CreditThumbnail.scss';

interface Props {
  credit: ICredit;
}

/** Displaying individual cast/crew data */
function CreditThumbnail({ credit }: Props) {
  return (
    <div className="credit-thumbnail">
      <div className="credit-thumbnail__profile-container">
        {credit.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
            alt={credit.name}
            className="credit-thumbnail__profile"
          />
        ) : (
          <img
            src="/images/no-profile.png"
            alt={`profile placeholder for ${credit.name}`}
            className="credit-thumbnail__profile"
          />
        )}
      </div>
      <p className="credit-thumbnail__name">
        {credit.name || credit.original_name}
      </p>
      <p className="credit-thumbnail__job">
        {credit.character || credit.job || 'credit'}
      </p>
    </div>
  );
}

export default CreditThumbnail;
