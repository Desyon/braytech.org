import React from 'react';

import { t } from '../../../utils/i18n';

import ClanViewsLinks from '../ClanViewsLinks';

import './styles.css';

class ViewportWidth extends React.Component {
  render() {
    return (
      <>
        <ClanViewsLinks {...this.props} />
        <div className='module'>
          <div className='properties'>
            <div className='name'>{t('Clan Admin')}</div>
            <div className='description'>
              <p>{t('Clan Admin mode is intended for use on larger displays. Please use a display with a viewport of atleast 1280px.')}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ViewportWidth;
