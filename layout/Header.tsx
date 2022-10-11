import SearchIcon from '@/components/icons/SearchIcon';
import Logo from '@/components/Logo';
import ProfileDropDown from '@/components/ProfileDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Divider, IconButton, InputBase } from '@mui/material';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-5 bg-white shadow-sm shadow-gray-200">
      <Logo />

      <form>
        <div className="flex items-center pl-4 pr-1 rounded-md w-[30rem] ring-1 ring-gray-400">
          <InputBase name="search" size="small" className="flex-1 h-11" />
          <IconButton type="button" className="p-2" aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
      </form>

      <div className="flex items-center gap-x-2">
        <IconButton type="button">
          <NotificationsNoneIcon />
        </IconButton>
        <Divider className="h-6" orientation="vertical" />
        <ProfileDropDown />
      </div>
    </header>
  );
}
