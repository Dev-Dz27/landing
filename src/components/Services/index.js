import React from 'react';

import Icon1 from '../../img/svg-1.svg';
import Icon2 from '../../img/svg-2.svg';
import Icon3 from '../../img/svg-3.svg';
import Icon4 from '../../img/svg-4.svg';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElement'

const Services = () => {
  return (
<ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
    <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>SEO and Google Analytics</ServicesH2>
        <ServicesP> user-friendly UI that is also valuable by SEO, and the ability to connect your website with Google analytics.</ServicesP>
    </ServicesCard>
    <ServicesCard>
        <ServicesIcon src={Icon3} />
        <ServicesH2>Stay Notified</ServicesH2>
        <ServicesP>Get a notifications each time you have an Order, update...</ServicesP>
    </ServicesCard>
    <ServicesCard>
        <ServicesIcon src={Icon2} />
        <ServicesH2>Freedom to grow</ServicesH2>
        <ServicesP>gives your businesses the freedom to innovate and grow.</ServicesP>
    </ServicesCard>
    <ServicesCard>
        <ServicesIcon src={Icon4} />
        <ServicesH2>Instant page loading</ServicesH2>
        <ServicesP>Extremely fast because of the static destinations and server-side rendering features .</ServicesP>
    </ServicesCard>
    </ServicesWrapper>
</ServicesContainer>
  )
}

export default Services