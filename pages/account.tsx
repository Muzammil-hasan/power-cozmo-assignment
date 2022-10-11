import { useUserContext } from '@/context/UserContext';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { isEmpty, omit } from 'lodash-es';

export default function Account() {
  const user = useUserContext();
  const valuesToOmit = ['created_at', 'updated_at'];

  return (
    <div className="min-h-screen">
      {!isEmpty(user) && (
        <section className="px-16 py-12">
          <div className="flex items-center gap-x-10">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 p-4 text-6xl bg-red-500">
                {user.name.split('')[0]}
              </Avatar>
              <IconButton className="absolute bottom-0.5 right-0 p-1 bg-white shadow-lg">
                <ModeEditOutlineIcon className="z-10 w-5 h-5 text-gray-700 rotate-2" />
              </IconButton>
            </div>

            <div>
              <p className="text-2xl font-bold">{user.name}</p>
              <p className="text-semibold">{user.email}</p>
            </div>
          </div>

          <ul className="flex flex-col w-1/2 px-4 py-10 mt-6 ml-4 bg-white divide-y-2 rounded-lg gap-y-2 ring-1 ring-gray-200">
            {Object.entries(omit(user, valuesToOmit)).map(([key, value]: any) => (
              <li key={key} className="flex items-center justify-between pt-2">
                <p className="font-semibold uppercase">{key} :</p>
                <p>{value === null ? 'not verified' : value}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
