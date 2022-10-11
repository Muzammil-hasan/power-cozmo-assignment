import clsx from 'clsx';
import Link from 'next/link';

type Props = { className?: string };

export default function Logo({ className = '' }: Props) {
  return (
    <Link href={'/'}>
      <a className={clsx('flex items-center gap-x-2', { [className]: className })}>
        <div className="grid w-12 h-12 bg-blue-700 rounded-full place-content-center">
          <span className="block w-6 h-6 bg-white rounded-full shadow-xl" />
        </div>
        <div>
          <p className="text-xs font-bold lg:text-2xl">Power Cozmo</p>
          <p className="text-[0.6em] font-bold tracking-wider text-gray-400 uppercase">
            Power generation | Energy
          </p>
        </div>
      </a>
    </Link>
  );
}
