import React from 'react';
import Link from 'next/link';
import { Container, Row } from 'reactstrap';

import HTMLHead from './HTMLHead';

const Layout = ComposedComponent => () => (
  <Container fluid>
    <HTMLHead />
    <header>
      <Row className="header">
        <div className="header-name">benjames.me</div>
        <nav className="navbar">
          <Link href="/" prefetch>
            <a className="link">HOME</a>
          </Link>
          <Link href="/cv" prefetch>
            <a className="link">CV</a>
          </Link>
        </nav>
      </Row>
    </header>
    <ComposedComponent />
    <footer>
      <Row className="footer">
        <p>Made with ❤️ using the brilliant <a className="link-secondary" href="https://github.com/zeit/next.js">next.js</a>.</p>
      </Row>
    </footer>
    <style jsx global>{`
      .header {
        background-color: #3fafab;
        background: linear-gradient(#3fafab, #2d9262);
        flex-direction: column;
        align-items: center;
      }

      .header-name {
        font-size: 2.875rem;
        font-family: 'chunkfive';
        color: #fefefe;
        padding: 2.5rem 0 3.5rem;
      }

      .navbar {
        display: flex;
        flex-direction: row;
      }

      .link {
        flex: 1;
        padding: 0.9rem 1rem 0.75rem;
        font-size: 0.8125rem;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        text-decoration: none;
      }

      .link:hover {
        background: rgba(250, 250, 250, 0.7);
        color: #333;
        transition: all .25s ease-in-out;
      }

      .footer {
        background-color: #173e43;
        color: #FFF;
        text-align: center;
        padding-top: 20px;
        justify-content: center;
      }
    `}</style>
  </Container>
);

export default Layout;
