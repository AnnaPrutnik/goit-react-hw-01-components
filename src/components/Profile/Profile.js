import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={`Avatar ${name}`} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{`@${tag}`}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {Object.entries(stats).map(stat => {
          return (
            <li key={stat[0]} className={s.item}>
              <span className={s.label}>{stat[0]}</span>
              <span className={s.quantity}>{stat[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

export default Profile;
