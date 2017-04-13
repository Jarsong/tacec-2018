import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../../styles.css';
import programImg from '../../images/03_Program2_03.png';


export default class ScheduleEN extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={programImg} className={styles.aboutImg}/></div>
        <Container className={styles.landingBody}>
        	<Row>
	          <Col md="10" md-offset="1">
              <div style={{height: 500}}>
    	          <p className={styles.bodyTextAbout}>
                  TAC/EC program details are coming soon!
                </p>
              </div>
	          </Col>
          </Row>
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
            target="_blank">
            <Button color="primary" className={styles.applyNowButton}>Apply Now</Button>
          </a>
        </div>
      </div>
    );
  }
}
