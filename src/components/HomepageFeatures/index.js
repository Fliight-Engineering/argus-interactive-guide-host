import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  return (
    <section style={{ 
      padding: '6rem 2rem', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#ffffff',
      gap: '4rem'
    }}>
      {/* Logo */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img 
          src="/img/vts-guide/image27.png" 
          alt="Argus VTS" 
          style={{ 
            maxWidth: '1000px', 
            width: '80%', 
            height: 'auto'
          }}
        />
      </div>

      {/* Buttons - MUCH BIGGER SIZE */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',   
        alignItems: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/setup-operation/"
          style={{ 
            fontSize: '2rem', 
            padding: '2rem 4rem',
            minWidth: '380px',
            fontWeight: '600'
          }}>
          <img src="/img/vts-guide/real-quickstart-removebg-preview.png" alt="Quick Start" style={{width: '200px', height: '200px', marginRight: '24px', verticalAlign: 'middle'}} />
          Quick Start
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="/docs/"
          style={{ 
            fontSize: '2rem', 
            padding: '2rem 4rem',
            minWidth: '380px',
            fontWeight: '600'
          }}>
          <img src="/img/vts-guide/manual.png" alt="Manual" style={{width: '200px', height: '200px', marginRight: '24px', verticalAlign: 'middle'}} />
          Manual and Documentations
        </Link>
      </div>
    </section>
  );
}
