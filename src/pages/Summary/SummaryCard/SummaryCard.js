import React, { useState } from 'react'

import './SummaryCard.css'
import IconArrowRight from '../../../assets/icon/arrow-right.png'

function SummaryCard({data}) {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }
  return (
    <div className='summary-card' onClick={toggle}>
        <div className='summary-card-first-row'>
            <p className='summary-card-question-text'>{data.question}</p>
            <img src={IconArrowRight} alt='icon-arrow-right' className={show?'section-card-icon-arrow active':'section-card-icon-arrow'} onClick={toggle}/>
        </div>
        {show && (
            <div>
            <p className='reguler-text' style={{color:'#000000'}}>
            {data.answer}
            </p>
        </div>
        )}
        
    </div>
  )
}

export default SummaryCard