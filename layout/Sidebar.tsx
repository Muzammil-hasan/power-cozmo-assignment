import NavLink from '@/components/NavLink';
import NavData from '@/context/NavData';

export default function Sidebar() {
  return (
    <aside className="absolute left-0 flex justify-center h-screen py-10 bg-white shadow-xl top-[5.6rem] w-60">
      <nav>
        <ul className="space-y-2">
          {NavData.map(({ Icon, name, path }) => (
            <li>
              <NavLink
                to={path}
                activeClass="active-link"
                className="flex items-center px-8 py-2 text-sm font-semibold text-gray-900 uppercase rounded-md gap-x-3 hover:bg-blue-100 transition-ease"
              >
                <span>
                  <Icon className="w-5 h-5" />
                </span>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
