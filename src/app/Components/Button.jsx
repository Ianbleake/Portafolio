import React from 'react';
import { Link } from '@/i18n/routing.ts'

const Button = ({url,action,label}) => {

  if(url){
    return (
      <Link href={url} className='btn'>
        <span  className="button_top">{label}</span>
      </Link>
    )
  }else{
    return (
      <button className='btn' onClick={action} >
        <span  className="button_top">{label}</span>
      </button>
    );
  }
}

export default Button;
