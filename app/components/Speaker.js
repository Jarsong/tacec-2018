import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../styles.css';
import speakerImg from '../images/04_Speaker2_03.png';
import speakerData from '../data/SpeakerData';

export default class Speaker extends React.Component {
  render() {

    const speakerBlock = (speaker) => (
      <div>
          <Row className={styles.speakerBio}>
            <Col lg="2" lg-offset="2" md="2" md-offset="5" xs="6" xs-offset="3">
              <div className={styles[`speakerImg${speaker.uid}`] + ' ' + styles.speakerAvatar} />
            </Col>
            <Col lg="6" lg-offset="0" md="8" md-offset="2" xs="12" className={styles.speakerDetail}>
              <h3 className={styles.speakerTitle}>{speaker.name.zh}</h3>
              <h4 className={styles.speakerSubtitle}>{speaker.affiliation.zh}</h4>
              <p className={styles.staffCardBodyText}>
                {speaker.intro.zh}
               </p>
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.iceDivider} />
            </Col>
          </Row>
      </div>
    );

    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={speakerImg} alt="Speaker icon image" className={styles.aboutImg}/></div>
        <Container className={styles.landingBody}>
	        <Row>
	          <Col md="10" md-offset="1">
              {speakerData.speakers.map(speaker => speakerBlock(speaker))}
	          </Col>
          </Row>
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
            target="_blank">
            <Button color="primary" className={styles.applyNowButton}>Register Now</Button>
          </a>
        </div>
      </div>
    );
  }
}
