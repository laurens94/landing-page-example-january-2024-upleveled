import styles from './App.module.scss';
import Button from './Button';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src="/images/logo.webp" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a className={styles.link} href="/">Product</a>
              </li>
              <li>
                <a className={styles.link} href="/">Customers</a>
              </li>
              <li>
                <a className={styles.link} href="/">Company</a>
              </li>
              <li>
                <a className={styles.link} href="/">Pricing</a>
              </li>
              <li>
                <a className={styles.link} href="/">Changelog</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <a className={styles.link} href="/">Sign In</a>
              </li>
              <li>
                <Button>Book a Demo</Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={styles.wrapper}>
        <main>
          <section className={styles.sectionGradient}>
            <h1>Transform customer feedback into <span className={styles.gradient}>product growth</span></h1>
            <p>All customer feedback unified automatically and categorized accurately to empower product orgs to prioritize and build what matters.</p>
            <div className={styles.buttons}>
              <Button large>Book a Demo</Button>
              <Button large alternative>Try Enterpret</Button>
            </div>
            <div className={styles.divider} />
          </section>
          <section>
            <h2>Leading customer feedback intelligence for product development teams</h2>

            <div>
              <div className='left'>
                <p className='label'>Centralize</p>
                <h3>Consolidate and organize customer feedback in hours not days</h3>
                <ul>
                  <li>Centralize all customer feedback in a matter of minutes - social media, sales calls, support tickets, community forums.</li>
                  <li>Automatic data pull with custom business logic enabled through powerful native integrations.</li>
                  <li>Customer feedback across all sources is tagged with the same feedback taxonomy.</li>
                </ul>
                <a href="/" className='button'>Book a Demo</a>
              </div>
              <div className='right'>
                <img src="/images/taxonomy.webp" alt="Taxonomy" />
              </div>
            </div>
            <div className={styles.divider} />
          </section>
          <section>
            <h2>Listen, learn, and act on customer feedback</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div>
                  <img src="/images/icon.webp" alt="Icon" />
                  <h3>Source of truth</h3>
                  <p>Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.</p>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <img src="/images/icon.webp" alt="Icon" />
                  <h3>Source of truth</h3>
                  <p>Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.</p>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <img src="/images/icon.webp" alt="Icon" />
                  <h3>Source of truth</h3>
                  <p>Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.</p>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <img src="/images/icon.webp" alt="Icon" />
                  <h3>Source of truth</h3>
                  <p>Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.</p>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <img src="/images/icon.webp" alt="Icon" />
                  <h3>Source of truth</h3>
                  <p>Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.</p>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <img src="/images/icon.webp" alt="Icon" />
                  <h3>Source of truth</h3>
                  <p>Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.</p>
                </div>
              </div>
            </div>

            <div className={styles.divider} />
          </section>
        </main>

        <footer />
      </div>

    </div>
  );
}
