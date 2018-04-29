import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineMax, Power0 } from 'gsap';

import media from '../../styles/media';

const BLOB_ELEMENT = 'blob-path';

export default class MovingBlob extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    this.timeline = new TimelineMax({
      repeat: -1,
      delay: 0,
      repeatDelay: 0,
      yoyo: true,
    });

    this.timeline
      .to(`#${BLOB_ELEMENT}`, 10, {
        attr: {
          d:
            'M424.063759,512.960181 C589.749184,512.960181 668.758983,398.389437 668.758983,232.704012 C668.758983,67.018587 515.685425,247.201383 350,247.201383 C184.314575,247.201383 65.1927567,251.942687 65.1927567,417.628111 C65.1927567,583.313536 258.378334,512.960181 424.063759,512.960181 Z',
        },
        ease: Power0.easeNone,
      })
      .to(`#${BLOB_ELEMENT}`, 10, {
        attr: {
          d:
            'M350,650 C515.685425,650 650,515.685425 650,350 C650,184.314575 515.685425,50 350,50 C184.314575,50 50,184.314575 50,350 C50,515.685425 184.314575,650 350,650 Z',
        },
        ease: Power0.easeNone,
      })
      .to(`#${BLOB_ELEMENT}`, 10, {
        attr: {
          d:
            'M482.684579,631.633162 C557.951654,611.941737 688.535756,305.629094 668.758983,232.704012 C624.920077,71.0519686 310.611926,93.7545435 175.976814,158.945583 C88.647753,201.230779 133.009134,294.163227 133.009134,459.848652 C133.009134,625.534077 324.532254,673.009083 482.684579,631.633162 Z',
        },
        ease: Power0.easeNone,
      })
      .to(`#${BLOB_ELEMENT}`, 10, {
        attr: {
          d:
            'M313.710743,460.890336 C480.667586,514.928605 543.483105,686.744126 598.471299,530.654445 C637.775123,419.086469 509.096977,215.76901 353.159719,164.814935 C218.365777,120.769651 102.263208,-64.3915219 74.1952049,94.0378774 C45.1766619,257.832586 156.565167,410.027642 313.710743,460.890336 Z',
        },
        ease: Power0.easeNone,
      });
  }
  render() {
    return (
      <SvgCanvas>
        <path
          id={BLOB_ELEMENT}
          d="M357.3774314311999,481.4943736665 C523.8311743285999,514.1496996232 593.0547699245999,572.6421755627002 626.2841355588,412.7554586619002 C650.035436402,279.7732080926002 511.7040258736,228.2067999961 351.9094181917,197.41525247359994 C204.89171636860002,170.79868735239992 87.59443042059003,60.781924561729824 70.63293614726,222.0825328355198 C53.09703061235999,386.6253979149998 196.85263718189992,450.75804768229995 357.3774314311999,481.4943736665 Z"
        />
      </SvgCanvas>
    );
  }
}

const SvgCanvas = styled.svg.attrs({
  width: 700,
  height: 700,
  xmlns: 'http://www.w3.org/2000/svg',
})`
  fill: rgb(238, 80, 80);

  ${media.small`
    width: 100%;
  `};
`;
