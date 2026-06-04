import styles from "./styles.module.css";

export function Genres() {
  return (
    <div className={styles.genres}>
      <ul>
        <button>
          <li className={styles.allGenre}>Todos</li>
        </button>
        <button>
          <li>Ação</li>
        </button>
        <button>
          <li>Drama</li>
        </button>
        <button>
          <li>Sci-Fi</li>
        </button>
        <button>
          <li>Terror</li>
        </button>
      </ul>
    </div>
  );
}
