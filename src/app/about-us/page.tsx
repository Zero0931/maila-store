import React from 'react';

const AboutUsPage = () => {
  const styles = {
    aboutContainer: {
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'rgba(28, 28, 28, 0.5)',
      color: '#eee',
      height: '1300px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
    },
    title: {
      textAlign: 'center',
      fontSize: '75px',
      color: '#e0e0e0',
      letterSpacing: '1px',
    },
    subtitle: {
      textAlign: 'center',
      fontSize: '1rem',
      color: '#ccc',
      marginBottom: '40px',
      fontWeight: 'bold'
    },
    headline: {
      fontSize: '1.5rem',
      color: '#ccc',
      fontWeight: 'bold',
      marginBottom: '20px',
      display: 'block',
    },
    content: {
      display: 'flex',
      flexDirection: 'row', // Keep the flex layout for row alignment
      justifyContent: 'space-between',
    },
    textSection: {
      flex: 1,
      paddingRight: '20px',
      marginTop: '20px',
      maxWidth: '48%', // Adjust width to fit next to images
      textAlign: 'justify',
      fontSize: '17px'
    },
    imageSection: {
      flex: 1,
      position: 'relative',
      height: '800px',
    },
    image: {
      width: '200px',
      height: '300px',
      borderRadius: '8px',
      position: 'absolute',
      transition: 'transform 0.3s',
    },
    image1: {
      left: 'calc(30% - 75px)',
      top: '0',
      zIndex: 1,
    },
    image2: {
      left: 'calc(60% + 15px)',
      top: '0px',
      zIndex: 2,
    },
    image3: {
      left: 'calc(30% - 75px)',
      top: '350px',
      zIndex: 1,
    },
    image4: {
      left: 'calc(60% + 15px)',
      top: '350px',
      zIndex: 2,
    },
    image5: {
      left: 'calc(30% - 75px)',
      top: '700px',
      zIndex: 1,
    },
    image6: {
      left: 'calc(60% + 15px)',
      top: '700px',
      zIndex: 2,
    },
    verticalLine: {
      width: '2px',
      backgroundColor: '#ccc',
      height: '1000px',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-45 z-0"></div>
      <div style={styles.aboutContainer}>
        <h1 style={styles.title}>About Us</h1>
        <h3 style={styles.subtitle}>What makes Maila's Store unique?</h3>
        
        <div style={styles.content}>
          <div style={styles.textSection}>
            <div style={styles.headline}>Brief History</div>
            <p>
            Formerly known as "Maila's Store", it was established in 1979 by Susana Pasia Carandang. 
            It was named after her daughter <i>Maila</i>. The store opened in Aldevinco Shopping Center located at the corner of C.M Recto St. and Roxas Avenue.
            <br></br><br></br>
            Maila's Store catered to local and foreign tourists for their souvenirs. 
            The store products included locally made garments, tribal items like bracelets and necklaces, bags made of batik cloth, barongs, and other native products. 
            <br></br><br></br>
            In 2007, Susana retired and her daughter Maila took over the management of the Store.
            </p>
            <br></br>
            <p className="mb-12">
            Maila's Store closed during the COVID-19 pandemic. It was also during that time that the Aldevinco Shopping Center permanently closed and 
            most of its tenants, including Maila's Store transferred to Poblacion Market Central located in C. Bangoy, Davao City in 2021. The store was in operation for only two years,
            from 2021 to 2023. In February 2024, the shop transferred to a bigger space in Emilia's Mindanao Souvenir Center located along C.M. Recto Street, Davao City, now known as
            Maila's Souvenir Shop.
            </p>
            <div style={styles.headline}>Background</div>
            <p className="mb-6">
              Today, Maila's Souvenir Shop now expanded to other items like barongs and Filipiniana dresses that offer on a low price. As such, the store is committed to
              delight its customers whether locals of the city to foreign tourists visiting Davao and the Philippines in general.
            </p>
          </div>
          
          <div style={styles.verticalLine}></div>
          <div style={styles.imageSection}>
            <img src="/images/about-us1.jpg" alt="Placeholder 1" style={{ ...styles.image, ...styles.image1 }} />
            <img src="/images/about-us2.jpg" alt="Placeholder 2" style={{ ...styles.image, ...styles.image2 }} />
            <img src="/images/about-us3.jpg" alt="Placeholder 3" style={{ ...styles.image, ...styles.image3 }} />
            <img src="/images/about-us4.jpg" alt="Placeholder 4" style={{ ...styles.image, ...styles.image4 }} />
            <img src="/images/9.jpg" alt="Placeholder 5" style={{ ...styles.image, ...styles.image5 }} />
            <img src="/images/16.jpg" alt="Placeholder 6" style={{ ...styles.image, ...styles.image6 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
