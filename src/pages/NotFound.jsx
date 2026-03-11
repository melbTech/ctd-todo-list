import styles from './NotFound.module.css';
import { Link } from 'react-router';

function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <h2>Page Not Found</h2>
        <p>The page you’re trying to visit doesn’t exist.</p>
        <Link to="/" className={styles.link}>
          Go back home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
