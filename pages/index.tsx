import toast from 'react-hot-toast';

export default function Home() {
  const notify = () => toast.success('Here is your toast.');
  return (
    <div className="grid min-h-screen place-content-center">
      <button onClick={notify}>Toast</button>
    </div>
  );
}
