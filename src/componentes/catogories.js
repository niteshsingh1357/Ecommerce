import { Link } from 'react-router-dom'
const Catogories = () => {
  return (
    <>
      <div
        className='nav flex-column nav-pills'
        id='v-pills-tab'
        role='tablist'
        aria-orientation='vertical'
      >
        <Link
          className='nav-link active'
          id='v-pills-home-tab'
          data-toggle='pill'
          href='#v-pills-home'
          role='tab'
          aria-controls='v-pills-home'
          aria-selected='true'
        >
          Home
        </Link>
        <Link
          className='nav-link'
          id='v-pills-profile-tab'
          data-toggle='pill'
          href='#v-pills-profile'
          role='tab'
          aria-controls='v-pills-profile'
          aria-selected='false'
        >
          Profile
        </Link>
        <Link
          className='nav-link'
          id='v-pills-messages-tab'
          data-toggle='pill'
          href='#v-pills-messages'
          role='tab'
          aria-controls='v-pills-messages'
          aria-selected='false'
        >
          Messages
        </Link>
        <Link
          className='nav-link'
          id='v-pills-settings-tab'
          data-toggle='pill'
          href='#v-pills-settings'
          role='tab'
          aria-controls='v-pills-settings'
          aria-selected='false'
        >
          Settings
        </Link>
      </div>
      <div className='tab-content' id='v-pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='v-pills-home'
          role='tabpanel'
          aria-labelledby='v-pills-home-tab'
        >
          ...
        </div>
        <div
          className='tab-pane fade'
          id='v-pills-profile'
          role='tabpanel'
          aria-labelledby='v-pills-profile-tab'
        >
          ...
        </div>
        <div
          className='tab-pane fade'
          id='v-pills-messages'
          role='tabpanel'
          aria-labelledby='v-pills-messages-tab'
        >
          ...
        </div>
        <div
          className='tab-pane fade'
          id='v-pills-settings'
          role='tabpanel'
          aria-labelledby='v-pills-settings-tab'
        >
          ...
        </div>
      </div>
    </>
  );
};

export default Catogori;
