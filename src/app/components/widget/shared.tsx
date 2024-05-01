import Link from "next/link"
import { FC } from 'react'; // Import FC type from React


interface LinkedAcci{
url:string;
children:React.ReactNode
}

const Shared: FC<LinkedAcci> = ({url,children}) => {
  return (
    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300'>
      {/* You should provide a valid href value for the Link */}
      <Link href={url}>
        {children}
      </Link>
    </div>
  );
}

export default Shared;

