// import React from 'react'
// import "./Sidebar.css"
// import TwitterIcon from '@mui/icons-material/Twitter';
// import SidebarOption from './SidebarOption'
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { Button } from '@mui/material';

// function Sidebar() {
//     return (
//         <div className = "sidebar">
//            <TwitterIcon
//               className = "sidebar__twitterIcon"                
//            /> 

//            <SidebarOption active
//               Icon = {HomeIcon}
//               text = "Home"  
//            />
//            <SidebarOption 
//               Icon = {SearchIcon}
//               text = "Explore"  
//            />
//            <SidebarOption 
//               Icon = {NotificationsNoneIcon}
//               text = "Notifications"  
//            />
//            <SidebarOption 
//               Icon = {MailOutlineIcon}
//               text = "Message"  
//            />
//            <SidebarOption 
//               Icon = {BookmarkBorderIcon}
//               text = "Bookmarks"  
//            />
//            <SidebarOption
//               Icon = {ListAltIcon} 
//               text = "Lists"  
//            />
//            <SidebarOption 
//               Icon = {PermIdentityIcon}
//               text = "Profile"  
//            />
//            <SidebarOption 
//               Icon = {MoreHorizIcon}
//               text = "More"  
//            />
//            <Button 
//                variant = "outlined" 
//                className = "sidebar__tweet">
//                Tweet
//             </Button>
//         </div>
//     )
// }

import React from 'react';
import './Sidebar.css';
import { BsTwitter } from 'react-icons/bs'; // Replace `fa` with the appropriate icon package you want to use
import SidebarOption from './SidebarOption';
// import { RiHomeLine, RiSearchLine, RiNotificationLine, RiMailLine, RiBookmarkLine, RiFileListLine, RiUserLine, RiMoreLine } from 'react-icons/ri'; // Replace with the appropriate icons from the react-icons package

import { FaHome} from 'react-icons/fa';
import { ImSearch} from 'react-icons/im';
import { MdNotificationsActive} from 'react-icons/md';
import { HiMailOpen} from 'react-icons/hi';
import { FaBookmark} from 'react-icons/fa';
import { RiFileListFill} from 'react-icons/ri';
import { FaUser} from 'react-icons/fa';
import { RiMoreLine} from 'react-icons/ri';

import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      <BsTwitter className="sidebar__twitterIcon" />

      <SidebarOption active Icon={FaHome} text="Home" />
      <SidebarOption Icon={ImSearch} text="Explore" />
      <SidebarOption Icon={MdNotificationsActive} text="Notifications" />
      <SidebarOption Icon={HiMailOpen} text="Message" />
      <SidebarOption Icon={FaBookmark} text="Bookmarks" />
      <SidebarOption Icon={RiFileListFill} text="Lists" />
      <SidebarOption Icon={FaUser} text="Profile" />
      <SidebarOption Icon={RiMoreLine} text="More" />
      <Button variant="outlined" className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
}


export default Sidebar
