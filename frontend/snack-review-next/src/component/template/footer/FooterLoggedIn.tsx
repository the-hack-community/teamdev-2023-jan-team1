import Link from "next/link";
import { HomeIcon, PlusIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

type FooterLoggedInProps = {
  userName?: string
}

export const FooterLoggedIn = (props: FooterLoggedInProps) => {
  return (
    <div className='h-full mx-4 flex justify-between items-center'>
      <Link href='/' className='text-2xs text-center w-32'>
        <HomeIcon className='h-8 w-8 text-black mx-auto' />
        ホーム
      </Link>
      <Link href='/share' className='text-2xs text-center w-32'>
        <PlusIcon className='h-8 w-8 text-black mx-auto' />
        投稿
      </Link>
      <Link href='/account' className='text-2xs text-center w-32 text-ellipsis whitespace-nowrap overflow-hidden'>
        <FaceSmileIcon className='h-8 w-8 mx-auto text-orange-400' />
        {props.userName}
      </Link>
    </div>  
  );
};