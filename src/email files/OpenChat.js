import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import Header from './assets/header';
import Footer from './assets/footer';
import Home from './assets/body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome arrow icon
import ChatWidget from './chat';

const OpenChat = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showArrowUp, setShowArrowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position and the height of the document
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.offsetHeight;

      // Check if the user is at the bottom of the page (within 50px)
      if (scrollPosition >= pageHeight - 50) {
        setIsAtBottom(true); // Set state to indicate user is at the bottom
        setShowArrowUp(true); // Show arrow up when at the bottom
      } else {
        setIsAtBottom(false); // Not at the bottom
        setShowArrowUp(false); // Hide arrow when scrolling up
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Home />
      <Footer />

      {/* Conditionally render the ChatWidget if not at the bottom */}
      {!isAtBottom && <ChatWidget />}

      {/* Show the "arrow up" button when the user scrolls to the bottom */}
      {showArrowUp && (
        <div
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            height: "2rem",
            width: "2rem",
            display: "grid",
            placeItems: "center",
            backgroundColor: '#fff', // White background
            color: '#0132F3', // Black arrow color
            borderRadius: '50%', // 50% border radius for a circular button
            padding: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            zIndex: 1000, // Ensure it's on top of other elements
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </div>
      )}
    </>
  );
};

export default OpenChat;
