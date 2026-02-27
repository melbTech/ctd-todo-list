import styles from './About.module.css';
function About() {
  return (
    <div className={styles.about}>
      <p>
        This is a simple Todo List app built with React. You can add todos, mark
        them complete, edit them, and sort or search through your list.
      </p>
      <p>Built by Melvin.</p>
    </div>
  );
}

export default About;
