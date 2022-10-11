import NavLink from '@/components/NavLink';
import NavData from '@/context/NavData';

export default function Sidebar() {
  return (
    <aside className="absolute flex justify-center py-10 bg-white shadow-xl left-6 ring-1 ring-gray-200 rounded-xl top-36 w-60">
      <nav>
        <ul className="space-y-2">
          {NavData.map(({ Icon, name, path }) => (
            <li key={name}>
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
